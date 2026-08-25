// Dataset folders available to each entry page. The first item is that page's default.
window.DATASET_LISTS = Object.freeze({
  index: Object.freeze([
    "lucilia",
    "pollenia"
  ]),
  editor: Object.freeze([
    "lucilia",
    "pollenia"
  ])
});

window.showDatasetChooser = function showDatasetChooser(pageKey) {
  const datasets = window.DATASET_LISTS?.[pageKey] || [];
  if (datasets.length < 2) return;

  const overlay = document.createElement("div");
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "dataset-chooser-title");
  overlay.style.cssText = "position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(15,23,42,.72);font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif";

  const panel = document.createElement("div");
  panel.style.cssText = "width:min(440px,100%);padding:28px;border-radius:16px;background:#fff;box-shadow:0 24px 64px rgba(0,0,0,.3);color:#1e293b";
  panel.innerHTML = '<h1 id="dataset-chooser-title" style="margin:0 0 8px;font-size:24px;line-height:1.25">Choose a dataset</h1><p style="margin:0 0 20px;color:#64748b;font-size:14px">Select the identification dataset you want to open.</p>';

  const choices = document.createElement("div");
  choices.style.cssText = "display:grid;gap:10px";
  datasets.forEach(dataset => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = dataset.charAt(0).toUpperCase() + dataset.slice(1);
    button.style.cssText = "width:100%;padding:12px 16px;border:1px solid #cbd5e1;border-radius:10px;background:#f8fafc;color:#0f172a;font:600 16px system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;cursor:pointer;text-align:left";
    button.addEventListener("mouseenter", () => { button.style.background = "#eff6ff"; button.style.borderColor = "#3b82f6"; });
    button.addEventListener("mouseleave", () => { button.style.background = "#f8fafc"; button.style.borderColor = "#cbd5e1"; });
    button.addEventListener("click", () => {
      const params = new URLSearchParams(window.location.search);
      params.set("dataset", dataset);
      window.location.search = params.toString();
    });
    choices.appendChild(button);
  });

  panel.appendChild(choices);
  overlay.appendChild(panel);
  document.body.appendChild(overlay);
  choices.querySelector("button")?.focus();
};
