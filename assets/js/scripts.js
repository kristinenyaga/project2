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

