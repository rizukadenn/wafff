/* =========================================
   ELEMENTS
========================================= */

const surpriseButton =
    document.getElementById("surpriseButton");

const envelopeWrapper =
    document.getElementById("envelopeWrapper");

const letterSection =
    document.getElementById("letterSection");

const closeLetter =
    document.getElementById("closeLetter");

const giftButton =
    document.getElementById("giftButton");

const popup =
    document.getElementById("popup");

const closePopup =
    document.getElementById("closePopup");

const okayButton =
    document.getElementById("okayButton");

const confettiContainer =
    document.getElementById("confettiContainer");


/* =========================================
   OPEN SURPRISE
========================================= */

surpriseButton.addEventListener(
    "click",
    function () {

        letterSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        setTimeout(function () {

            envelopeWrapper.classList.add("open");

        }, 700);

    }
);


/* =========================================
   OPEN ENVELOPE
========================================= */

function openEnvelope() {

    if (
        envelopeWrapper.classList.contains("open")
    ) {
        return;
    }

    envelopeWrapper.classList.add("open");

    createConfetti(25);

}


/* Click */

envelopeWrapper.addEventListener(
    "click",
    function (event) {

        /*
         * Kalau tombol Close Letter
         * yang diklik, jangan buka lagi.
         */

        if (
            event.target.closest(".close-letter")
        ) {
            return;
        }

        openEnvelope();

    }
);


/* Keyboard */

envelopeWrapper.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openEnvelope();

        }

    }
);


/* =========================================
   CLOSE LETTER
========================================= */

closeLetter.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        envelopeWrapper.classList.remove("open");

    }
);


/* =========================================
   GIFT POPUP
========================================= */

function openGift() {

    popup.classList.add("show");

    popup.setAttribute(
        "aria-hidden",
        "false"
    );

    createConfetti(80);

}


/* Gift button */

giftButton.addEventListener(
    "click",
    openGift
);


/* =========================================
   CLOSE POPUP
========================================= */

function closeGiftPopup() {

    popup.classList.remove("show");

    popup.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* X */

closePopup.addEventListener(
    "click",
    closeGiftPopup
);


/* Awww button */

okayButton.addEventListener(
    "click",
    closeGiftPopup
);


/* Click outside */

popup.addEventListener(
    "click",
    function (event) {

        if (
            event.target === popup
        ) {

            closeGiftPopup();

        }

    }
);


/* ESC */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeGiftPopup();

            envelopeWrapper.classList.remove(
                "open"
            );

        }

    }
);


/* =========================================
   CONFETTI
========================================= */

function createConfetti(amount) {

    const symbols = [
        "💙",
        "🩵",
        "♡",
        "✦",
        "✨",
        "🎉"
    ];

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const confetti =
            document.createElement("div");

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
            (10 + Math.random() * 15) + "px";

        confetti.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        confetti.style.animationDelay =
            (Math.random() * 0.8) + "s";

        confettiContainer.appendChild(
            confetti
        );


        /*
         * Hapus confetti setelah
         * animasinya selesai.
         */

        setTimeout(
            function () {

                confetti.remove();

            },
            7000
        );

    }

}


/* =========================================
   SMALL BACKGROUND EFFECT
========================================= */

setInterval(
    function () {

        /*
         * Confetti kecil sesekali.
         * Dibuat sangat sedikit supaya
         * background tetap lembut.
         */

        if (
            Math.random() > 0.65
        ) {

            createConfetti(1);

        }

    },
    4000
);
function openSurprise() {
    const card = document.getElementById("birthdayCard");

    if (card) {
        card.classList.add("show");

        setTimeout(() => {
            card.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 100);
    }

    createConfetti();
}
