function displayAllItems() {
  document.querySelectorAll(".item-card").forEach(function (item) {
    item.style.display = "inline-block";
  });
}

function displayTShirts() {
  displayAllItems();
  document.querySelectorAll(".item-card").forEach(function (item) {
    if (item.className !== "item-card t-shirt") {
      item.style.display = "none";
    }
  });
}

function displayStatues() {
  displayAllItems();
  document.querySelectorAll(".item-card").forEach(function (item) {
    if (item.className !== "item-card statue") {
      item.style.display = "none";
    }
  });
}

function displayMugs() {
  displayAllItems();
  document.querySelectorAll(".item-card").forEach(function (item) {
    if (item.className !== "item-card mug") {
      item.style.display = "none";
    }
  });
}

function displayBackCovers() {
  displayAllItems();
  document.querySelectorAll(".item-card").forEach(function (item) {
    if (item.className !== "item-card back-cover") {
      item.style.display = "none";
    }
  });
}

function displayOthers() {
  displayAllItems();
  document.querySelectorAll(".item-card").forEach(function (item) {
    if (item.className !== "item-card other") {
      item.style.display = "none";
    }
  });
}
