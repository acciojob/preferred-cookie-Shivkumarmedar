//your JS code here. If required.
 function setCookie(name, value, days) {
            const expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = `${name}=${value};expires=${expirationDate.toUTCString()};path=/`;
        }

        // Function to get a cookie by name
        function getCookie(name) {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.startsWith(name + '=')) {
                    return cookie.substring(name.length + 1);
                }
            }
            return null;
        }

        // Apply user preferences stored in cookies
        function applyUserPreferences() {
            const fontSize = getCookie('fontSize');
            const fontColor = getCookie('fontColor');

            if (fontSize) {
                document.body.style.fontSize = fontSize + 'px';
            }
            if (fontColor) {
                document.body.style.color = fontColor;
            }
        }

        // Event listener for the "Apply Styles" button
        const applyStylesButton = document.getElementById('apply-styles');
        applyStylesButton.addEventListener('click', function(event) {
            event.preventDefault();

            const fontSizeInput = document.getElementById('font-size');
            const fontColorInput = document.getElementById('font-color');

            const fontSize = fontSizeInput.value;
            const fontColor = fontColorInput.value;

            // Store user preferences in cookies
            setCookie('fontSize', fontSize, 365);
            setCookie('fontColor', fontColor, 365);

            // Apply styles
            applyUserPreferences();
        });

        // Apply user preferences when the page loads
        applyUserPreferences();