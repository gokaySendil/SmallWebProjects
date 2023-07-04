const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
     ? navToggle.setAttribute("aria-expanded", false)
     : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  if(primaryNav.hasAttribute("data-visible")){
    navToggle.classList.add("active");
    document.body.style.overflowY = 'hidden';
  }else{
    navToggle.classList.remove("active");
    document.body.style.overflowY = 'visible';
  }
  primaryHeader.toggleAttribute("data-overlay");
});
