// Collapse toggled nav links into the hamburger menu

const collapseMenuIntoHamburgerBar = function () {
  //   Parent that the items will be appended to:
  const hamburgerNav = document.querySelector(".top-nav");
  const menuItemsClassList = ["nav-item", "added-nav-item"];
  let smallerDevices = window.matchMedia("(max-width: 991px)");

  //   Item one:
  const menuItemOne = document.createElement("li");
  menuItemOne.className = "nav-item added-nav-item";
  const menuLinkOne = document.createElement("a");
  menuLinkOne.className = "nav-link";
  menuLinkOne.textContent = "Job Photos";
  menuLinkOne.setAttribute("href", "#jobgallery");
  menuItemOne.appendChild(menuLinkOne);
  menuItemOne.classList.add("lg-screen-hidden");
  hamburgerNav.appendChild(menuItemOne);

  //   Item two:
  const menuItemTwo = document.createElement("li");
  menuItemTwo.className = "nav-item added-nav-item";
  const menuLinkTwo = document.createElement("a");
  menuLinkTwo.className = "nav-link";
  menuLinkTwo.textContent = "About Us";
  menuLinkTwo.setAttribute("href", "#about");
  menuItemTwo.classList.add("lg-screen-hidden");
  menuItemTwo.appendChild(menuLinkTwo);
  hamburgerNav.appendChild(menuItemTwo);

  //   Item three:
  const menuItemThree = document.createElement("li");
  menuItemThree.className = "nav-item added-nav-item";
  const menuLinkThree = document.createElement("a");
  menuLinkThree.className = "nav-link";
  menuLinkThree.textContent = "Reviews";
  menuLinkThree.setAttribute("href", "#reviews");
  menuItemThree.classList.add("lg-screen-hidden");
  menuItemThree.appendChild(menuLinkThree);
  hamburgerNav.appendChild(menuItemThree);

  //   Item four:
  const menuItemFour = document.createElement("li");
  menuItemFour.className = "nav-item added-nav-item";
  const menuLinkFour = document.createElement("a");
  menuLinkFour.className = "nav-link";
  menuLinkFour.textContent = "Free Estimate";
  menuLinkFour.setAttribute("href", "#reviews");
  menuItemFour.classList.add("lg-screen-hidden");
  menuItemFour.appendChild(menuLinkFour);
  hamburgerNav.appendChild(menuItemFour);
};

collapseMenuIntoHamburgerBar();

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
