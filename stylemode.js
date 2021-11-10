// Toggle light/dark mode

function toggleLightDarkMode() {
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
}

// Dark mode styles function

function displayToggleStyles() {
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
  const recentProjectTitle = document.querySelector(".project-text-title");
  const recentProjectDescription = document.querySelector(
    ".project-text-description"
  );
  const whyUsHeading = document.querySelector(".why-us-heading");
  const whyUsText = document.querySelectorAll(".why-us-txt");
  const aboutFooterDescription = document.querySelector(
    ".about-footer-description"
  );
  const aboutFooterEmail = document.querySelector(".about-footer-email");
  const aboutFooterAddress = document.querySelector(".about-us-address");
  const galleryDescription = document.querySelector(".gallery-description");
  const galleryTitle = document.querySelector(".gallery-title");
  const historyTitle = document.querySelector(".history-title");
  const historyDescription = document.querySelector(".history-description");

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
      slider.classList.add("slider--dark");
      togglerTxt.classList.add("toggler-txt--dark");
      togglerTxt.textContent = "Switch to light mode";
      topBar.classList.add("top-bar--dark");
      navBar.classList.add("navbar--dark");
      logoText.classList.add("logo-txt--dark");
      homeLink.classList.add("nav-link--dark");
      servicesLink.classList.add("nav-link--dark");
      navBtn.classList.add("btn-bg--dark");
      hamburgerMenuIcon.classList.add("hamburger-icon--dark");
      recentProjectTitle.classList.add("project-text-title--dark");
      recentProjectDescription.classList.add("project-text-description--dark");
      whyUsHeading.classList.add("why-us-heading--dark");
      aboutFooterDescription.classList.add("about-footer-description--dark");
      aboutFooterEmail.classList.add("about-footer-email--dark");
      aboutFooterAddress.classList.add("about-us-address--dark");
      historyTitle.classList.add(".history-title--dark");
      historyDescription.classList.add(".history-description--dark");

      //   multiple elements
      statTitles.forEach((title) => {
        title.classList.add("stat-title--dark");
      });

      statDescriptions.forEach((description) => {
        description.classList.add("stat-description--dark");
      });

      whyUsText.forEach((text) => {
        text.classList.add("why-us-txt--dark");
      });
    }
  });

  togglerLight.addEventListener("click", function (e) {
    if (togglerLight.checked) {
      // single elements
      document.body.style.background = "white";
      toggleTheme.classList.remove("toggle-theme-mode--dark");
      slider.classList.remove("slider--dark");
      togglerTxt.classList.remove("toggler-txt--dark");
      togglerTxt.textContent = "Switch to dark mode";
      topBar.classList.remove("top-bar--dark");
      navBar.classList.remove("navbar--dark");
      logoText.classList.remove("logo-txt--dark");
      homeLink.classList.remove("nav-link--dark");
      servicesLink.classList.remove("nav-link--dark");
      navBtn.classList.remove("btn-bg--dark");
      hamburgerMenuIcon.classList.remove("hamburger-icon--dark");
      recentProjectTitle.classList.remove("project-text-title--dark");
      recentProjectDescription.classList.remove(
        "project-text-description--dark"
      );

      //   multiple elements
      statTitles.forEach((title) => {
        title.classList.remove("stat-title--dark");
      });

      statDescriptions.forEach((description) => {
        description.classList.remove("stat-description--dark");
      });

      whyUsText.forEach((text) => {
        text.classList.remove("why-us-txt--dark");
      });

      whyUsHeading.classList.remove("why-us-heading--dark");
      aboutFooterDescription.classList.remove("about-footer-description--dark");
      aboutFooterEmail.classList.remove("about-footer-email--dark");
      aboutFooterAddress.classList.remove("about-us-address--dark");
      galleryTitle.classList.remove("gallery-title--dark");
    }
  });
}
toggleLightDarkMode();
displayToggleStyles();
