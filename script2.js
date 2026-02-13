document.addEventListener('DOMContentLoaded', function() {

    /* =========================
       1. Rotation logo
    ========================= */
    const logo = document.querySelector('.logo-google img');
    if (logo) {
        logo.addEventListener('mouseover', function() {
            this.style.transition = 'transform 1s';
            this.style.transform = 'rotate(360deg)';

            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 1000);
        });
    }

        

    
    /* =========================
       2. Fade sections
    ========================= */
    const intros = document.querySelectorAll('.intro');
    let lastScrollPosition = 0;

    intros.forEach(intro => intro.style.opacity = '0.3');

    window.addEventListener('scroll', function() {

        const currentScrollPosition = window.pageYOffset;

        intros.forEach(intro => {
            const introPosition = intro.getBoundingClientRect().top;

            if (introPosition < window.innerHeight - 100) {
                intro.style.opacity = '1';
            }
        });

        lastScrollPosition = currentScrollPosition;


        /* =========================
           3. Bouton retour haut
        ========================= */
        const returnToTopButton = document.getElementById('return-to-top');
        if (returnToTopButton) {
            if (currentScrollPosition > 200) {
                returnToTopButton.classList.add('visible');
            } else {
                returnToTopButton.classList.remove('visible');
            }
        }
    });


    /* =========================
       4. Scroll top
    ========================= */
    const returnToTopButton = document.getElementById('return-to-top');
    if (returnToTopButton) {
        returnToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }



    /* =========================
       5. KONAMI CODE
    ========================= */

    const sequence = [
        "ArrowUp","ArrowUp",
        "ArrowDown","ArrowDown",
        "ArrowLeft","ArrowRight",
        "ArrowLeft","ArrowRight",
        "b","a"
    ];

    let index = 0;

    document.addEventListener('keydown', function(event) {

        let key = event.key;

        // sécurise lettres majuscules/minuscules
        if (key.length === 1) key = key.toLowerCase();

        if (key === sequence[index]) {
            index++;

            if (index === sequence.length) {
                runEasterEgg();
                index = 0;
            }
        } else {
            index = 0;
        }
    });


    function runEasterEgg() {

        console.log("Easter Egg activé !");

        // effet visuel léger (safe)
        document.body.style.transition = "filter 2s";
        document.body.style.filter = "hue-rotate(120deg)";

        setTimeout(() => {
            document.body.style.filter = "none";
        }, 2000);

        // message discret
        const msg = document.createElement("div");
        msg.textContent = "Easter Egg trouvé !";
        msg.style.position = "fixed";
        msg.style.bottom = "20px";
        msg.style.right = "20px";
        msg.style.background = "#222";
        msg.style.color = "white";
        msg.style.padding = "10px 15px";
        msg.style.borderRadius = "10px";
        msg.style.zIndex = "9999";

        document.body.appendChild(msg);

        setTimeout(() => msg.remove(), 3000);
    }

});

