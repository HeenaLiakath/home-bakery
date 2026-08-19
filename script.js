function calculateTotal() {

    let cakeQuantity = Number(document.getElementById("cake").value);
    let cookieQuantity = Number(document.getElementById("cookies").value);
    let brownieQuantity = Number(document.getElementById("brownies").value);
    let chocolateQuantity = Number(document.getElementById("chocolates").value);

    let cakeTotal = cakeQuantity * 35;
    let cookieTotal = cookieQuantity * 12;
    let brownieTotal = brownieQuantity * 15;
    let chocolateTotal = chocolateQuantity * 10;

    let total = cakeTotal + cookieTotal + brownieTotal + chocolateTotal;

    document.getElementById("total").textContent = "Estimated total: €" + total;
}
