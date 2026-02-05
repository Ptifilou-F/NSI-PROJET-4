// Animation du logo Google au survol
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo-google img');
    if (logo) {
        logo.addEventListener('mouseover', function() {
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 1s';
        });
    }

    // Effet de fondu pour les sections .intro
    window.addEventListener('scroll', function() {
        const intros = document.querySelectorAll('.intro');
        intros.forEach(intro => {
            const position = intro.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (position < windowHeight) {
                intro.style.opacity = '1';
                intro.style.transition = 'opacity 1s';
            }
        });
    });
});
