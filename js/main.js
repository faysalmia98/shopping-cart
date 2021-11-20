// Phone Increase Clicked Event Handler
document.getElementById("phone-increase").addEventListener("click", function () {
    productChange("phone", true);
    calculateTotal();
});

// Phone Decrease Clicked Event Handler
document.getElementById("phone-decrease").addEventListener("click", function () {
    productChange("phone", false);
    calculateTotal();
});

// Case Increase Clicked Event Handler
document.getElementById("case-increase").addEventListener("click", function () {
    productChange("case", true);
    calculateTotal();
});

// Case Decrease Clicked Event Handler
document.getElementById("case-decrease").addEventListener("click", function () {
    productChange("case", false);
    calculateTotal();
});

function productChange(product, increase) {
    const productInput = document.getElementById(product + "-count");
    const ProductCount = parseInt(productInput.value);
    let ProductNewCount = ProductCount;
    if (increase == true) {
        ProductNewCount = ProductCount + 1;
    }
    if (increase == false && ProductNewCount > 0) {
        ProductNewCount = ProductCount - 1;
    }
    productInput.value = ProductNewCount;
    let totalProductPrice = 0;
    if (product == "phone") {
        totalProductPrice = ProductNewCount * 1219;
    }
    if (product == "case") {
        totalProductPrice = ProductNewCount * 59;
    }
    document.getElementById(product + "-price").innerText = totalProductPrice;
}

function calculateTotal() {
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);

    const subTotalPrice = phoneCount * 1219 + caseCount * 59
    document.getElementById("subtotal-amount").innerText = subTotalPrice;

    const tax = Math.round(subTotalPrice * 0.1);
    document.getElementById("tax-total").innerText = tax;

    const totalPrice = subTotalPrice + tax;
    document.getElementById("total-price").innerText = totalPrice;
}