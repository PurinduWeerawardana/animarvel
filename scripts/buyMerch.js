//get all category-buttons into an array
const categoryButtons = document.querySelectorAll(".category-buttons");

//get all items into an array
const allItems = document.querySelectorAll(".item-card");

//highlight active category-button by changing css class
function activeButton(id) {
  categoryButtons.forEach(function (button) {
    if (button.id == id) {
      button.className += " category-button-selected";
    } else {
      button.className = "category-buttons";
    }
  });
}

//load and display all items
function displayAllItems() {
  activeButton("all");
  allItems.forEach(function (item) {
    item.style.display = "inline-block";
  });
}

//display items by category
function displayCategory(categoryClass) {
  activeButton(categoryClass);
  allItems.forEach(function (item) {
    if (item.className !== "item-card " + categoryClass.slice(0, -1)) {
      item.style.display = "none";
    } else {
      item.style.display = "inline-block";
    }
  });
}

//add eventlisteners to all category-buttons
categoryButtons.forEach(function (button) {
  if (button.id !== "all") {
    button.addEventListener("click", function () {
      displayCategory(button.id);
    });
  } else {
    button.addEventListener("click", function () {
      displayAllItems();
    });
  }
});

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
}

document.getElementById("close-button").addEventListener("click", function () {
  document.body.className = "";
  document.getElementById("product-view").className = "hidden";
});