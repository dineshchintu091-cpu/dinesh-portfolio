
/* ===========================
   PREMIUM CYBER PORTFOLIO JS
=========================== */

/* ===========================
   TYPING EFFECT
=========================== */

const roles = [
    "Product Security Engineer",
    "Cybersecurity Enthusiast",
    "Backend Engineering Enthusiast",
    "C++ & DSA"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

/* ===========================
   SCROLL REVEAL ANIMATION
=========================== */

const revealElements = document.querySelectorAll(
    ".section, .glass-card, .skill-box, .project-card, .road-card, .cert-card, .stat-card"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (
            elementTop <
            windowHeight - revealPoint
        ) {

            element.classList.add("show");
        }
    });
}

/* ===========================
   ACTIVE NAV LINK
=========================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");
        }
    });
});

/* ===========================
   FLOATING PROFILE EFFECT
=========================== */



/* ===========================
   COUNTER ANIMATION
=========================== */

const counters =
    document.querySelectorAll(".stat-card h3");

function runCounters() {

    counters.forEach(counter => {

        const target =
            parseInt(counter.innerText);

        if (isNaN(target)) return;

        let count = 0;

        const speed = target / 80;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText =
                    Math.floor(count) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText =
                    target + "+";
            }
        };

        update();
    });
}

/* ===========================
   INITIALIZE
=========================== */

window.addEventListener(
    "load",
    () => {

        typeEffect();

        revealOnScroll();

        runCounters();
    }
);

window.addEventListener(
    "scroll",
    revealOnScroll
);
