document.addEventListener('DOMContentLoaded', function() {
    // Gestion des barres de progression
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = `${progress}%`;
    });

    // Animation au défilement
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill, .project-card, .about-content').forEach(el => {
        observer.observe(el);
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simulation d'envoi (à remplacer par votre logique d'envoi réelle)
            console.log('Données du formulaire:', data);
            alert('Message envoyé avec succès!');
            this.reset();
        });
    }

    // Menu mobile
    const toggleMenu = () => {
        const nav = document.querySelector('nav ul');
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    };

    // Ajout du bouton de menu mobile
    const nav = document.querySelector('nav');
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-toggle';
    menuButton.innerHTML = '☰';
    menuButton.style.display = 'none';
    menuButton.addEventListener('click', toggleMenu);
    nav.insertBefore(menuButton, nav.firstChild);

    // Gestion responsive du menu
    const handleResize = () => {
        const nav = document.querySelector('nav ul');
        const menuButton = document.querySelector('.menu-toggle');
        
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
            nav.style.display = 'none';
        } else {
            menuButton.style.display = 'none';
            nav.style.display = 'flex';
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
});