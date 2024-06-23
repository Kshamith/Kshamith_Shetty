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

// form
 window.onload = function() {
        document.getElementById("form").reset();
    };
    const form = document.getElementById('form');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      result.innerHTML = "Please wait..."
    
        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = json.message;
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000);
    });
});

const downloadButton = document.querySelector('.resume-btn');
downloadButton.addEventListener('click', () => {
    alert('Resume download initiated!');
});
