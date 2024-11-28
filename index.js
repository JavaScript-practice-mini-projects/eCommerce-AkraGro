const products = [
    {
        id: 1,
        imgUrl: "https://s.alicdn.com/@sc04/kf/H0fb24d7a5e78441689b74b2d4bc797b7B.jpg_720x720q50.jpg",
        title: "T-Shirt",
        price: 499,
        description: "High-quality cotton t-shirt with a comfortable fit."
    },
    {
        id: 3,
        imgUrl: "https://s.alicdn.com/@sc04/kf/Hbc1965ce68a146a194138e0e218b1470K.jpg_720x720q50.jpg",
        title: "Laptop",
        price: 45999,
        description: "14-inch laptop with 8GB RAM and 512GB SSD."
    },
    {
        id: 4,
        imgUrl: "https://s.alicdn.com/@sc04/kf/H278ab5d6eff14c069ce1f9725ac154a2R.jpg_720x720q50.jpg",
        title: "Bluetooth Speaker",
        price: 1999,
        description: "Portable Bluetooth speaker with deep bass and clear sound."
    },
    {
        id: 5,
        imgUrl: "https://s.alicdn.com/@sc04/kf/H0fb24d7a5e78441689b74b2d4bc797b7B.jpg_720x720q50.jpg",
        title: "T-Shirt",
        price: 699,
        description: "Stylish graphic t-shirt with durable fabric."
    },
    {
        id: 6,
        imgUrl: "https://s.alicdn.com/@sc04/kf/Hf9a6290d6af247009b17a003a1a84be2E.jpg_720x720q50.jpg",
        title: "Smart Watch",
        price: 4999,
        description: "Feature-rich smartwatch with fitness tracking and notifications."
    },
    {
        id: 7,
        imgUrl: "https://s.alicdn.com/@sc04/kf/H45d6cc2ca5d94132ac34441b7d97a1edN.jpg_720x720q50.jpg",
        title: "Wireless Headphones",
        price: 2999,
        description: "Noise-cancelling wireless headphones with superior sound quality."
    },
    {
        id: 8,
        imgUrl: "https://s.alicdn.com/@sc04/kf/Hbea0cfa471534ebd97a8ef5e3b82a0b3G.jpg_720x720q50.jpg",
        title: "Gaming Mouse",
        price: 1499,
        description: "Ergonomic gaming mouse with customizable buttons and RGB lighting."
    },
    {
        id: 9,
        imgUrl: "https://s.alicdn.com/@sc04/kf/Hbc1965ce68a146a194138e0e218b1470K.jpg_720x720q50.jpg",
        title: "Laptop",
        price: 42999,
        description: "15-inch laptop with Intel Core i5 processor and 1TB SSD."
    },
    {
        id: 11,
        imgUrl: "https://s.alicdn.com/@sc04/kf/H5f804442967c4710b7bf8eee8609d15b1.jpg_720x720q50.jpg",
        title: "Power Bank",
        price: 1499,
        description: "Fast-charging power bank with 10000mAh capacity."
    },
    {
        id: 12,
        imgUrl: "https://s.alicdn.com/@sc04/kf/H278ab5d6eff14c069ce1f9725ac154a2R.jpg_720x720q50.jpg",
        title: "Bluetooth Speaker",
        price: 2199,
        description: "Compact Bluetooth speaker with excellent sound clarity."
    },
    {
        id: 13,
        imgUrl: "https://s.alicdn.com/@sc04/kf/H1f822e3127714276a7ec411a4f6abdadQ.jpg_720x720q50.jpg",
        title: "Smartphone Stand",
        price: 499,
        description: "Adjustable smartphone stand, perfect for desks and tables."
    },
    {
        id: 14,
        imgUrl: "https://s.alicdn.com/@sc04/kf/H0fb24d7a5e78441689b74b2d4bc797b7B.jpg_720x720q50.jpg",
        title: "T-Shirt",
        price: 599,
        description: "Casual t-shirt available in various colors and sizes."
    },
    {
        id: 15,
        imgUrl: "https://s.alicdn.com/@sc04/kf/H63f8c008694c4e01af13f1756ac0e2cbT.jpg_720x720q50.jpg",
        title: "Gaming Keyboard",
        price: 2499,
        description: "Mechanical gaming keyboard with customizable RGB lighting."
    },
    {
        id: 16,
        imgUrl: "https://s.alicdn.com/@sc04/kf/H45d6cc2ca5d94132ac34441b7d97a1edN.jpg_720x720q50.jpg",
        title: "Wireless Charger",
        price: 1299,
        description: "Fast wireless charger compatible with all Qi-enabled devices."
    },
    {
        id: 17,
        imgUrl: "https://s.alicdn.com/@sc04/kf/Hbc1965ce68a146a194138e0e218b1470K.jpg_720x720q50.jpg",
        title: "Laptop Sleeve",
        price: 799,
        description: "Durable laptop sleeve with water-resistant material."
    },
    {
        id: 19,
        imgUrl: "https://s.alicdn.com/@sc04/kf/Hf6505807d6cf48caa3d7455596020cb7t.jpg_720x720q50.jpg",
        title: "Desk Organizer",
        price: 999,
        description: "Multi-compartment desk organizer for office supplies."
    },
    {
        id: 20,
        imgUrl: "https://s.alicdn.com/@sc04/kf/Hf9a6290d6af247009b17a003a1a84be2E.jpg_720x720q50.jpg",
        title: "Smart Watch",
        price: 5499,
        description: "Advanced smartwatch with GPS and heart rate monitoring."
    },
   
];


window.onload = () => {
    main()
}
function main(){
    // dom reference
    const productsContainer = document.getElementById('productsContainer');
    const searchBar = document.getElementById('navForm');


    //event listener
    searchBar.addEventListener('submit', (event) => handleSearchBar(event, productsContainer));


    dynamicProducts(productsContainer);
}
//event handler
function handleSearchBar(event, productsContainer){
    event.preventDefault()
        const searchValue = event.target.search.value.toLowerCase()

        const searchMatch = products.filter((product) => {
            const productTitle = product.title.toLowerCase()
            return productTitle.includes(searchValue)
        })
        productsContainer.innerHTML = ''
        searchMatch.forEach((product) => {
            dynamicProductsForHome(productsContainer, product)
        })
}

//dom function
/**
 * create dynamic product
 * @param {object} productsContainer 
 * @param {object} product 
 */
function dynamicProductsForHome(productsContainer, product){
    const {id, title, price, description, imgUrl} = product
    const dynamicHTML = `
    <div class="product-item">
    <div class="product-header"> <h5>Preview</h5> <h5>4.5</h5></div>
    <div class="product-imgage"> <img src="${imgUrl}"alt=""></div>
    <div class="product-price"><h4>${price}</h4></div>
    <div class="product-title"><h3>${title}</h3></div>
    <div class="product-description"><p>${description}</p></div>
    <div class="product-button">
    <button class="add-to-cart-btn">Add Cart</button>
    <button class="product-buy-btn">Buy Now</button>
    </div>
    </div>
    `
    
    productsContainer.innerHTML += dynamicHTML;
}



// units
/**
 * create object for dynamicProducts
 */
function dynamicProducts(productsContainer){
    productsContainer.innerHTML = ''
    if(productsContainer.innerHTML === ''){
        products.forEach((product) => {
            dynamicProductsForHome(productsContainer,product)
        })
    }
}
