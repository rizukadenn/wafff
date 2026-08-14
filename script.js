/* =========================================================
   HAPPY BIRTHDAY WEBSITE
   Complete JavaScript
========================================================= */


/* =========================================================
   OPEN SURPRISE
========================================================= */

function openSurprise() {

    const card =
        document.getElementById("birthdayCard");

    if (!card) return;

    card.classList.add("show");

    setTimeout(function () {

        card.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 150);
}


/* =========================================================
   ENVELOPE
========================================================= */

function toggleEnvelope() {

    const envelope =
        document.getElementById("envelope");

    const hint =
        document.getElementById("letterHint");

    if (!envelope) return;

    envelope.classList.toggle("open");

    const isOpen =
        envelope.classList.contains("open");

    if (hint) {

        if (isOpen) {

            hint.textContent =
                "♡ Your little letter is open ♡";

        } else {

            hint.textContent =
                "✦ Tap the envelope to open ✦";

        }

    }
}


/* =========================================================
   GIFT
========================================================= */

function openGift() {

    const popup =
        document.getElementById("popup");

    if (!popup) return;

    popup.classList.add("show");

    createConfetti();
}


/* =========================================================
   CLOSE POPUP
========================================================= */

function closePopup() {

    const popup =
        document.getElementById("popup");

    if (!popup) return;

    popup.classList.remove("show");
}


/* =========================================================
   CONFETTI
========================================================= */

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
        "★"
    ];

    for (let i = 0; i < 35; i++) {

        const piece =
            document.createElement("span");

        piece.className = "confetti";

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.fontSize =
            (12 + Math.random() * 15) + "px";

        piece.style.animationDelay =
            (Math.random() * 1.5) + "s";

        container.appendChild(piece);

        setTimeout(function () {

            piece.remove();

        }, 4500);
    }
}


/* =========================================================
   PAGE READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const envelope =
            document.getElementById("envelope");

        if (envelope) {

            envelope.addEventListener(
                "click",
                toggleEnvelope
            );

        }


        /* -------------------------------------------------
           Close popup when clicking outside the box
        ------------------------------------------------- */

        const popup =
            document.getElementById("popup");

        if (popup) {

            popup.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target === popup
                    ) {

                        closePopup();

                    }

                }
            );

        }

    }
);
