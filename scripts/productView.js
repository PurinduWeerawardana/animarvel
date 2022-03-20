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

function viewProduct() {
  document.body.className = "body-blur";
  document.getElementById("product-view").className = "product-view";
  window.scrollTo(0, 0);
}

//add eventlisteners to all add-to-cart buttons in item view
addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    viewProduct();
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