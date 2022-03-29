document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("fName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("visiting-date").value = "";
  document.getElementById("ticket-type").value = "1";
});

document.getElementById("submit-btn").addEventListener("click", function () {
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var visitingDate = document.getElementById("visiting-date").value;
  var ticketType = document.getElementById("ticket-type").value;
  var ticketCount = document.getElementById("ticket-count").value;

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
