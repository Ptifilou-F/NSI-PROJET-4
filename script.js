document.addEventListener('DOMContentLoaded', function() {
    // Animation du logo Google (rotation à chaque survol)
    const logo = document.querySelector('.logo-google img');
    if (logo) {
        logo.addEventListener('mouseover', function() {
            this.style.transform = 'rotate(0deg)';
            void this.offsetWidth;
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 1s';
        });
    }

    // Effet de fondu pour les sections .intro
    const intros = document.querySelectorAll('.intro');
    window.addEventListener('scroll', function() {
        intros.forEach(intro => {
            const position = intro.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (position < windowHeight) {
                intro.style.opacity = '1';
                intro.style.transition = 'opacity 1s';
            }
        });
    });

    // Bouton "Retour en haut"
    const returnToTopButton = document.getElementById('return-to-top');
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
});
