document.addEventListener('submit', function (event) {
    const inputs = event.target.querySelectorAll('input, textarea, select');
    const formData = {};
  
    inputs.forEach(input => {
      formData[input.name] = input.value;
    });
  
    console.log(formData);
    // Optionally, send this data to your background script
    chrome.runtime.sendMessage(formData);
  }, true);
  