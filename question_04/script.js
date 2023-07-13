const apiUrl = "https://fakestoreapi.com/products";
const productsContainer = document.getElementById("products");

// Fetch products from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Iterate over each product
    data.forEach(product => {
      // Create a product card element
      const card = document.createElement("div");
      card.classList.add("product-card");

      // Create the product image
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.title;
      image.classList.add("product-image");
      card.appendChild(image);

      // Create the product title
      const title = document.createElement("div");
      title.textContent = product.title;
      title.classList.add("product-title");
      card.appendChild(title);

      // Create the product price
      const price = document.createElement("div");
      price.textContent = `$${product.price}`;
      price.classList.add("product-price");
      card.appendChild(price);

      // Create the cart btn
      const cart = document.createElement("button");
      cart.innerText ='hello';
      cart.classList.add('cartButton');
      card.appendChild(cart);
      // cart.createElement('BUTTON');
      // cart.createTextNode('hello');
      // card.appendChild(cart);


      // Add the product card to the container
      productsContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.log("Error fetching products:", error);
  });