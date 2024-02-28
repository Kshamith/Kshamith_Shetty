// Get the root element
var rootElement = document.documentElement;

// Get the toggle button element
var toggleButton = document.getElementById('color-toggle');

// Define your color schemes
var lightColors = {
    '--background': '#f5f5f5',
    '--primary': '#181a1a',
    '--muted': '#cbc7c7',
    '--accent': '#ff5112',
    '--font': '#181a1a'
};

var darkColors = {
    '--background': '#0F1C2E',
    '--primary': '#0055c4',
    '--muted': '#1F3A5F',
    '--accent': '#ff5112',
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

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var button = document.getElementById('color-toggle');
var icon = document.getElementById('myIcon');

button.addEventListener('click', function() {
    if (icon.classList.contains('ri-moon-fill')) {
        icon.classList.remove('ri-moon-fill');
        icon.classList.add('ri-sun-fill');
    } else {
        icon.classList.remove('ri-sun-fill');
        icon.classList.add('ri-moon-fill');
    }
});

