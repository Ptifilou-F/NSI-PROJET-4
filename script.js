document.addEventListener('DOMContentLoaded', function() {
    // 1. Animation du logo Google (rotation à chaque survol)
    const logo = document.querySelector('.logo-google img');
    if (logo) {
        logo.addEventListener('mouseover', function() {
            this.style.transform = 'rotate(0deg)';
            void this.offsetWidth;
            this.style.transform = 'rotate(36000deg)';
            this.style.transition = 'transform 1000s';
        });
    }
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(128, 128, 128, 0)';
    overlay.style.pointerEvents = 'none';
    overlay.style.zIndex = '1000';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.5s ease';
    document.body.prepend(overlay);

    let lastScrollPosition = 0;

    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (currentScrollPosition / (documentHeight - windowHeight)) * 100;

        // Applique un fondu gris progressif (max 70% d'opacité pour garder la lisibilité)
        const overlayOpacity = scrollPercentage / 150; // Ajuste le dénominateur pour contrôler l'intensité
        overlay.style.opacity = Math.min(overlayOpacity, 0.7); // Ne dépasse pas 70% d'opacité

        lastScrollPosition = currentScrollPosition;
    });
});

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
