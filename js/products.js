
const products = [

{
    id:1,
    name:"Premium Sneakers",
    category:"Shoes",
    price:24999,
    oldPrice:29999,
    image:"images/products/product1.jpg",
    rating:5
},

{
    id:2,
    name:"Luxury Watch",
    category:"Accessories",
    price:45999,
    oldPrice:54999,
    image:"images/products/product2.jpg",
    rating:5
},

{
    id:3,
    name:"Wireless Headphones",
    category:"Electronics",
    price:18999,
    oldPrice:22999,
    image:"images/products/product3.jpg",
    rating:5
},

{
    id:4,
    name:"Leather Backpack",
    category:"Fashion",
    price:15999,
    oldPrice:18999,
    image:"images/products/product4.jpg",
    rating:5
},

{
    id:5,
    name:"Gaming Mouse",
    category:"Electronics",
    price:6999,
    oldPrice:8499,
    image:"images/products/product5.jpg",
    rating:4
},

{
    id:6,
    name:"Smart Phone",
    category:"Electronics",
    price:149999,
    oldPrice:169999,
    image:"images/products/product6.jpg",
    rating:5
},

{
    id:7,
    name:"Sports Shoes",
    category:"Shoes",
    price:27999,
    oldPrice:32999,
    image:"images/products/product7.jpg",
    rating:4
},

{
    id:8,
    name:"Bluetooth Speaker",
    category:"Electronics",
    price:12999,
    oldPrice:15999,
    image:"images/products/product8.jpg",
    rating:5
}

];

const productGrid = document.querySelector(".product-grid");

if(productGrid){

    productGrid.innerHTML = products.map(product => `

    <div class="product-card">

        <span class="sale">SALE</span>

        <img src="${product.image}" alt="${product.name}">

        <div class="product-info">

            <small>${product.category}</small>

            <h3>${product.name}</h3>

           <div class="stars">
    ${"⭐".repeat(product.rating)}
</div>

           <div class="price">

    <span class="new-price">
        Rs. ${product.price.toLocaleString()}
    </span>

    <span class="old-price">
        Rs. ${product.oldPrice.toLocaleString()}
    </span>

</div>

            

            <button
                class="cart-btn"
                onclick="addToCart(${product.id})">

                <i class="fa-solid fa-cart-shopping"></i>

                Add to Cart

            </button>

        </div>

    </div>

    `).join("");

}