//productview validation
document.getElementById("plus").addEventListener("click", plus);
document.getElementById("minus").addEventListener("click", minus);

function plus() {
  currentValue = parseInt(document.getElementById("quantity").value);
  if (currentValue < 9) {
    document.getElementById("quantity").value = currentValue += 1;
  } else {
    alert("Maximum quantity is 9 per order.");
  }
}

function minus() {
  currentValue = parseInt(document.getElementById("quantity").value);
  if (currentValue > 1) {
    document.getElementById("quantity").value = currentValue -= 1;
  }
}

//order validation

function placeOrder() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let zip = document.getElementById("zip").value;
  let paymentMethod = document.getElementById("payment-method").value;
  if (firstName == "") {
    alert("Please enter your first name.");
  } else if (lastName == "") {
    alert("Please enter your last name.");
  } else if (email.value == "") {
    alert("Please enter your email address.");
  } else if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
  } else if (address == "") {
    alert("Please enter your address.");
  } else if (city == "") {
    alert("Please enter your city.");
  } else if (zip == "") {
    alert("Please enter your zip code.");
  } else {
    let cartList = document.getElementById("cart");
    document.getElementById("order-view").classList.add("hidden");
    document.getElementById("invoice").classList.remove("hidden");
    createInvoice(
      firstName,
      lastName,
      email,
      address,
      city,
      zip,
      paymentMethod,
      cartList
    );
  }
}

function createInvoice(
  firstName,
  lastName,
  email,
  address,
  city,
  zip,
  paymentMethod,
  cartList
) {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;
  document.getElementById("invoice-date").innerHTML += dateTime;
  let invoiceId = Math.floor(Math.random() * 1000 + 1);
  document.getElementById("invoice-id").innerHTML += invoiceId;
  document.getElementById("full-name").innerHTML += firstName + " " + lastName;
  document.getElementById("email-order").innerHTML += email;
  document.getElementById("address-order").innerHTML += address;
  document.getElementById("city-order").innerHTML += city;
  document.getElementById("zip-order").innerHTML += zip;
  document.getElementById("payment-method-order").innerHTML += paymentMethod;
  document.getElementById("product-details").innerHTML = cartList.innerHTML;
}

function printInvoice() {
  let divContents = document.getElementById("invoice").innerHTML;
  let print = window.open("", "", "fullscreen='yes'");
  print.document.write("<html>");
  print.document.write(
    '<head><link rel="stylesheet" href="./css/orderView.css"><link rel="stylesheet" href="./css/invoice.css"></head>'
  );
  print.document.write('<body> <div id="invoice">');
  print.document.write(divContents);
  print.document.write("</div></body></html>");
  print.document.close();
  print.print();
}

function closeInvoice() {
  document.getElementById("invoice").classList.add("hidden");
  hideProduct();
  location.reload();
}
