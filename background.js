chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log('Received data from content script:', message);
  });
  