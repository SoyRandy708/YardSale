const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")


menuEmail.addEventListener("click", toggleMenus)
menuHamIcon.addEventListener("click", toggleMenus)


function toggleMenus() {
    desktopMenu.classList.toggle("inactive")
    mobileMenu.classList.toggle("inactive")
}
