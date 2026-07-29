// ==========================
// CART
// ==========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ==========================
// ADD TO CART
// ==========================

function addToCart(id){

    const product = products.find(item => item.id === id);

    if(!product){
        return;
    }

    const existing = cart.find(item => item.id === id);

    if(existing){

        existing.quantity++;

    }else{

        cart.push({

            ...product,
            quantity:1

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " added to cart!");

}

// ==========================
// UPDATE CART COUNT
// ==========================

function updateCartCount(){

    const count = cart.reduce((total,item)=> total + item.quantity,0);

    const badge = document.getElementById("cart-count");

    if(badge){

        badge.innerHTML = count;

    }

}

updateCartCount();


// ==========================
// DISPLAY CART
// ==========================

function displayCart(){

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if(!cartItems) return;

    if(cart.length === 0){

        cartItems.innerHTML = `

        <div class="empty-cart">

            <h2>Your Cart is Empty</h2>

            <p>Looks like you haven't added anything yet.</p>

            <a href="shop.html" class="btn btn-gold">

                Continue Shopping

            </a>

        </div>

        `;

        if(cartTotal){

            cartTotal.innerHTML = "Rs. 0";

        }

        return;

    }

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach(item=>{

        total += item.price * item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-info">

                <h3>${item.name}</h3>

                <p><strong>Price:</strong> Rs. ${item.price.toLocaleString()}</p>

                <div class="quantity">

                    <button onclick="decreaseQty(${item.id})">−</button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseQty(${item.id})">+</button>

                </div>

                <p>

                    <strong>Subtotal:</strong>

                    Rs. ${(item.price * item.quantity).toLocaleString()}

                </p>

            </div>

            <button class="remove-btn"

                onclick="removeItem(${item.id})">

                Remove

            </button>

        </div>

        `;

    });

    if(cartTotal){

        cartTotal.innerHTML = "Rs. " + total.toLocaleString();

    }

}


// ==========================
// INCREASE QUANTITY
// ==========================

function increaseQty(id){

    const item = cart.find(p=>p.id===id);

    if(item){

        item.quantity++;

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();

    displayCart();

}


// ==========================
// DECREASE QUANTITY
// ==========================

function decreaseQty(id){

    const item = cart.find(p=>p.id===id);

    if(item){

        item.quantity--;

        if(item.quantity <= 0){

            cart = cart.filter(p=>p.id!==id);

        }

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();

    displayCart();

}


// ==========================
// REMOVE ITEM
// ==========================

function removeItem(id){

    cart = cart.filter(p=>p.id!==id);

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();

    displayCart();

}


// ==========================
// LOAD CART
// ==========================

displayCart();