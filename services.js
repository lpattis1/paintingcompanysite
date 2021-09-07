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

servicesImgSlideUp();
servicesImgSlideDown();
