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

collapseMenuIntoHamburgerBar2();
