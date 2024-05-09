console.log("Hello from the content script!");

document.addEventListener('submit', function (event) {
    console.log("Hello from the content script, inside the function2!");

    const inputs = event.target.querySelectorAll('input, textarea, select');
    const formData = {};
  
    inputs.forEach(input => {
      formData[input.name] = input.value;
    });
  
    console.log(formData);
    // Optionally, send this data to your background script
    chrome.runtime.sendMessage(formData, response => {
      console.log("Response from background:", response);
    });
  }, true);