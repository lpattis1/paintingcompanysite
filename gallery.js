// Image Gallery

function sortThroughGallery() {
  const galleryRow = document.querySelector(".gallery-row");
  const gallerySortingButtons = document.querySelectorAll(".gallery-sort");
  const galleryImages = document.querySelectorAll(".gallery-img");

  gallerySortingButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const galleryButtonType = button.children[1].textContent.toLowerCase();
      galleryImages.forEach((img) => {
        if (!img.classList.contains(galleryButtonType)) {
          img.parentElement.classList.add("hide-gallery-img");
        } else {
          img.parentElement.classList.remove("hide-gallery-img");
        }

        if (galleryButtonType === "all") {
          img.parentElement.classList.remove("hide-gallery-img");
        }

        window.scrollTo({
          top: galleryRow.getBoundingClientRect().top,
          behavior: "smooth",
        });
      });
    });
  });
}

sortThroughGallery();

function changeGalleryDisplayImg() {
  const galleryImages = document.querySelectorAll(".gallery-img");
  const galleryDisplayImg = document.querySelector(".display-gallery-img");

  galleryImages.forEach((img) => {
    img.addEventListener("click", function (e) {
      const galleryImgNum = img.getAttribute("alt");
      galleryDisplayImg.src = `/img/gallery${galleryImgNum}.jpeg`;
    });
  });
}

changeGalleryDisplayImg();

function openFullGalleryImg() {
  const galleryImages = document.querySelectorAll(".gallery-img");
  const modal = document.querySelector(".full-img-modal");
  const fullImg = document.querySelector(".full-img");

  galleryImages.forEach((img) => {
    img.addEventListener("click", function (e) {
      const galleryImgNum = img.getAttribute("alt");
      modal.classList.add("open");
      fullImg.classList.add("enlarge");
      fullImg.src = `/img/gallery${galleryImgNum}.jpeg`;
    });
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("open");
      fullImg.classList.remove("enlarge");
    }
  });
}

openFullGalleryImg();

// Job Gallery Script Fixes

function collapseMenuIntoHamburgerBar2() {
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
}

collapseMenuIntoHamburgerBar2();

// Allow the light/dark mode to work on the job gallery page

function toggleModeGallery() {
  const togglerDark = document.querySelector(".toggler-dark");
  const togglerLight = document.querySelector(".toggler-light");
  const galleryDescription = document.querySelector(".gallery-description");
  const galleryTitle = document.querySelector(".gallery-title");

  togglerDark.addEventListener("click", function (e) {
    if (togglerDark.checked) {
      galleryDescription.classList.add("gallery-description--dark");
      galleryTitle.classList.add("gallery-title--dark");
    }
  });

  togglerLight.addEventListener("click", function (e) {
    if (togglerLight.checked) {
      galleryDescription.classList.remove("gallery-description--dark");
      galleryTitle.classList.remove("gallery-title--dark");
    }
  });
}

toggleModeGallery();
