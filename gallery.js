// Image Gallery

function sortThroughGallery() {
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
