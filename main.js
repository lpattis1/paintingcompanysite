// Page sections
const pageSections = document.querySelectorAll(".page-section");

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
