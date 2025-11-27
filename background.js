function getBaseDomain(url) {
  if (!url || typeof url !== 'string' || !/^https?:\/\//i.test(url)) return null;
  const hostnameMatch = url.match(/^https?:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
  if (!hostnameMatch) return null;
  const hostname = hostnameMatch[1];
  const parts = hostname.split('.');
  if (parts.length < 2) return null;
  let domain = parts.slice(-2).join('.');
  if (parts.length > 2 && parts[parts.length - 2].length <= 3 && parts[parts.length - 2] !== 'com') {
    domain = parts.slice(-3).join('.');
  }
  return domain;
}

function applyGlobalStyleIfAllowed(tabId, url) {
  const domain = getBaseDomain(url);
  if (!domain) return;

  chrome.storage.local.get(["globalStyle", "exceptions"], (data) => {
    const style = data.globalStyle;
    const exceptions = data.exceptions || [];

    if (style && !exceptions.includes(domain)) {
      chrome.tabs.sendMessage(tabId, { action: "applyStyle", style });
    }
  });
}

chrome.tabs.onActivated.addListener((info) => {
  chrome.tabs.get(info.tabId, (tab) => {
    if (tab.url) applyGlobalStyleIfAllowed(tab.id, tab.url);
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if ((changeInfo.status === "complete" || changeInfo.url) && tab.url) {
    applyGlobalStyleIfAllowed(tabId, tab.url);
  }
});


chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
   notify("Extension has been installed successfully")
  }
});
 
function notify(msg) {
  chrome.notifications.create({
    type: "basic",
    iconUrl:"icon.png",
    title: "Font Changer for Chrome",
    message: msg,
  });
}