/* =====================================================
   HAPPY BIRTHDAY
   MAIN JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       ELEMENTS
    ================================================= */

    const surpriseButton =
        document.getElementById("surpriseButton");

    const birthdayCard =
        document.getElementById("birthdayCard");

    const envelope =
        document.getElementById("envelope");

    const letterHint =
        document.getElementById("letterHint");

    const giftButton =
        document.getElementById("giftButton");

    const popup =
        document.getElementById("popup");

    const closeButton =
        document.getElementById("closeButton");

    const okayButton =
        document.getElementById("okayButton");



    /* =================================================
       OPEN SURPRISE
    ================================================= */

    if (surpriseButton) {

        surpriseButton.addEventListener(
            "click",
            function () {

                birthdayCard.classList.add("show");

                setTimeout(function () {

                    birthdayCard.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }, 150);

            }
        );

    }



    /* =================================================
       ENVELOPE
    ================================================= */

    if (envelope) {

        envelope.addEventListener(
            "click",
            function () {

                const isOpen =
                    envelope.classList.toggle("open");


                if (isOpen) {

                    letterHint.textContent =
                        "♡ Your little letter is open ♡";

                } else {

                    letterHint.textContent =
                        "✦ Tap the envelope to open ✦";

                }

            }
        );

    }



    /* =================================================
       GIFT
    ================================================= */

    if (giftButton) {

        giftButton.addEventListener(
            "click",
            function () {

                popup.classList.add("show");

                createConfetti();

            }
        );

    }



    /* =================================================
       CLOSE POPUP
    ================================================= */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function () {

                popup.classList.remove("show");

            }
        );

    }


    if (okayButton) {

        okayButton.addEventListener(
            "click",
            function () {

                popup.classList.remove("show");

            }
        );

    }



    /* =================================================
       CLICK OUTSIDE POPUP
    ================================================= */

    if (popup) {

        popup.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === popup
                ) {

                    popup.classList.remove(
                        "show"
                    );

                }

            }
        );

    }



    /* =================================================
       CONFETTI
    ================================================= */

    function createConfetti() {

        const container =
            document.getElementById(
                "confetti-container"
            );

        if (!container) return;


        const symbols = [
            "💙",
            "🩵",
            "♡",
            "✦",
            "✨",
            "🫧",
            "★",
            "🎉"
        ];


        for (
            let i = 0;
            i < 45;
            i++
        ) {

            const confetti =
                document.createElement(
                    "span"
                );


            confetti.className =
                "confetti";


            confetti.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            confetti.style.left =
                Math.random() * 100 + "%";


            confetti.style.fontSize =
                (
                    12 +
                    Math.random() * 18
                ) + "px";


            confetti.style.animationDelay =
                (
                    Math.random() * 1.2
                ) + "s";


            confetti.style.animationDuration =
                (
                    3 +
                    Math.random() * 2
                ) + "s";


            container.appendChild(
                confetti
            );


            setTimeout(
                function () {

                    confetti.remove();

                },
                5500
            );

        }

    }


});
