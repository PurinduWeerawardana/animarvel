//productview validation
document.getElementById("plus").addEventListener("click", plus);
document.getElementById("minus").addEventListener("click", minus);

function plus() {
    currentValue = parseInt(document.getElementById("quantity").value);
    if (currentValue < 9) {
        document.getElementById("quantity").value = (currentValue += 1);
    } else {
        alert("Maximum quantity is 9 per order.");
    }
}

function minus() {
    currentValue = parseInt(document.getElementById("quantity").value);
    if (currentValue > 1) {
        document.getElementById("quantity").value = (currentValue -= 1);
    }
}

//order validation
function placeOrder() {
    if (document.getElementById("first-name").value == "") {
        alert("Please enter your first name.");
    } else if (document.getElementById("last-name").value == "") {
        alert("Please enter your last name.");
    } else if (document.getElementById("email").value == "") {
        alert("Please enter your email address.");
    } else if (document.getElementById("address").value == "") {
        alert("Please enter your address.");
    } else if (document.getElementById("city").value == "") {
        alert("Please enter your city.");
    } else if (document.getElementById("zip").value == "") {
        alert("Please enter your zip code.");
    } else {
        alert("Thank you for your order!");
    }
}