const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const mobileMenu = document.querySelector(".mobile-menu")
const carritoIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const productDetailContainer = document.querySelector("#productDetail")
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleMenus)
menuHamIcon.addEventListener("click", toggleMenus)
carritoIcon.addEventListener("click", toggleAsideCarrito)
productDetailCloseIcon.addEventListener("click", closeProductDetail)

function toggleMenus() {
    desktopMenu.classList.toggle("inactive")
    mobileMenu.classList.toggle("inactive")
    shoppingCartContainer.classList.add("inactive")
    productDetailContainer.classList.add("inactive")
}
function toggleAsideCarrito() {
    shoppingCartContainer.classList.toggle("inactive")
    productDetailContainer.classList.add("inactive")    
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")    
}
function openProductDetail() {
    productDetailContainer.classList.remove("inactive")
    shoppingCartContainer.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
}
function closeProductDetail() {
    productDetailContainer.classList.add("inactive")
}

const productostLista = []
productostLista.push({
    nombre: "Bike",
    precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productostLista.push({
    nombre: "Pantalla",
    precio: 500,
    imagen: "https://img.freepik.com/foto-gratis/maqueta-televisor-montado-pared-sala-estar-pared-blanca-representacion-3d_41470-3279.jpg?w=1060&t=st=1665445622~exp=1665446222~hmac=d14df0f25506188488a04d04f14bd55cb74a42a1274096842bb48b32d2cf9ed0",
})
productostLista.push({
    nombre: "Bocho",
    precio: 20000,
    imagen: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productostLista.push({
    nombre: "Cafetera",
    precio: 200,
    imagen: "https://images.pexels.com/photos/2147683/pexels-photo-2147683.jpeg?auto=compress&cs=tinysrgb&w=600"
})
productostLista.push({
    nombre: "Iphone 12",
    precio: 3000,
    imagen: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=600"
})
productostLista.push({
    nombre: "Colchon",
    precio: 2000,
    imagen: "https://images.pexels.com/photos/6523294/pexels-photo-6523294.jpeg?auto=compress&cs=tinysrgb&w=600"
})
productostLista.push({
    nombre: "Escalera de mano",
    precio: 250,
    imagen: "https://images.pexels.com/photos/4947007/pexels-photo-4947007.jpeg?auto=compress&cs=tinysrgb&w=600"
})

function mostrarProductos(array) {
    for(producto of array) {            
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", producto.imagen)
        productImg.addEventListener("click", openProductDetail)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
        const productInfoDiv = document.createElement("div")
    
        const productPrecio = document.createElement("p")
        productPrecio.innerText = `$${producto.precio}`
        const productNombre = document.createElement("p")
        productNombre.innerText = producto.nombre
    
        const productInfoFigure = document.createElement("figure")
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./assets/icons/bt_add_to_cart.svg")
    
        cardsContainer.appendChild(productCard)
        productCard.append(productImg, productInfo)
        productInfo.append(productInfoDiv, productInfoFigure)  
        productInfoDiv.append(productPrecio, productNombre)
        productInfoFigure.appendChild(productImgCart)            
    }
}

mostrarProductos(productostLista)