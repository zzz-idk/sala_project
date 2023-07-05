const primaryNav = document.querySelector('.mobile-nav')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      hamburger.setAttribute("aria-expanded",true);
    } else {
      primaryNav.setAttribute("data-visible", false);
      hamburger.setAttribute("aria-expanded", false);
    }
}) 

primaryNav.addEventListener('click', function() {
  primaryNav.setAttribute("data-visible", false);
  hamburger.setAttribute("aria-expanded", false);
  hamburger.classList.toggle('active')
});