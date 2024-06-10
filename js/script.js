const body_dark = document.querySelector('.theme');
const dark = document.querySelector('.fa-moon');
const light = document.querySelector('.fa-sun');
const to_top = document.querySelector('.to-top');
const loader = document.querySelector('.loader');

// Function to handle adding and removing the 'dark' class
function toggleDarkMode() {
    body_dark.classList.toggle('dark');
    dark.classList.toggle('show');
    light.classList.toggle('show');
}

window.addEventListener('load', () => {
    loader.classList.add("disappear");
});

// Toggle dark mode when dark or light icons are clicked
dark.addEventListener('click', () => {
    toggleDarkMode();
});

light.addEventListener('click', () => {
    toggleDarkMode();
});

// Toggle dark mode based on time (optional)
/*
const now = new Date();
const hours = now.getHours();
if (hours >= 18 || hours <= 6) {
    toggleDarkMode();
}
*/

// Show/hide 'to-top' button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        to_top.classList.add('active');
    } else {
        to_top.classList.remove('active');
    }
});

// Handle touch events for dark/light mode toggle
dark.addEventListener('touchend', (event) => {
    event.preventDefault(); // Prevent default touch behavior
    toggleDarkMode();
});

light.addEventListener('touchend', (event) => {
    event.preventDefault(); // Prevent default touch behavior
    toggleDarkMode();
});
