const menuBurger = window.document.getElementById('menu-burger');
console.log(menuBurger);

const menuResponsive = window.document.getElementById('menu-responsive');
console.log(menuResponsive);

menuBurger.addEventListener('click', () => {
    menuResponsive.classList.toggle('hidden');
    menuResponsive.classList.toggle('menu-responsive');
});