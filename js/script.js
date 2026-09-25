/* =========================================================
   RIMSHA PORTFOLIO
   JavaScript
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  // Close menu after clicking a navigation link

  document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(element => {

    observer.observe(element);

  });

} else {

  // Fallback for older browsers

  revealElements.forEach(element => {

    element.classList.add("visible");

  });

}


/* =========================================================
   CONTACT FORM
   ========================================================= */

const contactForm =
  document.getElementById("contactForm");

const formMessage =
  document.getElementById("formMessage");


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const formData =
        new FormData(contactForm);


      const name =
        formData.get("name");

      const email =
        formData.get("email");

      const message =
        formData.get("message");


      /*
        Create an email using the user's
        default email application.
      */

      const subject =
        encodeURIComponent(
          `Portfolio Contact from ${name}`
        );


      const body =
        encodeURIComponent(
          `Hello Rimsha,

Name: ${name}
Email: ${email}

Message:
${message}

Sent from Rimsha's Portfolio.`
        );


      const mailto =
        `mailto:rimshachaudhary419@gmail.com` +
        `?subject=${subject}` +
        `&body=${body}`;


      if (formMessage) {

        formMessage.textContent =
          "Opening your email client...";

      }


      window.location.href = mailto;

    }
  );

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
  document.querySelectorAll("section[id]");

const navigationLinks =
  document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

  let currentSection = "";


  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navigationLinks.forEach(link => {

    link.classList.remove("active");

    const href =
      link.getAttribute("href");

    if (href === `#${currentSection}`) {

      link.classList.add("active");

    }

  });

}


window.addEventListener(
  "scroll",
  updateActiveNavigation
);

updateActiveNavigation();


/* =========================================================
   TERMINAL TYPING EFFECT
   ========================================================= */

const terminalLines =
  document.querySelectorAll(".terminal-line");


terminalLines.forEach(line => {

  const originalText =
    line.textContent.trim();

  line.textContent = "";

  let index = 0;


  function typeText() {

    if (index < originalText.length) {

      line.textContent +=
        originalText.charAt(index);

      index++;

      setTimeout(typeText, 55);

    }

  }


  typeText();

});


/* =========================================================
   PAGE TITLE EFFECT
   ========================================================= */

const originalTitle =
  document.title;

let titleTimer;


window.addEventListener("blur", () => {

  titleTimer = setTimeout(() => {

    document.title =
      "> come back, developer_";

  }, 300);

});


window.addEventListener("focus", () => {

  clearTimeout(titleTimer);

  document.title =
    originalTitle;

});


/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

console.log(
  "%c[ SYSTEM ONLINE ]",
  "color:#00ff88;font-weight:bold;font-size:16px;"
);

console.log(
  "%cWelcome to Rimsha's portfolio.",
  "color:#9eafa5;font-size:13px;"
);

console.log(
  "%cFront-End Developer | HTML | CSS | Bootstrap | PHP | MySQL",
  "color:#7e9386;font-size:12px;"
);


/* =========================================================
   SMOOTH BUTTON FEEDBACK
   ========================================================= */

document.querySelectorAll(".btn").forEach(button => {

  button.addEventListener("click", () => {

    button.style.transform =
      "scale(0.97)";

    setTimeout(() => {

      button.style.transform = "";

    }, 120);

  });

});
