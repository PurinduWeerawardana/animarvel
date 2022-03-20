//get left and right buttons
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

//get preview image
let previewImage = document.getElementById("preview-image");

//function for switch images
function switchImage(direction) {
  let currentImage = previewImage.src;
  let currentImageIndex = parseInt(currentImage.slice(-5, -4));
  if (direction === "left") {
    if (currentImageIndex != 1) {
      previewImage.src =
        currentImage.slice(0, -5) + (currentImageIndex - 1) + ".jpg";
      console.log(previewImage.src);
    }
  } else if (direction === "right") {
    if (currentImageIndex != 4) {
      previewImage.src =
        currentImage.slice(0, -5) + (currentImageIndex + 1) + ".jpg";
      console.log(previewImage.src);
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
const addToCartButtons = document.querySelectorAll(".item-card .add-to-cart");
console.log(addToCartButtons);

const productView = document.getElementById("product-view");

function viewProduct(item) {
  let itemInfo = item.querySelector(".item-info");
  let itemName = itemInfo.querySelector(".product-title").innerHTML;
  let itemPrice = itemInfo.querySelector(".product-price").innerHTML;
  let itemImage = item.querySelector(".product-image");
  console.log(itemImage.getAttribute("src"));
  console.log(itemName);
  console.log(itemPrice);
  console.log(productView);
  let productTitle = productView.querySelector(".product-title");
  let productPrice = productView.querySelector(".product-price");
  let productImage = productView.querySelector(".product-image");
  console.log(productImage);
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

function addToCart() {
  alert("Item added to cart!");
  hideProduct();
}

function buyNow() {
  document.getElementById("product-view").className = "hidden";
  document.getElementById("order-view").className = "product-view";
}
