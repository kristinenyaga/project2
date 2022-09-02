fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((completedData) => {
    console.log(completedData);
    let data1 = "";
    completedData.map((values) => {
      data1 += `
    <div class="card">
      <h1 class="title">${values.title}</h1>
      <img src="${values.image}" alt="" class="images">
      <p class="description">${values.description}</p>
      <h3>Category:</h3><p class="category">${values.category}</p>
      <p class="price">${values.price}</p>
      <button id="cart-btn">Add to cart</button>
      </div>
  </div>
    `;
    });
    document.getElementById("cards").innerHTML += data1;
  })
  .catch((err) => console.log(err));

  const cartIcon = document.querySelector(".fa-cart-arrow-down");
  const cart= document.querySelector(".whole-cart-window");
  cart.currentWindow = 0;
  cartIcon.addEventListener("mouseover", () => {
    if (cart.classList.contains("hide"))
      cart.classList.remove("hide");
  });
  cartIcon.addEventListener("mouseout", () => {
    // if(cart.classList.contains("hide"))
    setTimeout(() => {
      if (cart.currentWindow === 0) {
        cart.classList.add("hide");
      }
    }, 1000);
  });
  cart.addEventListener("mouseover", () => {
    Cart.currentWindow = 1;
  });
  cart.addEventListener("mouseleave", () => {
    cart.currentWindow = 0;
    cart.classList.add("hide");
  });
  function getItem() {
    let cartBtn = document.querySelectorAll("#cart-btn");
    let wrapper = document.querySelector(".cart-wrapper");
  
    for (let button of cartBtn) {
      button.addEventListener("click", (event) => {
        let item = event.target.parentElement;
  
        let prod = {
          nameofitem: item.querySelector(".title").textContent,
          image: item.querySelector(".images").src,
          cartPrice: item.querySelector(".price").textContent,
        };
        console.log(prod);
  
        wrapper.append(passProduct(prod));
  
        // cartWrapper.innerHTML+=item
      });
    }
  }
  getItem()



function passProduct(prod) {
  let productItem = "";
  productItem = `
  
          <div class="cart-item">
            <img src="${prod.image}">
            <div class="details">
              <h3 class="nameofitem">${prod.nameofitem}e</h3>
                <input type="number" value="1" class="cart-quantity">
                <span class="cart-price">${prod.cartPrice}</span>
                <div class="total-title">Total</div>
                <div class="total">0.0</div>

            </div>
            <div class="cancel">
              <i class="fas fa-window-close"></i>
            </div>
          </div>

  `
  document.querySelector(".cart-wrapper").innerHTML += productItem;
}



function removeItem() {
  var removeCartButtons = document.getElementsByClassName("fa-window-close");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
}
removeItem();


// remove items from cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  console.log("buttonClicked")
  buttonClicked.parentElement.parentElement.remove();
  updateTotal();
}
