let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/* scroll reveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.beranda-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skill-container, .project-box, .footer-container', { origin: 'bottom' });
ScrollReveal().reveal('.beranda-content h1, .Tentang-img', { origin: 'left' });
ScrollReveal().reveal('.beranda-content p, .tentang-content', { origin: 'right' });
