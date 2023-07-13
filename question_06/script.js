const apiUrl = "https://fakestoreapi.com/products";
const productsContainer = document.getElementById("products");
const cart = document.getElementById("cart");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
let cartItems = [];

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

      // Create the cart button
      const cartButton = document.createElement("button");
      cartButton.textContent = "Add to Cart";
      cartButton.classList.add("cartButton");
      cartButton.addEventListener("click", () => {
        addToCart(product);
      });
      card.appendChild(cartButton);

      // Add the product card to the container
      productsContainer.appendChild(card);

        // Add click event listener to product card
        card.addEventListener("click", () => {
                // Store the selected product data in local storage
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                // Redirect to single product page
                window.location.href = "single-product.html";
              });
    });
  })
  .catch(error => {
    console.log("Error fetching products:", error);
  });

function addToCart(product) {
  const existingCartItem = cartItems.find(item => item.id === product.id);

  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }

  renderCart();
}

function removeCartItem(itemId) {
  cartItems = cartItems.filter(item => item.id !== itemId);

  renderCart();
}

function renderCart() {
  cartItemsContainer.innerHTML = "";

  cartItems.forEach(item => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");

    const imageElement = document.createElement("img");
    imageElement.src = item.image;

    const nameElement = document.createElement("div");
    nameElement.classList.add("cart-item-name");
    nameElement.textContent = item.title;

    const quantityElement = document.createElement("div");
    quantityElement.textContent = `Quantity: ${item.quantity}`;

    const removeButton = document.createElement("span");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeCartItem(item.id);
    });

    cartItemElement.appendChild(imageElement);
    cartItemElement.appendChild(nameElement);
    cartItemElement.appendChild(quantityElement);
    cartItemElement.appendChild(removeButton);

    cartItemsContainer.appendChild(cartItemElement);
  });

  if (cartItems.length > 0) {
    cartTotal.textContent = `Total: $${calculateCartTotal()}`;
    cart.style.display = "block";
  } else {
    cartTotal.textContent = "";
    cart.style.display = "none";
  }
}

function calculateCartTotal() {
  return cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}