// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Fermer le menu en cliquant sur un lien
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Gestion du formulaire de contact
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Récupération des données du formulaire
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simulation d'envoi (à remplacer par un vrai script backend)
        console.log('Données du formulaire:', data);
        
        // Message de succès
        formMessage.textContent = "✅ Votre message a été envoyé avec succès ! Je vous recontacte dans les 24h.";
        formMessage.style.color = "#38b2ac";
        
        // Réinitialisation du formulaire après 3 secondes
        setTimeout(() => {
            contactForm.reset();
            formMessage.textContent = "";
        }, 5000);
    });
}

// Mise à jour automatique de l'année dans le footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Animation au défilement (scroll)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observer les sections pour l'animation
document.querySelectorAll('.service-card, .testimonial-card').forEach(card => {
    observer.observe(card);
});
