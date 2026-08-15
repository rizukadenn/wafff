/* =========================================
   BIRTHDAY WEBSITE ANIMATION
========================================= */


/* =========================================
   FLOATING HEARTS / STARS
========================================= */

const floatingContainer =
  document.querySelector(".floating-container");

const floatingSymbols = [
  "♡",
  "♥",
  "💙",
  "🩵",
  "✦",
  "✧",
  "✨",
  "⋆"
];


function createFloatingItem() {

  if (!floatingContainer) return;

  const item =
    document.createElement("div");

  item.className =
    "floating-item";

  item.textContent =
    floatingSymbols[
      Math.floor(
        Math.random() * floatingSymbols.length
      )
    ];

  const size =
    Math.random() * 18 + 12;

  const left =
    Math.random() * 100;

  const duration =
    Math.random() * 8 + 8;

  const delay =
    Math.random() * 2;

  item.style.left =
    `${left}%`;

  item.style.fontSize =
    `${size}px`;

  item.style.animationDuration =
    `${duration}s`;

  item.style.animationDelay =
    `${delay}s`;

  floatingContainer.appendChild(item);


  setTimeout(() => {

    item.remove();

  }, (duration + delay) * 1000);

}


/* Start floating animation */

setInterval(
  createFloatingItem,
  650
);


/* Initial particles */

for (let i = 0; i < 12; i++) {

  setTimeout(
    createFloatingItem,
    i * 250
  );

}


/* =========================================
   SCROLL REVEAL
========================================= */

const sections =
  document.querySelectorAll(
    ".section-reveal"
  );


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

        }

      });

    },
    {
      threshold: 0.15
    }
  );


sections.forEach(section => {

  observer.observe(section);

});


/* =========================================
   SURPRISE BUTTON
========================================= */

const surpriseBtn =
  document.querySelector(
    "#surpriseBtn"
  );


if (surpriseBtn) {

  surpriseBtn.addEventListener(
    "click",
    () => {

      createBurst(
        window.innerWidth / 2,
        window.innerHeight / 2
      );


      const letterSection =
        document.querySelector(
          ".letter-section"
        );

      if (letterSection) {

        letterSection.scrollIntoView({
          behavior: "smooth"
        });

      }

    }
  );

}


/* =========================================
   ENVELOPE
========================================= */

const envelope =
  document.querySelector(
    "#envelope"
  );

const letterOverlay =
  document.querySelector(
    "#letterOverlay"
  );

const closeLetter =
  document.querySelector(
    "#closeLetter"
  );

const closeLetterBottom =
  document.querySelector(
    "#closeLetterBottom"
  );


function openLetter() {

  if (!envelope) return;

  envelope.classList.add(
    "open"
  );


  setTimeout(() => {

    if (letterOverlay) {

      letterOverlay.classList.add(
        "show"
      );

    }

  }, 650);


  createHeartBurst(
    envelope
  );

}


if (envelope) {

  envelope.addEventListener(
    "click",
    openLetter
  );


  envelope.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        openLetter();

      }

    }
  );

}


function closeLetterModal() {

  if (!letterOverlay) return;

  letterOverlay.classList.remove(
    "show"
  );

}


if (closeLetter) {

  closeLetter.addEventListener(
    "click",
    closeLetterModal
  );

}


if (closeLetterBottom) {

  closeLetterBottom.addEventListener(
    "click",
    closeLetterModal
  );

}


/* Close modal by clicking outside */

if (letterOverlay) {

  letterOverlay.addEventListener(
    "click",
    (event) => {

      if (
        event.target ===
        letterOverlay
      ) {

        closeLetterModal();

      }

    }
  );

}


/* =========================================
   GIFT
========================================= */

const giftButton =
  document.querySelector(
    "#giftButton"
  );

const giftMessage =
  document.querySelector(
    "#giftMessage"
  );


if (giftButton) {

  giftButton.addEventListener(
    "click",
    () => {

      giftButton.classList.add(
        "open"
      );


      createGiftConfetti();


      setTimeout(() => {

        if (giftMessage) {

          giftMessage.classList.add(
            "show"
          );

        }

      }, 500);

    }
  );

}


/* Close gift by clicking background */

if (giftMessage) {

  giftMessage.addEventListener(
    "click",
    (event) => {

      if (
        event.target ===
        giftMessage
      ) {

        giftMessage.classList.remove(
          "show"
        );

      }

    }
  );

}


/* =========================================
   HEART BURST
========================================= */

function createHeartBurst(
  element
) {

  if (!element) return;

  const rect =
    element.getBoundingClientRect();


  const symbols = [
    "💙",
    "♡",
    "🩵",
    "✦",
    "✨"
  ];


  for (let i = 0; i < 18; i++) {

    const particle =
      document.createElement(
        "div"
      );

    particle.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    particle.style.position =
      "fixed";

    particle.style.left =
      `${rect.left + rect.width / 2}px`;

    particle.style.top =
      `${rect.top + rect.height / 2}px`;

    particle.style.zIndex =
      "300";

    particle.style.pointerEvents =
      "none";

    particle.style.fontSize =
      `${Math.random() * 15 + 12}px`;


    const angle =
      Math.random() *
      Math.PI *
      2;

    const distance =
      Math.random() * 150 + 60;

    const x =
      Math.cos(angle) *
      distance;

    const y =
      Math.sin(angle) *
      distance;


    particle.animate(
      [
        {
          transform:
            "translate(-50%, -50%) scale(0)",
          opacity: 0
        },

        {
          transform:
            `translate(
              calc(-50% + ${x / 2}px),
              calc(-50% + ${y / 2}px)
            ) scale(1.2)`,
          opacity: 1
        },

        {
          transform:
            `translate(
              calc(-50% + ${x}px),
              calc(-50% + ${y}px)
            ) scale(.5)`,
          opacity: 0
        }
      ],
      {
        duration:
          Math.random() * 700 + 900,

        easing:
          "cubic-bezier(.16,1,.3,1)"
      }
    );


    document.body.appendChild(
      particle
    );


    setTimeout(
      () => particle.remove(),
      1800
    );

  }

}


/* =========================================
   GENERAL BURST
========================================= */

function createBurst(
  x,
  y
) {

  const symbols = [
    "♡",
    "♥",
    "✦",
    "✧",
    "✨",
    "💙"
  ];


  for (let i = 0; i < 30; i++) {

    const particle =
      document.createElement(
        "div"
      );

    particle.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    particle.style.position =
      "fixed";

    particle.style.left =
      `${x}px`;

    particle.style.top =
      `${y}px`;

    particle.style.zIndex =
      "300";

    particle.style.pointerEvents =
      "none";

    particle.style.fontSize =
      `${Math.random() * 15 + 10}px`;


    const angle =
      Math.random() *
      Math.PI *
      2;

    const distance =
      Math.random() * 200 + 50;

    const dx =
      Math.cos(angle) *
      distance;

    const dy =
      Math.sin(angle) *
      distance;


    particle.animate(
      [
        {
          transform:
            "translate(-50%, -50%) scale(0)",
          opacity: 0
        },

        {
          transform:
            `translate(
              calc(-50% + ${dx}px),
              calc(-50% + ${dy}px)
            ) scale(1)`,
          opacity: 1
        },

        {
          transform:
            `translate(
              calc(-50% + ${dx * 1.3}px),
              calc(-50% + ${dy * 1.3}px)
            ) scale(.2)`,
          opacity: 0
        }
      ],
      {
        duration:
          Math.random() * 900 + 700,

        easing:
          "cubic-bezier(.16,1,.3,1)"
      }
    );


    document.body.appendChild(
      particle
    );


    setTimeout(
      () => particle.remove(),
      1800
    );

  }

}


/* =========================================
   GIFT CONFETTI
========================================= */

function createGiftConfetti() {

  const symbols = [
    "💙",
    "🩵",
    "♡",
    "✦",
    "✨",
    "🎀",
    "⭐"
  ];


  const centerX =
    window.innerWidth / 2;

  const centerY =
    window.innerHeight / 2;


  for (let i = 0; i < 55; i++) {

    const particle =
      document.createElement(
        "div"
      );

    particle.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    particle.style.position =
      "fixed";

    particle.style.left =
      `${centerX}px`;

    particle.style.top =
      `${centerY}px`;

    particle.style.zIndex =
      "300";

    particle.style.pointerEvents =
      "none";

    particle.style.fontSize =
      `${Math.random() * 17 + 10}px`;


    const angle =
      Math.random() *
      Math.PI *
      2;

    const distance =
      Math.random() * 350 + 100;

    const dx =
      Math.cos(angle) *
      distance;

    const dy =
      Math.sin(angle) *
      distance;


    particle.animate(
      [
        {
          transform:
            "translate(-50%, -50%) rotate(0deg) scale(.3)",
          opacity: 0
        },

        {
          transform:
            `translate(
              calc(-50% + ${dx / 2}px),
              calc(-50% + ${dy / 2}px)
            )
            rotate(180deg)
            scale(1)`,
          opacity: 1
        },

        {
          transform:
            `translate(
              calc(-50% + ${dx}px),
              calc(-50% + ${dy + 150}px)
            )
            rotate(500deg)
            scale(.5)`,
          opacity: 0
        }
      ],
      {
        duration:
          Math.random() * 1300 + 1200,

        easing:
          "cubic-bezier(.16,1,.3,1)"
      }
    );


    document.body.appendChild(
      particle
    );


    setTimeout(
      () => particle.remove(),
      2700
    );

  }

}


/* =========================================
   CURSOR GLOW
========================================= */

const cursorGlow =
  document.querySelector(
    ".cursor-glow"
  );


if (
  cursorGlow &&
  window.matchMedia(
    "(pointer: fine)"
  ).matches
) {

  let mouseX = 0;
  let mouseY = 0;

  let currentX = 0;
  let currentY = 0;


  document.addEventListener(
    "mousemove",
    (event) => {

      mouseX =
        event.clientX;

      mouseY =
        event.clientY;

    }
  );


  function animateCursor() {

    currentX +=
      (mouseX - currentX) *
      0.12;

    currentY +=
      (mouseY - currentY) *
      0.12;


    cursorGlow.style.left =
      `${currentX}px`;

    cursorGlow.style.top =
      `${currentY}px`;


    requestAnimationFrame(
      animateCursor
    );

  }


  animateCursor();

}


/* =========================================
   CLICK SPARKLES
========================================= */

document.addEventListener(
  "click",
  (event) => {

    if (
      event.target.closest(
        "button"
      ) ||
      event.target.closest(
        ".envelope"
      )
    ) {
      return;
    }


    createSmallSparkle(
      event.clientX,
      event.clientY
    );

  }
);


function createSmallSparkle(
  x,
  y
) {

  const sparkle =
    document.createElement(
      "div"
    );

  sparkle.textContent =
    "✦";

  sparkle.style.position =
    "fixed";

  sparkle.style.left =
    `${x}px`;

  sparkle.style.top =
    `${y}px`;

  sparkle.style.zIndex =
    "250";

  sparkle.style.pointerEvents =
    "none";

  sparkle.style.color =
    "#6d9fba";

  sparkle.style.fontSize =
    "18px";


  sparkle.animate(
    [
      {
        transform:
          "translate(-50%, -50%) scale(.3) rotate(0)",
        opacity: 0
      },

      {
        transform:
          "translate(-50%, -50%) scale(1.4) rotate(90deg)",
        opacity: 1
      },

      {
        transform:
          "translate(-50%, -80px) scale(.5) rotate(180deg)",
        opacity: 0
      }
    ],
    {
      duration: 700,

      easing:
        "ease-out"
    }
  );


  document.body.appendChild(
    sparkle
  );


  setTimeout(
    () => sparkle.remove(),
    800
  );

}


/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key !== "Escape") {
      return;
    }


    if (letterOverlay) {

      letterOverlay.classList.remove(
        "show"
      );

    }


    if (giftMessage) {

      giftMessage.classList.remove(
        "show"
      );

    }

  }
);


/* =========================================
   REDUCE MOTION SUPPORT
========================================= */

const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );


if (prefersReducedMotion.matches) {

  document.documentElement.style
    .setProperty(
      "scroll-behavior",
      "auto"
    );

}
