const body_dark = document.querySelector('.theme');
const dark = document.querySelector('.fa-moon');
const light = document.querySelector('.fa-sun');
const to_top = document.querySelector('.to-top');
const loader = document.querySelector('.loader');
function toggleDarkMode() {
    body_dark.classList.toggle('dark');
    dark.classList.toggle('show');
    light.classList.toggle('show');
}
window.addEventListener('load', () => {
    loader.classList.add("disappear");
});
dark.addEventListener('click', () => {
    toggleDarkMode();
});
light.addEventListener('click', () => {
    toggleDarkMode();
});
/*
const now = new Date();
const hours = now.getHours();
if (hours >= 18 || hours <= 6) {
    toggleDarkMode();
}
*/
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        to_top.classList.add('active');
    } else {
        to_top.classList.remove('active');
    }
});
dark.addEventListener('touchend', (event) => {
    event.preventDefault(); 
    toggleDarkMode();
});
light.addEventListener('touchend', (event) => {
    event.preventDefault(); 
    toggleDarkMode();
});