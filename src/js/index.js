let btn = document.querySelector('.header__btn');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.popup__close');

let Productsrow = document.querySelector(".our__row");
let ProductsUrl = "http://localhost:3000/shoes";


const getProducts = () => {
    fetch(ProductsUrl)
    .then((response) => response.json())
    .then((response) => {
        response.forEach((item) => {
            Productsrow.innerHTML += `
            <div class="div-wrapper-product">
                <img src="${item.image}" alt="" class="image-product">
                <p class="title-product">${item.title}</p>
                <p class="descript-product">${item.description}</p>
                <p class="price-for-product">${item.price}</p>
            </div>
            `
        })
    })
}


getProducts();




btn.addEventListener('click', () => {
    overlay.style.display = 'flex'
})

close.addEventListener('click', () => {
    overlay.style.display = 'none'
})

overlay.addEventListener('click', (e) => {
    if (e.target.className === 'overlay') {
        overlay.style.display = 'none'
    }
})

let burger = document.querySelector('.burger')
let list = document.querySelector('.header__list')

burger.addEventListener('click', () => {
    list.classList.toggle('show')
    burger.classList.toggle('show')
})

AOS.init();


