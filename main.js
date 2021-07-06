// Toggle light/dark mode

const toggleLightDarkMode = function () {
  //   Toggle variables
  const slider = document.querySelector(".slider");
  const togglerLight = document.querySelector(".toggler-light");
  const togglerDark = document.querySelector(".toggler-dark");

  togglerLight.addEventListener("click", function (e) {
    slider.classList.remove("slide-dark");
    if (togglerDark.checked) {
      slider.classList.add("slide-light");
    }
  });

  togglerDark.addEventListener("click", function (e) {
    slider.classList.remove("slide-light");
    if (togglerDark.checked) {
      slider.classList.add("slide-dark");
    }
  });
};

// Dark mode styles function

const displayToggleStyles = function () {
  // Variables for the page elements to be affected:
  const toggleTheme = document.querySelector(".toggle-theme-mode");
  const topBar = document.querySelector(".top-bar");
  const navBar = document.querySelector(".navbar");
  const logoText = document.querySelector(".logo-txt");
  const homeLink = document.querySelectorAll(".nav-link")[0];
  const servicesLink = document.querySelectorAll(".nav-link")[1];
  const navBtn = document.querySelector(".btn-bg");
  const hamburgerMenuIcon = document.querySelector(".hamburger-icon");
  const statTitles = document.querySelectorAll(".stat-title");
  const statDescriptions = document.querySelectorAll(".stat-description");

  //   Toggle variables
  const slider = document.querySelector(".slider");
  const togglerLight = document.querySelector(".toggler-light");
  const togglerDark = document.querySelector(".toggler-dark");
  const togglerTxt = document.querySelector(".toggler-txt");

  togglerDark.addEventListener("click", function (e) {
    if (togglerDark.checked) {
      // single elements
      document.body.style.background = "#1a1b1d";
      toggleTheme.classList.add("toggle-theme-mode--dark");
      togglerTxt.classList.add("toggler-txt--dark");
      togglerTxt.textContent = "Switch to light mode";
      topBar.classList.add("top-bar--dark");
      navBar.classList.add("navbar--dark");
      logoText.classList.add("logo-txt--dark");
      homeLink.classList.add("nav-link--dark");
      servicesLink.classList.add("nav-link--dark");
      navBtn.classList.add("btn-bg--dark");
      hamburgerMenuIcon.classList.add("hamburger-icon--dark");

      //   multiple elements
      statTitles.forEach((title) => {
        title.classList.add("stat-title--dark");
      });

      statDescriptions.forEach((description) => {
        description.classList.add("stat-description--dark");
      });
    }
  });

  togglerLight.addEventListener("click", function (e) {
    if (togglerLight.checked) {
      // single elements
      document.body.style.background = "white";
      toggleTheme.classList.remove("toggle-theme-mode--dark");
      togglerTxt.classList.remove("toggler-txt--dark");
      togglerTxt.textContent = "Switch to dark mode";
      topBar.classList.remove("top-bar--dark");
      navBar.classList.remove("navbar--dark");
      logoText.classList.remove("logo-txt--dark");
      homeLink.classList.remove("nav-link--dark");
      servicesLink.classList.remove("nav-link--dark");
      navBtn.classList.remove("btn-bg--dark");
      hamburgerMenuIcon.classList.remove("hamburger-icon--dark");

      //   multiple elements
      statTitles.forEach((title) => {
        title.classList.remove("stat-title--dark");
      });

      statDescriptions.forEach((description) => {
        description.classList.remove("stat-description--dark");
      });
    }
  });
};
toggleLightDarkMode();
displayToggleStyles();

// Page sections
const pageSections = document.querySelectorAll(".page-section");

// Non-stats sections w/ navbar
const homeSection = document.querySelector("#home");
const learnMoreSection = document.querySelector("#learn-more-section");
const nav = document.querySelector(".navbar");

// Stats variables
const statsSection = document.querySelector("#stats-section");
const statsIcon = document.querySelectorAll(".stat-icon");
const statsText = document.querySelectorAll(".stat-text");

// Stats scroll into view functions
const displayStats = function () {
  const observer = new IntersectionObserver(function (sections, options) {
    sections.forEach((section) => {
      if (!section.isIntersecting) {
        return;
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
    });
  });

  pageSections.forEach((section) => {
    observer.observe(section);
  });
};

displayStats();
