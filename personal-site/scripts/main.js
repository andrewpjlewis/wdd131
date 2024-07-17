const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    if (navList.classList.contains('active')) {
        navList.style.display = 'flex';
    } else {
        navList.style.display = 'none';
    }
});
