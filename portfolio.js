const navlink = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const linkLang = document.querySelectorAll('.lang');

const textFooter = document.getElementById('textFooter')

const year = new Date().getFullYear()


document.addEventListener('DOMContentLoaded', () => {
    const frase = `© ${year} estebanSem. All rights reserved`

    textFooter.innerHTML = frase;
})

// Añadir un evento de clic a cada enlace
navlink.forEach(link => {
    link.addEventListener('click', function() {
        // Remover la clase 'active' de todos los enlaces
        navlink.forEach(link => link.classList.remove('active'));
        
        // Añadir la clase 'active' al enlace que fue clicado
        this.classList.add('active');
    });
});



   
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link"); // Selecciona todos los enlaces de navegación
    const sections = document.querySelectorAll(".section"); // Selecciona todas las secciones

    function updateActiveLink() {
        let currentSection = "";

        // Revisa cada sección para determinar cuál está en la vista
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        // Elimina .active de todos los enlaces y añade .active al actual
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    // Evento para actualizar enlaces al hacer scroll
    window.addEventListener("scroll", updateActiveLink);
});

 


menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('show'); 
});