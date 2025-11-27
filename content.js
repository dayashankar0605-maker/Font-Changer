chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "applyStyle") {
    const s = msg.style;

    // Load font if not already loaded
    if (s.url && !document.querySelector(`link[href="${s.url}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = s.url;
      link.setAttribute("data-font-injected", "true");
      document.head.appendChild(link);
    }

    const styleEl = document.createElement("style");
    styleEl.textContent = `
      * {
        font-family: "${s.family}", sans-serif !important;
        font-weight: ${s.weight} !important;
        font-style: ${s.style} !important;
      }
    `;
    styleEl.setAttribute("data-font-injected", "true");
    document.head.appendChild(styleEl);
  }

  if (msg.action === "resetFont") {
    document.querySelectorAll('[data-font-injected]').forEach(el => el.remove());
  }
});