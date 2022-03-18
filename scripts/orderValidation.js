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