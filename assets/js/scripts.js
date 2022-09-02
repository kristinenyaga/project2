

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
    cart.currentWindow = 1;
  });
  cart.addEventListener("mouseleave", () => {
    cart.currentWindow = 0;
    cart.classList.add("hide");
  });




  function getItem (){
    let cartBtn = document.querySelectorAll("#cart-btn");
    for (let button of cartBtn) {
      button.addEventListener("click", (event) => {
        let item = event.target.parentElement;
  
        let prod = {
          nameofitem: item.querySelector(".title").textContent,
          image: item.querySelector(".images").src,
          cartPrice: item.querySelector(".price").textContent,
        };
        console.log(prod);
  
        passProduct(prod);
  
       
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
                <input type="number" id="input${prod.nameofitem}" onchange="updateTotal(this.value , '${prod.nameofitem}' , ${prod.cartPrice})" value="1" class="cart-quantity">
                <span class="cart-price">${prod.cartPrice}</span>
                <div class="total-title >Total</div>
                <div class="total" id="${prod.nameofitem}">0.0</div>

            </div>
          
              <i class="fas fa-window-close" onclick="removeCartItem(this)"></i>
    
          </div>

  `
  if(document.getElementById(prod.nameofitem) === null){
    

  document.querySelector(".cart-wrapper").innerHTML += productItem;
  }else{
    let quantity=document.getElementById('input' + prod.nameofitem).value
    document.getElementById('input' + prod.nameofitem).value=parseInt(quantity)+1
    updateTotal(parseInt(quantity) +1,prod.nameofitem , prod.cartPrice)
  }
}
// if(document.readyState == "loading")
// {
//   document.addEventListener("DOMContentLoaded",ready)
// }else{
//   getItem
// }

function ready() {
  var removeCartButtons = document.getElementsByClassName("fa-window-close");
 
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
}
ready();


// remove items from cart
function removeCartItem(button) {
  
  console.log("buttonClicked")
  button.parentElement.remove();
}



// update Total
function updateTotal(value,name,price) {
  
  var total = 0;
  console.log("name"+name)
    var quantity = value;
    total = total + (price * quantity);
    document.getElementById(name).innerText = "$" + total;
  
}

function mensWare() {
  let menWare = document.querySelector("#men").addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((completedData) => {
        let data1 = "";
        completedData.map((values) => {
          data1 += `
        <div class="card">
          <h1 class="title">${values.title}</h1>
          <img src="${values.image}" alt="" class="images">
          <p>${values.description}</p>
          <p class="category">${values.category}</p>
          <p class="price">${values.price}</p>
          <button id="cart-btn">Add to cart</button>
          </div>
      </div>
        `;
        });
        document.getElementById("cards").innerHTML = data1;
      });
  });
}
mensWare();

function womensWare() {
  let womenWare = document
    .querySelector("#ladies")
    .addEventListener("click", () => {
      fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then((res) => res.json())
        .then((completedData) => {
          let data1 = "";
          completedData.map((values) => {
            data1 += `
        <div class="card">
          <h1 class="title">${values.title}</h1>
          <img src="${values.image}" alt="" class="images">
          <p>${values.description}</p>
          <p class="category">${values.category}</p>
          <p class="price">${values.price}</p>
          <button id="cart-btn">Add to cart</button>
          </div>
      </div>
        `;
          });
          document.getElementById("cards").innerHTML = data1;
        });
    });
}
womensWare();

function jewelery() {
  let womenWare = document
    .querySelector("#jewelery")
    .addEventListener("click", () => {
      fetch("https://fakestoreapi.com/products//category/jewelery")
        .then((res) => res.json())
        .then((completedData) => {
          let data1 = "";
          completedData.map((values) => {
            data1 += `
        <div class="card">
          <h1 class="title">${values.title}</h1>
          <img src="${values.image}" alt="" class="images">
          <p>${values.description}</p>
          <p class="category">${values.category}</p>
          <p class="price">${values.price}</p>
          <button id="cart-btn">Add to cart</button>
          </div>
      </div>
        `;
          });
          document.getElementById("cards").innerHTML = data1;
        });
    });
}
jewelery();

function electronics() {
  let electronics = document
    .querySelector("#electronics")
    .addEventListener("click", () => {
      fetch("https://fakestoreapi.com/products/category/electronics")
        .then((res) => res.json())
        .then((completedData) => {
          let data1 = "";
          completedData.map((values) => {
            data1 += `
        <div class="card">
          <h1 class="title">${values.title}</h1>
          <img src="${values.image}" alt="" class="images">
          <p>${values.description}</p>
          <p class="category">${values.category}</p>
          <p class="price">${values.price}</p>
          <button id="cart-btn">Add to cart</button>
          </div>
      </div>
        `;
          });
          document.getElementById("cards").innerHTML = data1;
        });
    });
}
electronics();

function all() {
  let all = document
    .querySelector("#all")
    .addEventListener("click", () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((completedData) => {
          let data1 = "";
          completedData.map((values) => {
            data1 += `
        <div class="card">
          <h1 class="title">${values.title}</h1>
          <img src="${values.image}" alt="" class="images">
          <p>${values.description}</p>
          <p class="category">${values.category}</p>
          <p class="price">${values.price}</p>
          <button id="cart-btn">Add to cart</button>
          </div>
      </div>
        `;
          });
          document.getElementById("cards").innerHTML = data1;
        });
    });
    
}
all();







