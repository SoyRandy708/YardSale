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
    nombre: "Bicicleta",
    precio: 120,
    imagen: "https://res.cloudinary.com/dwog1xmvw/image/upload/v1665589099/YardSale/Productos/Bicicleta_ya0dek.webp",
})
productostLista.push({
    nombre: "Pantalla",
    precio: 500,
    imagen: "https://res.cloudinary.com/dwog1xmvw/image/upload/v1665588806/YardSale/Productos/Televisor_ozfyk8.webp",
})
productostLista.push({
    nombre: "Bocho",
    precio: 20000,
    imagen: "https://res.cloudinary.com/dwog1xmvw/image/upload/v1665588800/YardSale/Productos/Bocho_ts77yk.webp"
})
productostLista.push({
    nombre: "Cafetera",
    precio: 200,
    imagen: "https://res.cloudinary.com/dwog1xmvw/image/upload/v1665588990/YardSale/Productos/Cafetera_tv0tia.webp"
})
productostLista.push({
    nombre: "Iphone 12",
    precio: 3000,
    imagen: "https://res.cloudinary.com/dwog1xmvw/image/upload/v1665588797/YardSale/Productos/Iphone_cowamu.jpg"
})
productostLista.push({
    nombre: "Cama",
    precio: 2500,
    imagen: "https://res.cloudinary.com/dwog1xmvw/image/upload/v1665589178/YardSale/Productos/Cama_nq0j4r.webp"
})
productostLista.push({
    nombre: "Escalera de mano",
    precio: 250,
    imagen: "https://res.cloudinary.com/dwog1xmvw/image/upload/v1665588770/YardSale/Productos/Escalera_lwkitk.webp"
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
        productImgCart.setAttribute("src", "https://res.cloudinary.com/dwog1xmvw/image/upload/v1665587186/YardSale/Iconos%20-%20Logos/bt_add_to_cart_upspdi.svg")
    
        cardsContainer.appendChild(productCard)
        productCard.append(productImg, productInfo)
        productInfo.append(productInfoDiv, productInfoFigure)  
        productInfoDiv.append(productPrecio, productNombre)
        productInfoFigure.appendChild(productImgCart)            
    }
}

mostrarProductos(productostLista)