const PRICE_HOTDOG = 4.80;
const PRICE_FRIES = 3.95;
const PRICE_SODA = 1.99;
const TAX_RATE = 0.0625;
const DISCOUNT_THRESHOLD = 25;
const DISCOUNT_RATE = 0.10;


function showMoney(amount) {
    return Math.round(amount * 100) / 100;
}

function calculateOrder() {

    let numDogs = parseFloat(document.getElementById("numDogs").value) || 0;
    let numFries = parseFloat(document.getElementById("numFries").value) || 0;
    let numSoda = parseFloat(document.getElementById("numSoda").value) || 0;

    let totalHotdogs = numDogs * PRICE_HOTDOG;
    let totalFries = numFries * PRICE_FRIES;
    let totalSoda = numSoda * PRICE_SODA;

    let subtotal = totalHotdogs + totalFries + totalSoda;

    let discount = 0;
    if (subtotal >= DISCOUNT_THRESHOLD) {
        discount = subtotal * DISCOUNT_RATE;
    }
    let subtotalAfterDiscount = subtotal - discount;

    let taxAmount = subtotalAfterDiscount * TAX_RATE;

    let finalTotal = subtotalAfterDiscount + taxAmount;

    document.getElementById("orderSummary").innerHTML = `
        <h2>Your Order Summary</h2>
        <p>Hotdogs: ${numDogs} x $${showMoney(PRICE_HOTDOG)} = $${showMoney(totalHotdogs)}</p>
        <p>Fries: ${numFries} x $${showMoney(PRICE_FRIES)} = $${showMoney(totalFries)}</p>
        <p>Sodas: ${numSoda} x $${showMoney(PRICE_SODA)} = $${showMoney(totalSoda)}</p>
        <p><strong>Subtotal:</strong> $${showMoney(subtotal)}</p>
        <p><strong>Discount:</strong> $${showMoney(discount)}</p>
        <p><strong>Subtotal After Discount:</strong> $${showMoney(subtotalAfterDiscount)}</p>
        <p><strong> MA Tax (6.25%):</strong> $${showMoney(taxAmount)}</p>
        <p><strong>Total:</strong> $${showMoney(finalTotal)}</p>`;
}
