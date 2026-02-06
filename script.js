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
    let lastScrollPosition = 0;

    intros.forEach(intro => {
        intro.style.opacity = '0.3';
    });

    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.pageYOffset;

        intros.forEach(intro => {
            const introPosition = intro.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (introPosition < windowHeight - 100) {
                intro.style.opacity = '1';
            }
            else if (currentScrollPosition < lastScrollPosition) {
                // rien
            }
        });

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


    const konamiCode = [
        "ArrowUp","ArrowUp",
        "ArrowDown","ArrowDown",
        "ArrowLeft","ArrowRight",
        "ArrowLeft","ArrowRight",
        "b","a"
    ];

    let konamiIndex = 0;

    document.addEventListener('keydown', function(e) {

        const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

        if (key === konamiCode[konamiIndex]) {
            konamiIndex++;

            // code complet détecté
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });


    function activateEasterEgg() {

        // animation fun
        document.body.style.transition = "transform 0.6s";
        document.body.style.transform = "rotate(2deg) scale(1.03)";

        setTimeout(() => {
            document.body.style.transform = "rotate(0deg) scale(1)";
        }, 600);

        // message console
        console.log("%c🎉 Konami Code activé ! Tu as trouvé un Easter Egg secret !",
            "color: gold; font-size: 20px; font-weight: bold;");

        // popup
        alert("🥚 Easter Egg secret activé !");
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
