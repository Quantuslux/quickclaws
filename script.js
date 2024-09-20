// HEADER VANISH WHEN SCROLLING
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
} 



/* NAV BAR OPEN AND CLOSE*/
/* nav bar open*/
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');   
})
}

/*nav bar close*/
const close = document.getElementById('close');
if(close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })

}

// // CARROUSEL //

// const gap = 16;

// const carousel = document.getElementById("carousel2"),
//   content = document.getElementById("content2"),
//   next = document.getElementById("next"),
//   prev = document.getElementById("prev");

// next.addEventListener("click", e => {
//   carousel.scrollBy(width + gap, 0);
//   if (carousel.scrollWidth !== 0) {
//     prev.style.display = "flex";
//   }
//   if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//     next.style.display = "none";
//   }
// });
// prev.addEventListener("click", e => {
//   carousel.scrollBy(-(width + gap), 0);
//   if (carousel.scrollLeft - width - gap <= 0) {
//     prev.style.display = "none";
//   }
//   if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//     next.style.display = "flex";
//   }
// });

// let width = carousel.offsetWidth;
// window.addEventListener("resize", e => (width = carousel.offsetWidth));





// ADD TO CART //


let carts = document.querySelectorAll('.add-cart');

let products = [
    // name: name of product,
    // tag: tag of prodcut (as specified in class) also same name has to be as name of image.png,
    // price: price of product
    // inCart: 0

    {
        name: 'Acassia',
        tag: 'cart1',
        price: 15,
        inCart: 0
    },

    {
        name: 'Nail Name 2',
        tag: 'cart2',
        price: 30,
        inCart: 0
    },
    {
        name: 'Nail Name 3',
        tag: 'cart3',
        price: 12,
        inCart: 0
    },
    {
        name: 'Nail Name 4',
        tag: 'cart4',
        price: 11,
        inCart: 0
    },
    {
        name: 'Nail Name 5',
        tag: 'cart5',
        price: 17,
        inCart: 0
    },
    {
        name: 'Nail Name 6',
        tag: 'cart6',
        price: 25,
        inCart: 0
    },
    {
        name: 'Nail Name 7',
        tag: 'nail7',
        price: 13,
        inCart: 0
    },

    // ADD MORE PRODUCTS HERE INSIDE THESE {}//
    

]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
         cartNumbers(products[i]);
         totalCost(products[i])
    })
       
}
    function onLoadCartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers');
        
        if (productNumbers) {
            document.querySelector('.cart span').textContent = productNumbers;
        }

    }


    function cartNumbers(product){
        let productNumbers = localStorage.getItem('cartNumbers');

        productNumbers = parseInt(productNumbers);

        if (productNumbers) {
            localStorage.setItem('cartNumbers', productNumbers + 1);
            document.querySelector('.cart span').textContent = productNumbers + 1;

        } else {
            localStorage.setItem('cartNumbers', 1);
            document.querySelector('.cart span').textContent = 1;
        }

        setItems(product);


    }

    function setItems(product){
        
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        
        if (cartItems != null) {
            
            if (cartItems[product.tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [product.tag]: product
                }
                
            }
            cartItems[product.tag].inCart += 1;
            
        } else {
            product.inCart = 1;
            cartItems = {
            [product.tag]: product
            }
        }
        
        localStorage.setItem('productsInCart', JSON.stringify
        (cartItems));
    }

    function totalCost(product) {
        let cartCost = localStorage.getItem('totalCost');
        
        console.log("My cartCost is", cartCost);
        console.log(typeof cartCost);
        
        if(cartCost != null) {
            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price);
        }else{
            localStorage.setItem("totalCost", product.price);

        }
       
    }

    


    // CREATE A FUNCTION TO CHECK IF I HAVE SOMETHING ON CART

    function displayCart(){
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector(".products");
        let cartCost = localStorage.getItem('totalCost');


        console.log(cartItems);
        if( cartItems && productContainer ) {
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += `
                
                <div class="pedido">
                <div class="borrar"> <ion-icon name="close"></ion-icon> </div>
                <div class= "nombreItem"> 
                <img src="../img/${item.tag}.png">
                <span> ${item.name} </span> </div>
                <div class="prise"> $${item.price}.00 </div>
                <div class="quantity"><ion-icon name="add"></ion-icon> <span>${item.inCart}</span><ion-icon name="remove"></ion-icon></div> 
                <div class="subtotal"> $${item.inCart * item.price}. 00 </div>
                </div>
                `
            });
             productContainer.innerHTML += `
                <div class="basketTotalContainer">
                <h4 class= "basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">
                 $${cartCost} 
                </h4>
             `;

        }
    }

 
onLoadCartNumbers();
displayCart();   






 

// CART  IN THE SAME PAGE //

// let cartItems = [];
// let total = 0;

// function addToCart() {
//   const productName = "Product Name";
//   const price = 10.00;
//   const quantity = parseInt(document.getElementById("quantity").value);
//   const subtotal = price * quantity;

//   const item = {
//     productName,
//     price,
//     quantity,
//     subtotal
//   };

//   cartItems.push(item);
//   total += subtotal;

//   displayCartItems();
// }

// function removeItem(index) {
//   const removedItem = cartItems.splice(index, 1)[0];
//   total -= removedItem.subtotal;

//   displayCartItems();
// }

// function displayCartItems() {
//   const cartItemsContainer = document.getElementById("cart-items");
//   cartItemsContainer.innerHTML = "";

//   cartItems.forEach((item, index) => {
//     const cartItem = document.createElement("div");
//     cartItem.classList.add("cart-item");

//     const itemImage = document.createElement("img");
//     itemImage.src = "item-image.jpg";
//     itemImage.alt = "Item Image";

//     const itemDescription = document.createElement("p");
//     itemDescription.textContent = item.productName;

//     const itemPrice = document.createElement("p");
//     itemPrice.textContent = `Price: $${item.price.toFixed(2)}`;

//     const itemQuantity = document.createElement("p");
//     itemQuantity.textContent = `Quantity: ${item.quantity}`;

//     const itemSubtotal = document.createElement("p");
//     itemSubtotal.textContent = `Subtotal: $${item.subtotal.toFixed(2)}`;

//     const removeButton = document.createElement("button");
//     removeButton.classList.add("remove-button");
//     removeButton.textContent = "Remove";
//     removeButton.addEventListener("click", () => removeItem(index));

//     cartItem.appendChild(itemImage);
//     cartItem.appendChild(itemDescription);
//     cartItem.appendChild(itemPrice);
//     cartItem.appendChild(itemQuantity);
//     cartItem.appendChild(itemSubtotal);
//     cartItem.appendChild(removeButton);

//     cartItemsContainer.appendChild(cartItem);
//   });

//   document.getElementById("cart-total").textContent = `Total: $${total.toFixed(2)}`;
// }


