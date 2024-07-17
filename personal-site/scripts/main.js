const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const photoGallery = document.getElementById('hero-h1');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    if (navList.classList.contains('active')) {
        navList.style.display = 'flex';
        photoGallery.style.top = '24%';
    } else {
        navList.style.display = 'none';
        photoGallery.style.top = '5.25%';
    }
});


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
    
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
});

    document.querySelector(".arrow-down").addEventListener('click', () => {
        document.querySelector('.home-main').scrollIntoView({
            behavior: 'smooth'
        })
    })
