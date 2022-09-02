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