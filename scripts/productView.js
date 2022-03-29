//get left and right buttons
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

const cart = [];

//get preview image
let previewImage = document.getElementById("preview-image");

//function for switch images
function switchImage(direction) {
  //get preview image
  let previewImage = document.getElementById("preview-image");
  let currentImage = previewImage.src;
  let currentImageIndex = parseInt(currentImage.slice(-5, -4));
  if (direction === "left") {
    if (currentImageIndex != 1) {
      previewImage.src =
        currentImage.slice(0, -5) + (currentImageIndex - 1) + ".jpg";
    }
  } else if (direction === "right") {
    if (currentImageIndex != 4) {
      previewImage.src =
        currentImage.slice(0, -5) + (currentImageIndex + 1) + ".jpg";
    }
  }
}

//add eventlisteners to arrows for switching images
leftArrow.addEventListener("click", function () {
  switchImage("left");
});
rightArrow.addEventListener("click", function () {
  switchImage("right");
});

//get all add-to-cart buttons
const addToCartButtons = document.querySelectorAll(".item-card .buttons");

const productView = document.getElementById("product-view");

function viewProduct(item) {
  if (item.className === "item-card t-shirt") {
    sizeSelector = productView.querySelector(".size-selector");
    sizeSelector.className = "size-selector";
  } else {
    sizeSelector = productView.querySelector(".size-selector");
    sizeSelector.className = "size-selector hidden";
  }
  let itemInfo = item.querySelector(".item-info");
  let itemName = itemInfo.querySelector(".product-title").innerHTML;
  let itemPrice = itemInfo.querySelector(".product-price").innerHTML;
  let itemImage = item.querySelector(".product-image");
  let productTitle = productView.querySelector(".selected-product-title");
  let productPrice = productView.querySelector(".selected-product-price");
  let productImage = productView.querySelector(".selected-product-image");
  productTitle.innerHTML = itemName;
  productPrice.innerHTML = itemPrice;
  productImage.src = itemImage.getAttribute("src");
  document.body.className = "body-blur";
  productView.className = "product-view";
  window.scrollTo(0, 0);
}

//add eventlisteners to all add-to-cart buttons in item view
addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let item = this.parentElement.parentElement;
    viewProduct(item);
  });
});

function hideProduct() {
  document.body.className = "";
  document.getElementById("product-view").className = "hidden";
  document.getElementById("order-view").className = "hidden";
}

document.querySelectorAll(".close-button").forEach(function (button) {
  button.addEventListener("click", function () {
    hideProduct();
  });
});

function updateCart() {
  let productName = productView.querySelector(
    ".selected-product-title"
  ).innerHTML;
  let productPrice = productView.querySelector(
    ".selected-product-price"
  ).innerHTML;
  let quantity = document.getElementsByName("quantity")[0].value;
  // let size = productView.querySelector('input[name="size"]:checked').value;
  let cartItem = [];
  if (
    productView.querySelector(".size-selector").className === "size-selector"
  ) {
    let size = productView.querySelector("input[name='size']:checked").value;
    cartItem = [productName + " [" + size + "]", productPrice, quantity];
  } else {
    cartItem = [productName, productPrice, quantity];
  }
  document.getElementsByName("quantity")[0].value = "1";
  cart.push(cartItem);
}

function updateCartInfo() {
  cartItemsList = document.getElementById("cart-items");
  cartItemsList.innerHTML = "";
  let total = 0;
  let totalPerItem = 0;
  for (let i = 0; i < cart.length; i++) {
    let orderItem = document.createElement("li");
    let item = document.createElement("h3");
    item.appendChild(document.createTextNode(cart[i][0]));
    let quantity = document.createElement("h3");
    quantity.appendChild(document.createTextNode("Quantity: " + cart[i][2]));
    totalPerItem = parseFloat(cart[i][1].slice(1)) * parseInt(cart[i][2]);
    let price = document.createElement("h4");
    price.appendChild(
      document.createTextNode(
        "Price: " +
          cart[i][1] +
          " X " +
          cart[i][2] +
          " = $" +
          totalPerItem.toFixed(2)
      )
    );
    total += totalPerItem;
    orderItem.appendChild(item);
    orderItem.appendChild(quantity);
    orderItem.appendChild(price);
    cartItemsList.appendChild(orderItem);
  }
  document.getElementById("price").innerHTML = total.toFixed(2);
}

function viewCart() {
  document.getElementById("product-view").className = "hidden";
  document.getElementById("order-view").className = "product-view";
  document.body.className = "body-blur";
  window.scrollTo(0, 0);
  placeOrderButton = document.getElementById("place-order-button");
  if (cart.length == 0) {
    alert("Your cart is still empty!");
    placeOrderButton.disabled = true;
      placeOrderButton.style.cursor = "not-allowed";
  } else {
    placeOrderButton.disabled = false;
      placeOrderButton.style.cursor = "pointer";
      placeOrderButton.addEventListener("click", placeOrder);
    }
}

document.getElementById("cart-button").addEventListener("click", viewCart);
document.getElementById("btn-add-to-cart").addEventListener("click", addToCart);
function addToCart() {
  updateCart();
  updateCartInfo();
  alert("Item added to cart!");
  hideProduct();
}

function buyNow() {
  updateCart();
  updateCartInfo();
  viewCart();
}

document.getElementById("buy-now-button").addEventListener("click", buyNow);
