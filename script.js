document.addEventListener('DOMContentLoaded', function() {
    // 1. Animation du logo Google (rotation à chaque survol)
    const logo = document.querySelector('.logo-google img');
    if (logo) {
        logo.addEventListener('mouseover', function() {
            this.style.transform = 'rotate(0deg)';
            void this.offsetWidth; // Force le navigateur à réappliquer la transition
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 1s';
        });
    }

    // 2. Effet de fondu pour les sections .intro
    const intros = document.querySelectorAll('.intro');
    // Définir l'opacité initiale à 0 pour toutes les sections .intro
    intros.forEach(intro => {
        intro.style.opacity = '0';
    });

    window.addEventListener('scroll', function() {
        intros.forEach(intro => {
            const position = intro.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (position < windowHeight) {
                intro.style.opacity = '1'; // Devient visible
            }
        });
    });

    // 3. Bouton "Retour en haut"
    const returnToTopButton = document.getElementById('return-to-top');
    if (returnToTopButton) { // Vérifie que le bouton existe
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 200) {
                returnToTopButton.classList.add('visible');
            } else {
                returnToTopButton.classList.remove('visible');
            }
        });

        returnToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
