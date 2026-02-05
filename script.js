// Attend que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {

    // 1. Animation du logo Google au survol de la souris
    const logo = document.querySelector('.logo-google img');
    if (logo) {
        logo.addEventListener('mouseover', function() {
            // Fait tourner le logo de 360 degrés en 1 seconde
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 1s';
        });
    }

    // 2. Effet de fondu pour les sections ".intro" lors du défilement
    const intros = document.querySelectorAll('.intro');
    window.addEventListener('scroll', function() {
        intros.forEach(intro => {
            // Calcule la position de la section par rapport à la fenêtre
            const position = intro.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Si la section est visible à l'écran, la rendre opaque
            if (position < windowHeight) {
                intro.style.opacity = '1';
                intro.style.transition = 'opacity 1s';
            }
        });
    });

    // 3. Bouton "Retour en haut"
    const returnToTopButton = document.getElementById('return-to-top');

    // Affiche le bouton après un défilement de 200 pixels
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 200) {
            returnToTopButton.classList.add('visible');
        } else {
            returnToTopButton.classList.remove('visible');
        }
    });

    // Fait remonter la page en haut avec une animation fluide
    returnToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
