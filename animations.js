// Header Animations

function headerAnimations() {
  const carousel = document.querySelector(".header-section");

  gsap.fromTo(
    carousel,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      left: 0,
      ease: "power2.out",
      delay: 0.6,
      duration: 1.3,
    }
  );
}

// Learn More Section Animations
function offerSectionAnimationsShow() {
  // offer section variables
  const learnCards = document.querySelectorAll(".learn-card");
  const learnTitle = document.querySelector(".learn-title");
  const learnDescription = document.querySelector(".learn-description");

  //   offer section animations

  learnCards.forEach((learn) => {
    gsap.fromTo(
      learn,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        left: 0,
        ease: "power2.out",
        delay: 0.8,
        duration: 1.3,
      }
    );

    gsap.fromTo(
      learnTitle,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        right: 0,
        ease: "power2.out",
        delay: 0.6,
        duration: 1.3,
      }
    );

    gsap.fromTo(
      learnDescription,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        right: 0,
        ease: "power2.out",
        delay: 0.6,
        duration: 1.3,
      }
    );
  });
}

// Project Before After Animations

function projectBeforeAfterAnimations() {
  const beforeAfterSlider = document.querySelector(".project-before-after");
  const projectTitle = document.querySelector(".project-text-title");
  const projectDescription = document.querySelector(
    ".project-text-description"
  );

  gsap.fromTo(
    beforeAfterSlider,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 0.6,
      duration: 1.3,
    }
  );

  gsap.fromTo(
    projectTitle,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 0.6,
      duration: 1.3,
    }
  );

  gsap.fromTo(
    projectDescription,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 0.6,
      duration: 1.3,
    }
  );
}

// Testimonials Animations

function testimonialsAnimations() {
  const testimonialPictures = document.querySelectorAll(
    ".testimonials-indicator-img"
  );
  const testimonialTitle = document.querySelector(".testimonials-title");
  const testimonialDescriptions =
    document.querySelectorAll(".testimonial-slide");

  testimonialPictures.forEach((picture) => {
    gsap.to(picture, {
      left: 0,
      ease: "power2.out",
      delay: 0.6,
      duration: 1.3,
    });
  });

  gsap.fromTo(
    testimonialTitle,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      right: 0,
      ease: "power2.out",
      delay: 0.6,
      duration: 1.3,
    }
  );

  testimonialDescriptions.forEach((description) => {
    gsap.fromTo(
      description,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        right: 0,
        ease: "power2.out",
        delay: 0.6,
        duration: 1.3,
      }
    );
  });
}

// Why Us Animations

function whyUsAnimations() {
  const whyUsContent = document.querySelector("#why-us");

  gsap.fromTo(
    whyUsContent,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 0.6,
      duration: 1.3,
    }
  );
}

// Contact Form Animations (1)

function homeContactAnimations() {
  const contactHeading = document.querySelector(".contact-heading");
  const contactDescription = document.querySelector(".contact-description");
  const contactForm = document.querySelector("#contact-form");

  gsap.fromTo(
    contactHeading,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      right: 0,
      ease: "power2.out",
      delay: 0.6,
      duration: 1.3,
    }
  );

  gsap.fromTo(
    contactDescription,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      right: 0,
      ease: "power2.out",
      delay: 0.6,
      duration: 1.3,
    }
  );

  gsap.fromTo(
    contactForm,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      left: 0,
      ease: "power2.out",
      delay: 0.6,
      duration: 1.3,
    }
  );
}

// About Us Animations

function missionAnimation() {
  const missionTxt = document.querySelector(".mission-text-area");
  const missionImg = document.querySelector(".mission-img-area");

  gsap.fromTo(
    missionTxt,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      left: 0,
      ease: "power2.out",
      delay: 0.3,
      duration: 1.3,
    }
  );

  gsap.fromTo(
    missionImg,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      right: 0,
      ease: "power2.out",
      delay: 0.3,
      duration: 1.3,
    }
  );
}

function historyAnimation() {
  const historyTxt = document.querySelector(".history-text-area");
  const historyImg = document.querySelector(".history-img-area");

  gsap.fromTo(
    historyTxt,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      right: 0,
      ease: "power2.out",
      delay: 0.3,
      duration: 1.3,
    }
  );

  gsap.fromTo(
    historyImg,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      left: 0,
      ease: "power2.out",
      delay: 0.3,
      duration: 1.3,
    }
  );
}

function whatWeDoAnimation() {
  const whatWeDoTxt = document.querySelector(".what-we-do-text-area");
  const whatWeDoImg = document.querySelector(".what-we-do-img-area");

  gsap.fromTo(
    whatWeDoTxt,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      left: 0,
      ease: "power2.out",
      delay: 0.3,
      duration: 1.3,
    }
  );

  gsap.fromTo(
    whatWeDoImg,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      right: 0,
      ease: "power2.out",
      delay: 0.3,
      duration: 1.3,
    }
  );
}

function mapAnimation() {
  const map = document.querySelector("#map-section");

  gsap.fromTo(
    map,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 0.3,
      duration: 1.3,
    }
  );
}
