// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Funcionalidad Menú Hamburguesa (Móvil) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Cambiar el icono de hamburguesa a 'X'
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });


    // --- Efecto Navbar al hacer Scroll ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            // Si bajamos más de 100px, hacemos la navbar más sólida y pequeña
            navbar.style.background = 'rgba(10, 10, 18, 0.95)';
            navbar.style.padding = '15px 10%';
        } else {
            // Si estamos arriba, vuelve a ser más transparente
            navbar.style.background = 'rgba(10, 10, 18, 0.8)';
            navbar.style.padding = '20px 10%';
        }
    });
});