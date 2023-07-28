// obtain the dom elements
const menuButton = document.getElementById("menu-button");
const mainHeader = document.getElementById("main-header");
const activeClass = "is-active";
const isTablet = matchMedia("(max-width : 640px)");

console.log(menuButton, mainHeader);

const toggleMenu = () => mainHeader.classList.toggle(activeClass);
const closeMenu = () => mainHeader.classList.remove(activeClass);

const closeMenuWhenClickLink = (event) => {
  console.log(event.target.tagName);
  if (event.target.tagName === "A") closeMenu();
  if (event.target.tagName === "IMG") closeMenu();
};

// Create handles to add event listener only on mobile and remove on desktop for better performance
const handleAddEventListener = () => {
  menuButton.addEventListener("click", toggleMenu);
  mainHeader.addEventListener("click", closeMenuWhenClickLink);
};

const handleRemoveEventListener = () => {
  menuButton.addEventListener("click", toggleMenu);
  mainHeader.addEventListener("click", closeMenuWhenClickLink);
};

const handleEventListener = (mediaQuery) => {
  if (mediaQuery.matches) handleAddEventListener();
  else handleRemoveEventListener();
};

export const handleActiveMenu = () => {
  if (isTablet.matches) handleAddEventListener();
  isTablet.addEventListener("change", handleEventListener);
};
