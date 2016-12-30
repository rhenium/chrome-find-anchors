chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.executeScript(null, {
    file: "toggle-anchors.js",
  }, result => {
  });
});
