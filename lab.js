(() => {
  "use strict";

  const track = (name, data) => window.SUBSUELO_TRACK?.(name, data);

  const copyText = async (value, button, doneLabel) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const helper = document.createElement("textarea");
      helper.value = value;
      helper.setAttribute("readonly", "");
      helper.style.position = "absolute";
      helper.style.left = "-9999px";
      document.body.append(helper);
      helper.select();
      document.execCommand("copy");
      helper.remove();
    }
    const original = button.dataset.label || button.textContent;
    button.dataset.label = original;
    button.textContent = doneLabel;
    button.classList.add("is-done");
    setTimeout(() => {
      button.textContent = original;
      button.classList.remove("is-done");
    }, 1600);
  };

  // Constructor de prompts
  const builder = document.querySelector("[data-builder]");
  if (builder) {
    const output = builder.querySelector("[data-builder-output]");
    const packNote = builder.querySelector("[data-builder-pack]");
    const packLinks = packNote ? Array.from(packNote.querySelectorAll("[data-pack-option]")) : [];
    const update = () => {
      const fragments = [];
      let selectedPack = "";
      builder.querySelectorAll("[data-axis]").forEach((axis) => {
        const active = axis.querySelector("[data-axis-option].is-selected");
        if (!active) return;
        fragments.push(active.dataset.fragment);
        if (active.dataset.pack) selectedPack = active.dataset.pack;
      });
      output.textContent = fragments.length ? fragments.join(", ") : output.dataset.empty;
      output.classList.toggle("is-empty", !fragments.length);
      if (packNote) {
        packNote.hidden = !selectedPack;
        packLinks.forEach((link) => { link.hidden = link.dataset.packOption !== selectedPack; });
      }
    };
    builder.addEventListener("click", (event) => {
      const option = event.target.closest("[data-axis-option]");
      if (option) {
        const axis = option.closest("[data-axis]");
        const wasSelected = option.classList.contains("is-selected");
        axis.querySelectorAll("[data-axis-option]").forEach((other) => {
          other.classList.toggle("is-selected", other === option && !wasSelected);
          other.setAttribute("aria-pressed", String(other === option && !wasSelected));
        });
        update();
        return;
      }
      const copy = event.target.closest("[data-copy-builder]");
      if (copy && !output.classList.contains("is-empty")) {
        copyText(output.textContent, copy, copy.dataset.done);
        track("lab_copy", { tool: "builder" });
      }
    });
    update();
  }

  // Generador de negative prompts
  const negatives = document.querySelector("[data-negatives]");
  if (negatives) {
    const output = negatives.querySelector("[data-negatives-output]");
    const update = () => {
      const terms = [];
      negatives.querySelectorAll("[data-negative]:checked").forEach((box) => {
        JSON.parse(box.dataset.terms).forEach((term) => {
          if (!terms.includes(term)) terms.push(term);
        });
      });
      output.textContent = terms.length ? terms.join(", ") : output.dataset.empty;
      output.classList.toggle("is-empty", !terms.length);
    };
    negatives.addEventListener("change", update);
    negatives.addEventListener("click", (event) => {
      const copy = event.target.closest("[data-copy-negatives]");
      if (copy && !output.classList.contains("is-empty")) {
        copyText(output.textContent, copy, copy.dataset.done);
        track("lab_copy", { tool: "negatives" });
      }
    });
    update();
  }

  // Diccionario
  const dictionary = document.querySelector("[data-dictionary]");
  if (dictionary) {
    const search = dictionary.querySelector("[data-dictionary-search]");
    const entries = Array.from(dictionary.querySelectorAll("[data-term]"));
    const counter = dictionary.querySelector("[data-dictionary-count]");
    const groups = Array.from(dictionary.querySelectorAll("[data-term-group]"));
    const update = () => {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      entries.forEach((entry) => {
        const match = !query || entry.dataset.term.includes(query) || entry.textContent.toLowerCase().includes(query);
        entry.hidden = !match;
        if (match) visible += 1;
      });
      groups.forEach((group) => {
        group.hidden = !group.querySelector("[data-term]:not([hidden])");
      });
      if (counter) counter.textContent = String(visible);
    };
    search.addEventListener("input", update);
    update();
  }

  // Prompt del mes
  const monthly = document.querySelector("[data-monthly]");
  if (monthly) {
    monthly.addEventListener("click", (event) => {
      const copy = event.target.closest("[data-copy-monthly]");
      if (!copy) return;
      copyText(monthly.querySelector("[data-monthly-prompt]").textContent, copy, copy.dataset.done);
      track("lab_copy", { tool: "monthly" });
    });
  }
})();
