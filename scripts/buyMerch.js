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

//get url parameteres from main page
let queryString = window.location.search;
urlParams = new URLSearchParams(queryString);

if (urlParams.has("tShirt") === true) {
  document.getElementById("t-shirts").click();
} else if (urlParams.has("mug") === true) {
  document.getElementById("mugs").click();
} else if (urlParams.has("statue") === true) {
  document.getElementById("statues").click();
}
