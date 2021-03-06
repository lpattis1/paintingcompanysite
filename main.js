// Collapse toggled nav links into the hamburger menu

function collapseMenuIntoHamburgerBar() {
  //   Parent that the items will be appended to:
  const hamburgerNav = document.querySelector(".top-nav");
  const menuItemsClassList = ["nav-item", "added-nav-item"];

  //   Item one:
  const menuItemOne = document.createElement("li");
  menuItemOne.className = "nav-item added-nav-item";
  const menuLinkOne = document.createElement("a");
  menuLinkOne.className = "nav-link";
  menuLinkOne.textContent = "Job Photos";
  menuLinkOne.setAttribute("href", "jobphotos.html");
  menuItemOne.appendChild(menuLinkOne);
  menuItemOne.classList.add("lg-screen-hidden");
  hamburgerNav.appendChild(menuItemOne);

  //   Item two:
  const menuItemTwo = document.createElement("li");
  menuItemTwo.className = "nav-item added-nav-item";
  const menuLinkTwo = document.createElement("a");
  menuLinkTwo.className = "nav-link";
  menuLinkTwo.textContent = "About Us";
  menuLinkTwo.setAttribute("href", "about.html");
  menuItemTwo.classList.add("lg-screen-hidden");
  menuItemTwo.appendChild(menuLinkTwo);
  hamburgerNav.appendChild(menuItemTwo);

  //   Item three:
  const menuItemThree = document.createElement("li");
  menuItemThree.className = "nav-item added-nav-item";
  const menuLinkThree = document.createElement("a");
  menuLinkThree.className = "nav-link";
  menuLinkThree.textContent = "Reviews";
  menuLinkThree.setAttribute("href", "index.html#testimonials");
  menuItemThree.classList.add("lg-screen-hidden");
  menuItemThree.appendChild(menuLinkThree);
  hamburgerNav.appendChild(menuItemThree);
}

collapseMenuIntoHamburgerBar();

// Page sections
const pageSections = document.querySelectorAll(".page-section");

// Non-stats sections w/ navbar
const homeSection = document.querySelector("#home");
const learnMoreSection = document.querySelector("#learn-more-section");
const nav = document.querySelector(".navbar");
const currentProjects = document.querySelector("#current-projects");
const testimonialSection = document.querySelector("#testimonials");
const whyUsSection = document.querySelector("#why-us");
const contactSection = document.querySelector("#contact");

// Stats variables
const statsSection = document.querySelector("#stats-section");
const statsIcon = document.querySelectorAll(".stat-icon");
const statsText = document.querySelectorAll(".stat-text");

// Stats scroll into view functions
function displayStats() {
  const observer = new IntersectionObserver(function (sections, options) {
    sections.forEach((section) => {
      if (!section.isIntersecting) {
        return;
      }

      if (section.target.id === homeSection.id) {
        headerAnimations();
      }

      if (
        section.target.id === statsSection.id ||
        section.target.id === learnMoreSection.id
      ) {
        nav.classList.add("navbar--fixed");
      } else if (window.scrollY === 0) {
        nav.classList.remove("navbar--fixed");
      } else {
        nav.classList.remove("navbar--fixed");
      }

      if (section.target.id === statsSection.id) {
        statsIcon.forEach((icon) => {
          setInterval(() => {
            icon.classList.add("rise");
          }, 300);
        });
        statsText.forEach((stats) => {
          setInterval(() => {
            stats.classList.add("rise");
          }, 302);
        });
      }

      if (section.target.id === learnMoreSection.id) {
        offerSectionAnimationsShow();
      }

      if (section.target.id === currentProjects.id) {
        projectBeforeAfterAnimations();
      }

      if (section.target.id === testimonialSection.id) {
        testimonialsAnimations();
      }

      if (section.target.id === whyUsSection.id) {
        whyUsAnimations();
      }

      if (section.target.id === contactSection.id) {
        homeContactAnimations();
      }
    });
  });

  pageSections.forEach((section) => {
    observer.observe(section);
  });
}

displayStats();

// Before and after slider
VanillaTilt.init(document.querySelector(".project-before-after"), {
  max: 5,
  speed: 800,
  scale: 1.02,
});

const projectBeforeAfterSlider = document.querySelector(
  ".project-before-after"
);
const projectImgWrapper = document.querySelector(".project-img-wrapper");
const projectHandle = document.querySelector(".handle");
const projectLabel = document.querySelectorAll(".project-label");
const beforeSideLabel = document.querySelector(".label-before");
const afterSideLabel = document.querySelector(".after-label");
const beforeImg = document.querySelector(".before-img");
const afterImg = document.querySelector(".after-img");

function showOrProjectHideLabels() {
  projectBeforeAfterSlider.addEventListener("mouseenter", function (e) {
    projectLabel.forEach((label) => {
      label.classList.add("project-label--show");
    });
  });

  projectBeforeAfterSlider.addEventListener("mouseleave", function (e) {
    projectLabel.forEach((label) => {
      label.classList.remove("project-label--show");
    });
  });
}

projectBeforeAfterSlider.addEventListener("mousemove", projectSliderMove);
projectBeforeAfterSlider.addEventListener("touchmove", projectSliderMove);

function projectSliderMove(e) {
  if (isProjectSliderLocked) {
    return;
  }
  const projectSliderLeftX = projectBeforeAfterSlider.offsetLeft;
  const projectSliderWidth = projectBeforeAfterSlider.clientWidth;
  const projectHandleWidth = projectHandle.clientWidth;
  let mouseX = (e.clientX || e.touches[0].clientX) - projectSliderLeftX;

  if (mouseX < 0) {
    mouseX = 0;
  } else if (mouseX > projectSliderWidth) {
    mouseX = projectSliderWidth;
  }

  projectImgWrapper.style.width = `${(
    (1 - mouseX / projectSliderWidth) *
    100
  ).toFixed(4)}%`;

  projectHandle.style.left = `calc(${(mouseX / projectSliderWidth) * 100}% - ${
    projectHandleWidth / 2
  }px)`;
}

let isProjectSliderLocked = false;

projectBeforeAfterSlider.addEventListener("mouseup", projectSliderMouseUp);
projectBeforeAfterSlider.addEventListener("touchend", projectSliderMouseUp);

projectBeforeAfterSlider.addEventListener(
  "mouseleave",
  projectSliderMouseLeave
);

projectBeforeAfterSlider.addEventListener("mousedown", projectSliderMouseDown);
projectBeforeAfterSlider.addEventListener("touchstart", projectSliderMouseDown);

function projectSliderMouseUp(e) {
  if (!isProjectSliderLocked) {
    isProjectSliderLocked = true;
  }
}

function projectSliderMouseLeave(e) {
  if (isProjectSliderLocked) {
    isProjectSliderLocked = false;
  }
}

function projectSliderMouseDown(e) {
  if (isProjectSliderLocked) {
    isProjectSliderLocked = false;
    projectSliderMove(e);
  }
}

showOrProjectHideLabels();

// Testimonials slider
function cycleThroughTestimonials() {
  const testimonialImgs = document.querySelectorAll(
    ".testimonials-indicator-img"
  );
  const testimonials = document.querySelectorAll(".testimonial-slide");

  testimonialImgs.forEach((img) => {
    const testimonialIndicators = img.dataset.indicator;
    console.log(testimonialIndicators);

    img.addEventListener("click", function (e) {
      for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].classList.remove("testimonial-slide-active");
        if (testimonials[i] === testimonials[testimonialIndicators]) {
          testimonials[i].classList.add("testimonial-slide-active");
        }
      }

      for (let i = 0; i < testimonialImgs.length; i++) {
        testimonialImgs[i].classList.remove("indicator-active");

        if (testimonialImgs[i] === testimonialImgs[testimonialIndicators]) {
          testimonialImgs[i].classList.add("indicator-active");
        }
      }
    });
  });
}

cycleThroughTestimonials();

// Generated Page After Form Submission (Index Contact Form)

function showSubmittedFormMessage() {
  const contactForm = document.querySelector("#contact-form");
  const contactContainer = document.querySelector(".contact-container");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const contactFormName = document.querySelector(".contact-name");
    const contactFormEmail = document.querySelector(".contact-email");
    localStorage.setItem("name", contactFormName.value);
    localStorage.setItem("email", contactFormEmail.value);
    const customerName = localStorage.getItem("name");
    const customerEmail = localStorage.getItem("email");

    contactContainer.innerHTML = `
    <div class="container submitted-message-container d-flex flex-column align-items-center justify-content-center">
    <h2 class="submitted-message-header text-center mt-5 mb-2">Thank you for reaching out, <span class="submitted-name">${customerName}</span>!</h2>
    <p class="submitted-message-description text-center mb-5">We sent an email to <span class = "submitted-email">${customerEmail}</span>. Make sure to check all available inboxes to see if you gout it! If you did not receive an email, we will be following up by phone.</p>
    </div>
    `;
    console.log(customerName);
  });
}

showSubmittedFormMessage();
