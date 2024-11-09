const navlink = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Añadir un evento de clic a cada enlace
navlink.forEach(link => {
    link.addEventListener('click', function() {
        // Remover la clase 'active' de todos los enlaces
        navlink.forEach(link => link.classList.remove('active'));
        
        // Añadir la clase 'active' al enlace que fue clicado
        this.classList.add('active');
    });
});


menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('show'); 
});