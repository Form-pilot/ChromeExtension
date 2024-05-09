chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log('Received data from content script:', message); // This line is not printed and I am not sure why!?
    sendResponse({reply: "Form Content logged"}); // Since this line is printed in the logs, I am sure this function is called
  //   setTimeout(function() {
  //     sendResponse({farewell: "goodbye"});
  // }, 1000);
    return true; // This is crucial for async response
  });