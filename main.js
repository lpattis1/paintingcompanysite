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
}

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
function displayStats() {
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
