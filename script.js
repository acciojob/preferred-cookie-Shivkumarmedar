function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()}`;
  }

  // Function to get cookies
  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  // Apply user preferences
  function applyPreferences() {
    const fontSize = getCookie('font-size');
    const fontColor = getCookie('font-color');
    if (fontSize) {
      document.body.style.fontSize = `${fontSize}px`;
    }
    if (fontColor) {
      document.body.style.color = fontColor;
    }
  }

  // Event listener for form submission
  document.getElementById('preferences-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fontSizeInput = document.getElementById('font-size');
    const fontColorInput = document.getElementById('font-color');

    const selectedFontSize = fontSizeInput.value;
    const selectedFontColor = fontColorInput.value;

    setCookie('font-size', selectedFontSize, 30); // Store cookie for 30 days
    setCookie('font-color', selectedFontColor, 30);

    applyPreferences();
  });

  // Apply preferences on page load
  window.addEventListener('load', applyPreferences);