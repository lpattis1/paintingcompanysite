// Services Variables
const servicesImgs = document.querySelectorAll(".service-img");
const serviceSliders = document.querySelectorAll(".service-slider");
const serviceBtnHolders = document.querySelectorAll(".service-btn-holder");

// Services Pictures Slide Up Function

function servicesImgSlideUp() {
  servicesImgs.forEach((img) => {
    img.addEventListener("mouseenter", function (e) {
      let imgNum = img.dataset.imgnum;
      if (img.dataset.imgnum === imgNum) {
        img.classList.add("service-img--slide");

        serviceSliders.forEach((service) => {
          if (service.parentElement === img) {
            service.classList.add("service-slider--show");
          }
        });

        serviceBtnHolders.forEach((holder) => {
          if (holder.parentElement === img) {
            holder.classList.add("service-btn-holder--show");
          }
        });
      }
    });
  });
}

function servicesImgSlideDown() {
  servicesImgs.forEach((img) => {
    img.addEventListener("mouseleave", function (e) {
      img.classList.remove("service-img--slide");

      serviceSliders.forEach((service) => {
        service.classList.remove("service-slider--show");
      });

      serviceBtnHolders.forEach((holder) => {
        holder.classList.remove("service-btn-holder--show");
      });
    });
  });
}

function toggleModeServices() {
  const togglerDark = document.querySelector(".toggler-dark");
  const togglerLight = document.querySelector(".toggler-light");
  const aboutFooterDescription = document.querySelector(
    ".about-footer-description"
  );
  const aboutFooterEmail = document.querySelector(".about-footer-email");
  const aboutFooterAddress = document.querySelector(".about-us-address");

  togglerDark.addEventListener("click", function (e) {
    if (togglerDark.checked) {
      aboutFooterDescription.classList.add("about-footer-description--dark");
      aboutFooterEmail.classList.add("about-footer-email--dark");
      aboutFooterAddress.classList.add("about-us-address--dark");
    }
  });

  togglerLight.addEventListener("click", function (e) {
    if (togglerLight.checked) {
      aboutFooterDescription.classList.remove("about-footer-description--dark");
      aboutFooterEmail.classList.remove("about-footer-email--dark");
      aboutFooterAddress.classList.remove("about-us-address--dark");
    }
  });
}

servicesImgSlideUp();
servicesImgSlideDown();
toggleModeServices();
