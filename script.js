// Get the root element
var rootElement = document.documentElement;

// Get the toggle button element
var toggleButton = document.getElementById('color-toggle');

// Define your color schemes
var lightColors = {
    '--background': '#f5f5f5',
    '--primary': '#181a1a',
    '--muted': '#cbc7c7',
    '--accent': '#ff4805',
    '--font': '#181a1a'
};

var darkColors = {
    '--background': '#0F1C2E',
    '--primary': '#0055c4',
    '--muted': '',
    '--accent': '#ff4805',
    '--font': '#f5f5f5f5'
};

// Assume light mode is the default
var isLightMode = true;

// Add event listener for the toggle button
toggleButton.addEventListener('click', function() {
    var colorScheme = isLightMode ? darkColors : lightColors;
    Object.keys(colorScheme).forEach(function(key) {
        rootElement.style.setProperty(key, colorScheme[key]);
    });
    isLightMode = !isLightMode;
});





// Get the button and icon elements
var button = document.getElementById('color-toggle');
var icon = document.getElementById('myIcon');

// Add event listener for the button click
button.addEventListener('click', function() {
    // Check the current icon class
    if (icon.classList.contains('ri-moon-fill')) {
        // If it's the moon icon, change it to the sun icon
        icon.classList.remove('ri-moon-fill');
        icon.classList.add('ri-sun-fill');
    } else {
        // If it's the sun icon, change it back to the moon icon
        icon.classList.remove('ri-sun-fill');
        icon.classList.add('ri-moon-fill');
    }
});

