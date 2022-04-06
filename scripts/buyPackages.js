document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("fName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("visiting-date").value = "";
  document.getElementById("packages-type").value = "1";
});

document.getElementById("submit-btn").addEventListener("click", function () {
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let visitingDate = document.getElementById("visiting-date").value;
  let ticketType = document.getElementById("packages-type").value;
  let ticketCount = document.getElementById("packages-count").value;

  if (
    fName == "" ||
    lName == "" ||
    email == "" ||
    phone == "" ||
    visitingDate == "" ||
    ticketType == "1" ||
    ticketCount == ""
  ) {
    alert("Please fill out all fields.");
  } else if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email.");
  } else {
    alert("Thank you for your purchase. We will contact you shortly.");
    history.back();
  }
});
