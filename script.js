document.addEventListener('DOMContentLoaded', function() {
    // 1. Animation du logo Google (rotation à chaque survol)
    const logo = document.querySelector('.logo-google img');
    if (logo) {
        logo.addEventListener('mouseover', function() {
            // Réinitialise la rotation
            this.style.transform = 'rotate(0deg)';
            // Force le navigateur à réappliquer la transition
            void this.offsetWidth;
            // Lance la rotation
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 1s';
        });
    }

    // 2. Effet de fondu pour les sections ".intro"
    const intros = document.querySelectorAll('.intro');
    // Initialise l'opacité à 0 pour toutes les sections .intro
    intros.forEach(intro => {
        intro.style.opacity = '0';
    });

    // Écoute l'événement de défilement
    window.addEventListener('scroll', function() {
        intros.forEach(intro => {
            const introPosition = intro.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            // Si la section est visible à l'écran, la rendre opaque
            if (introPosition < windowHeight - 100) { // -100 pour déclencher un peu avant
                intro.style.opacity = '1';
            }
        });
    });

    // 3. Bouton "Retour en haut"
    const returnToTopButton = document.getElementById('return-to-top');
    if (returnToTopButton) {
        // Écoute l'événement de défilement pour afficher/masquer le bouton
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 200) {
                returnToTopButton.classList.add('visible');
            } else {
                returnToTopButton.classList.remove('visible');
            }
        });

        // Écoute l'événement de clic pour remonter en haut
        returnToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
