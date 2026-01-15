document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.style.padding = '12px 10%';
            navbar.style.background = 'rgba(10, 10, 18, 0.98)';
        } else {
            navbar.style.padding = '20px 10%';
            navbar.style.background = 'rgba(10, 10, 18, 0.9)';
        }
    });
});