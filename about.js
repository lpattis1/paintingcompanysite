function aboutObserver() {
  const aboutSections = document.querySelectorAll(".about-section");

  const observer = new IntersectionObserver(function (sections, options) {
    sections.forEach((section) => {
      if (!section.isIntersecting) {
        return;
      }

      if (section.target.id === "#mission") {
        missionAnimation();
      }

      if (section.target.id === "#history") {
        historyAnimation();
      }

      if (section.target.id === "#what-we-do") {
        whatWeDoAnimation();
      }

      if (section.target.id === "#map-section") {
        mapAnimation();
      }
    });
  });

  aboutSections.forEach((section) => {
    observer.observe(section);
  });
}

function toggleModeAbout() {
  const togglerDark = document.querySelector(".toggler-dark");
  const togglerLight = document.querySelector(".toggler-light");
  const aboutFooterDescription = document.querySelector(
    ".about-footer-description"
  );
  const aboutFooterEmail = document.querySelector(".about-footer-email");
  const aboutFooterAddress = document.querySelector(".about-us-address");

  const historyTitle = document.querySelector(".history-title");
  const historyDescription = document.querySelector(".history-description");

  const findUsTitle = document.querySelector(".map-title");
  const findUsDescription = document.querySelector(".map-description");

  togglerDark.addEventListener("click", function (e) {
    if (togglerDark.checked) {
      aboutFooterDescription.classList.add("about-footer-description--dark");
      aboutFooterEmail.classList.add("about-footer-email--dark");
      aboutFooterAddress.classList.add("about-us-address--dark");
      historyTitle.classList.add("history-title--dark");
      historyDescription.classList.add("history-description--dark");
      findUsTitle.classList.add("map-title--dark");
      findUsDescription.classList.add("map-description--dark");
    }
  });

  togglerLight.addEventListener("click", function (e) {
    if (togglerLight.checked) {
      aboutFooterDescription.classList.remove("about-footer-description--dark");
      aboutFooterEmail.classList.remove("about-footer-email--dark");
      aboutFooterAddress.classList.remove("about-us-address--dark");
      historyTitle.classList.remove("history-title--dark");
      historyDescription.classList.remove("history-description--dark");
      findUsTitle.classList.remove("map-title--dark");
      findUsDescription.classList.remove("map-description--dark");
    }
  });
}

aboutObserver();
toggleModeAbout();
