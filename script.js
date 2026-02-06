document.addEventListener('DOMContentLoaded', function() {
    // 1. Animation du logo Google (rotation à chaque survol)
    const logo = document.querySelector('.logo-google img');
    if (logo) {
        logo.addEventListener('mouseover', function() {
            this.style.transform = 'rotate(0deg)';
            void this.offsetWidth;
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 1s';
        });
    }

    // 2. Effet de fondu pour les sections ".intro"
    const intros = document.querySelectorAll('.intro');
    let lastScrollPosition = 0; // Variable pour suivre la position du défilement

    // Initialise l'opacité à 0.3 pour toutes les sections .intro
    intros.forEach(intro => {
        intro.style.opacity = '0.3';
    });

    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.pageYOffset;

        intros.forEach(intro => {
            const introPosition = intro.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Si la section est visible à l'écran, la rendre complètement opaque
            if (introPosition < windowHeight - 100) {
                intro.style.opacity = '1';
            }
            // Si on ne descend plus (remonte), ne pas modifier l'opacité
            else if (currentScrollPosition < lastScrollPosition) {
                // Ne rien faire, garder l'opacité actuelle
            }
        });

        // Met à jour la dernière position de défilement
        lastScrollPosition = currentScrollPosition;

        // 3. Bouton "Retour en haut" avec fondu
        const returnToTopButton = document.getElementById('return-to-top');
        if (returnToTopButton) {
            if (currentScrollPosition > 200) {
                returnToTopButton.classList.add('visible');
            } else {
                returnToTopButton.classList.remove('visible');
            }
        }
    });

    // 4. Gestion du clic sur le bouton "Retour en haut"
    const returnToTopButton = document.getElementById('return-to-top');
    if (returnToTopButton) {
        returnToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
   
    }
});
