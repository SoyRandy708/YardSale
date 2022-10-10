const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const carritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")


menuEmail.addEventListener("click", toggleMenus)
menuHamIcon.addEventListener("click", toggleMenus)
carritoIcon.addEventListener("click", toggleAsideCarrito)

function toggleMenus() {
    aside.classList.add("inactive")
    desktopMenu.classList.toggle("inactive")
    mobileMenu.classList.toggle("inactive")
}
function toggleAsideCarrito() {
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    aside.classList.toggle("inactive")
}