const applyBtn = document.getElementById("apply-btn");
const resetBtn = document.getElementById("reset-btn");
const resultDiv = document.getElementById("result");
const exceptionInput = document.getElementById("exception-url");
const addExceptionBtn = document.getElementById("add-exception");
const exceptionsList = document.getElementById("exceptions-list");
const familySelect = document.getElementById("font-family");
const weightSelect = document.getElementById("font-weight");
const styleSelect = document.getElementById("font-style");
console.log("dayaß");
const fontMetadata = [
  {
    family: "Roboto",
    weights: [100, 300, 400, 500, 700, 900],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
  },
  {
    family: "Open Sans",
    weights: [300, 400, 600, 700, 800],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap",
  },
  {
    family: "Lato",
    weights: [100, 300, 400, 700, 900],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100..900;1,100..900&display=swap",
  },
  {
    family: "Montserrat",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
  },
  {
    family: "Roboto Condensed",
    weights: [300, 400, 700],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap",
  },
  {
    family: "Source Sans Pro",
    weights: [200, 300, 400, 600, 700, 900],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200..900;1,200..900&display=swap",
  },
  {
    family: "Oswald",
    weights: [200, 300, 400, 500, 600, 700],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap",
  },
  {
    family: "Raleway",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
  },
  {
    family: "Roboto Mono",
    weights: [100, 200, 300, 400, 500, 600, 700],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap",
  },
  {
    family: "Poppins",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100..900;1,100..900&display=swap",
  },
  {
    family: "Noto Sans",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap",
  },
  {
    family: "Roboto Slab",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap",
  },
  {
    family: "Merriweather",
    weights: [300, 400, 700, 900],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300..900;1,300..900&display=swap",
  },
  {
    family: "Ubuntu",
    weights: [300, 400, 500, 700],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300..700;1,300..700&display=swap",
  },
  {
    family: "PT Sans",
    weights: [400, 700],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap",
  },
  {
    family: "Playfair Display",
    weights: [400, 500, 600, 700, 800, 900],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
  },
  {
    family: "Open Sans Condensed",
    weights: [300, 700],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap",
  },
  {
    family: "Mulish",
    weights: [200, 300, 400, 500, 600, 700, 800, 900, 1000],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap",
  },
  {
    family: "PT Serif",
    weights: [400, 700],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap",
  },
  {
    family: "Lora",
    weights: [400, 500, 600, 700],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap",
  },
  {
    family: "Nunito",
    weights: [200, 300, 400, 600, 700, 800, 900, 1000],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap",
  },
  {
    family: "Slabo 27px",
    weights: [400],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=Slabo+27px:wght@400&display=swap",
  },
  {
    family: "Noto Sans JP",
    weights: [100, 300, 400, 500, 700, 900],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap",
  },
  {
    family: "Rubik",
    weights: [300, 400, 500, 600, 700, 800, 900],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap",
  },
  {
    family: "Titillium Web",
    weights: [200, 300, 400, 600, 700],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap",
  },
  {
    family: "Noto Serif",
    weights: [400, 700],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap",
  },
  {
    family: "Fira Sans",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100..900;1,100..900&display=swap",
  },
  {
    family: "Nanum Gothic",
    weights: [400, 700, 800],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap",
  },
  {
    family: "Work Sans",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap",
  },
  {
    family: "Noto Sans KR",
    weights: [100, 300, 400, 500, 700, 900],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap",
  },
  {
    family: "Quicksand",
    weights: [300, 400, 500, 600, 700],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap",
  },
  {
    family: "Nunito Sans",
    weights: [200, 300, 400, 600, 700, 800, 900, 1000],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200..1000;1,200..1000&display=swap",
  },
  {
    family: "PT Sans Narrow",
    weights: [400, 700],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap",
  },
  {
    family: "Inconsolata",
    weights: [200, 300, 400, 500, 600, 700, 800, 900],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap",
  },
  {
    family: "Heebo",
    weights: [100, 300, 400, 500, 700, 800, 900],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=Heebo:wght@100..900&display=swap",
  },
  {
    family: "Arimo",
    weights: [400, 500, 600, 700],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap",
  },
  {
    family: "Dosis",
    weights: [200, 300, 400, 500, 600, 700, 800],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap",
  },
  {
    family: "Oxygen",
    weights: [300, 400, 700],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap",
  },
  {
    family: "Noto Sans TC",
    weights: [100, 300, 400, 500, 700, 900],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap",
  },
  {
    family: "Karla",
    weights: [200, 300, 400, 500, 600, 700, 800],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap",
  },
  {
    family: "Libre Baskerville",
    weights: [400, 700],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap",
  },
  {
    family: "Crimson Text",
    weights: [400, 600, 700],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap",
  },
  {
    family: "Cabin",
    weights: [400, 500, 600, 700],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap",
  },
  {
    family: "Barlow",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100..900;1,100..900&display=swap",
  },
  {
    family: "Bitter",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&display=swap",
  },
  {
    family: "Libre Franklin",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap",
  },
  {
    family: "Josefin Sans",
    weights: [100, 200, 300, 400, 500, 600, 700],
    hasItalic: true,
    url: "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap",
  },
  {
    family: "Hind",
    weights: [300, 400, 500, 600, 700],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap",
  },
  {
    family: "Mukta",
    weights: [200, 300, 400, 500, 600, 700, 800],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap",
  },
  {
    family: "Anton",
    weights: [400],
    hasItalic: false,
    url: "https://fonts.googleapis.com/css2?family=Anton:wght@400&display=swap",
  },
];

let selectedFont = fontMetadata[0];
// font family dropdown
fontMetadata.forEach((font) => {
  const opt = document.createElement("option");
  opt.value = font.family;
  opt.textContent = font.family;
  opt.style.fontFamily = `"${font.family}", sans-serif`;
  familySelect.appendChild(opt);
});

familySelect.value = selectedFont.family;
populateWeightDropdown(selectedFont);
populateStyleDropdown(selectedFont);

familySelect.addEventListener("change", () => {
  const chosen = fontMetadata.find((f) => f.family === familySelect.value);
  if (chosen) {
    selectedFont = chosen;
    populateWeightDropdown(chosen);
    populateStyleDropdown(chosen);
  }
});

//  weight and style wrt family
function populateWeightDropdown(font) {
  weightSelect.innerHTML = "";
  font.weights.forEach((w) => {
    const opt = document.createElement("option");
    opt.value = w;
    opt.textContent =
      w === 400 ? `${w} (Regular)` : w === 700 ? `${w} (Bold)` : w;
    weightSelect.appendChild(opt);
  });
  weightSelect.value = "400";
}

function populateStyleDropdown(font) {
  styleSelect.innerHTML = '<option value="normal">Normal</option>';
  if (font.hasItalic) {
    const opt = document.createElement("option");
    opt.value = "italic";
    opt.textContent = "Italic";
    styleSelect.appendChild(opt);
  }
  styleSelect.value = "normal";
}
//  apply and reset buttons
applyBtn.addEventListener("click", () => {
  const style = {
    family: selectedFont.family,
    weight: weightSelect.value,
    style: styleSelect.value,
    url: selectedFont.url,
  };

  chrome.storage.local.set({ globalStyle: style }, () => {
    resultDiv.textContent = `Applied ${style.family} ${style.weight} ${
      style.style === "italic" ? "italic" : ""
    }`;

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      const domain = getBaseDomain(tab.url);
      if (domain) {
        chrome.storage.local.get("exceptions", (data) => {
          const exceptions = data.exceptions || [];
          if (!exceptions.includes(domain)) {
            chrome.tabs.sendMessage(tab.id, { action: "applyStyle", style });
          }
        });
      }
    });
  });
});

resetBtn.addEventListener("click", () => {
  chrome.storage.local.remove("globalStyle", () => {
    resultDiv.textContent = "Global font reset.";
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "resetFont" });
    });
  });
});

// exceptions
addExceptionBtn.addEventListener("click", () => {
  const inputUrl = exceptionInput.value.trim();
  if (!inputUrl) return;
  const domain = getBaseDomain(inputUrl);
  if (domain) addException(domain);
  else resultDiv.textContent = "Invalid URL.";
});

function addException(domain) {
  chrome.storage.local.get("exceptions", (data) => {
    let exceptions = data.exceptions || [];
    if (!exceptions.includes(domain)) {
      exceptions.push(domain);
      chrome.storage.local.set({ exceptions }, () => {
        loadExceptions();
        resultDiv.textContent = `Exception: ${domain}`;
        exceptionInput.value = "";
      });
    }
  });
}

function removeException(index) {
  chrome.storage.local.get("exceptions", (data) => {
    let exceptions = data.exceptions || [];
    exceptions.splice(index, 1);
    chrome.storage.local.set({ exceptions }, loadExceptions);
  });
}

function loadExceptions() {
  chrome.storage.local.get("exceptions", (data) => {
    const list = data.exceptions || [];
    exceptionsList.innerHTML = "";
    list.forEach((domain, i) => {
      const li = document.createElement("li");
      li.textContent = domain;
      const btn = document.createElement("button");
      btn.textContent = "Remove";
      btn.onclick = () => removeException(i);
      li.appendChild(btn);
      exceptionsList.appendChild(li);
    });
  });
}

// save the fonts
chrome.storage.local.get(["globalStyle", "exceptions"], (data) => {
  if (data.globalStyle) {
    const s = data.globalStyle;
    const font =
      fontMetadata.find((f) => f.family === s.family) || fontMetadata[0];
    selectedFont = font;
    familySelect.value = s.family;
    populateWeightDropdown(font);
    populateStyleDropdown(font);
    weightSelect.value = s.weight;
    styleSelect.value = s.style;
  }
  loadExceptions();
});

// get base domain from URL
function getBaseDomain(url) {
  if (!url || typeof url !== "string" || !/^https?:\/\//i.test(url))
    return null;
  try {
    const hostname = new URL(url).hostname;
    const parts = hostname.split(".");
    if (parts.length < 2) return null;
    let domain = parts.slice(-2).join(".");
    if (
      parts.length > 2 &&
      parts[parts.length - 2].length <= 3 &&
      parts[parts.length - 2] !== "com"
    ) {
      domain = parts.slice(-3).join(".");
    }
    return domain;
  } catch (e) {
    return null;
  }
}
