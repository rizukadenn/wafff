/* =========================================================
   HAPPY BIRTHDAY WEBSITE
   FULL JAVASCRIPT
========================================================= */


/* =========================================================
   PAGE READY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initEnvelope();

});


/* =========================================================
   OPEN SURPRISE
========================================================= */

function openSurprise() {

    const card =
        document.getElementById("birthdayCard");

    if (!card) {
        console.warn(
            "birthdayCard tidak ditemukan."
        );

        return;
    }


    /* tampilkan birthday card */

    card.classList.add("show");


    /* confetti */

    createConfetti(35);


    /* scroll menuju card */

    setTimeout(function () {

        card.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 250);

}


/* =========================================================
   ENVELOPE
========================================================= */

function initEnvelope() {

    const wrapper =
        document.getElementById(
            "envelopeWrapper"
        );

    const envelope =
        document.getElementById(
            "envelope"
        );

    const hint =
        document.getElementById(
            "letterHint"
        );


    /* kalau elemen tidak ditemukan */

    if (!wrapper || !envelope) {

        console.warn(
            "Envelope tidak ditemukan."
        );

        return;
    }


    /* klik amplop */

    envelope.addEventListener(
        "click",
        function () {

            const isOpen =
                wrapper.classList.contains(
                    "open"
                );


            /* =====================
               OPEN
            ===================== */

            if (!isOpen) {

                wrapper.classList.add(
                    "open"
                );


                if (hint) {

                    hint.textContent =
                        "♡ Your little letter is open ♡";

                }


                /* confetti kecil */

                createConfetti(18);


                /*
                    scroll sedikit supaya
                    surat yang keluar terlihat
                */

                setTimeout(
                    function () {

                        wrapper.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    },
                    450
                );

            }


            /* =====================
               CLOSE
            ===================== */

            else {

                wrapper.classList.remove(
                    "open"
                );


                if (hint) {

                    hint.textContent =
                        "✦ Tap the envelope to open ✦";

                }

            }

        }
    );

}


/* =========================================================
   GIFT
========================================================= */

function openGift() {

    const popup =
        document.getElementById(
            "popup"
        );


    if (!popup) {

        console.warn(
            "Popup tidak ditemukan."
        );

        return;
    }


    popup.classList.add(
        "show"
    );


    createConfetti(30);

}


/* =========================================================
   CLOSE POPUP
========================================================= */

function closePopup() {

    const popup =
        document.getElementById(
            "popup"
        );


    if (!popup) {
        return;
    }


    popup.classList.remove(
        "show"
    );

}


/* =========================================================
   CLOSE POPUP WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const popup =
            document.getElementById(
                "popup"
            );


        if (!popup) {
            return;
        }


        /*
           hanya tutup kalau yang diklik
           adalah area gelap popup
        */

        if (
            event.target === popup
        ) {

            closePopup();

        }

    }
);


/* =========================================================
   ESC KEY CLOSE POPUP
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closePopup();

        }

    }
);


/* =========================================================
   CONFETTI
========================================================= */

function createConfetti(
    amount = 25
) {

    const container =
        document.getElementById(
            "confetti-container"
        );


    if (!container) {
        return;
    }


    const symbols = [
        "💙",
        "🩵",
        "♡",
        "♥",
        "✨",
        "✦",
        "✧",
        "🎉",
        "🫧"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement(
                "span"
            );


        piece.className =
            "confetti";


        /* random symbol */

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        /* posisi */

        piece.style.left =
            Math.random() * 100 + "vw";


        /* ukuran */

        piece.style.fontSize =
            (
                12 +
                Math.random() * 16
            ) + "px";


        /* delay */

        piece.style.animationDelay =
            (
                Math.random() * 0.8
            ) + "s";


        /* durasi */

        piece.style.animationDuration =
            (
                2.8 +
                Math.random() * 1.8
            ) + "s";


        container.appendChild(
            piece
        );


        /* hapus setelah animasi */

        setTimeout(
            function () {

                piece.remove();

            },
            5000
        );

    }

}


/* =========================================================
   OPTIONAL: BACK TO TOP
========================================================= */

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
