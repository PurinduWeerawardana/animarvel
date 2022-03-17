function displayAllItems() {
  activeButton("all");
  document.querySelectorAll(".item-card").forEach(function (item) {
    item.style.display = "inline-block";
  });
}

function displayCategory(categoryClass) {
  displayAllItems();
  activeButton(categoryClass);
  document.querySelectorAll(".item-card").forEach(function (item) {
    if (item.className !== "item-card " + categoryClass.slice(0, -1)) {
      item.style.display = "none";
    }
  });
}

function activeButton(id) {
  document.querySelectorAll(".category-buttons").forEach(function (button) {
    if (button.id == id) {
      button.className += " category-button-selected";
    } else {
      button.className = "category-buttons";
    }
  });
}

document.querySelectorAll(".category-buttons").forEach(function (button) {
  console.log(button);
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

// document.getElementById("all").addEventListener("click", function () {
//   displayAllItems();
// });
// document.getElementById("mugs").addEventListener("click", function () {
//   displayCategory("mug");
// });
// document.getElementById("t-shirts").addEventListener("click", function () {
//   displayCategory("t-shirt");
// });
// document.getElementById("statues").addEventListener("click", function () {
//   displayCategory("statue");
// });
// document.getElementById("mugs").addEventListener("click", function () {
//   displayCategory("mug");
// });
// document.getElementById("back-covers").addEventListener("click", function () {
//   displayCategory("back-cover");
// });
// document.getElementById("others").addEventListener("click", function () {
//   displayCategory("other");
// });
