const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuToggle.classList.toggle('open');
});

const menuDropdown = document.querySelector('.menu-dropdown');

menuDropdown.addEventListener('click', () => {
    menuDropdown.classList.toggle('active');
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
});