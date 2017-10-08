var currentQty = document.getElementById("input_qty").value;
currentQty = parseInt(currentQty);
var singlePrice = document.getElementById("current-price").textContent;
singlePrice = parseInt(singlePrice);
var currentPrice;

function addQty() {
    if (currentQty < 20) {
        currentQty = currentQty + 1;
        currentPrice = currentQty * singlePrice;
    } else {
        currentQty = 20;
        currentPrice = currentQty * singlePrice;
    }
    document.getElementById("input_qty").value = currentQty;
    document.getElementById("current-price").innerHTML = currentPrice;
}

function dropQty() {
    if (currentQty > 1) {
        currentQty = currentQty - 1;
        currentPrice = singlePrice * currentQty;
    } else {
        currentQty = 1;
        currentPrice = singlePrice * currentQty;
    }
    document.getElementById("input_qty").value = currentQty;
    document.getElementById("current-price").innerHTML = currentPrice;
}

function addCart() {
    var cartQty = document.getElementById("cart-quality").innerHTML;
    cartQty = parseInt(cartQty);
    if (cartQty <= 99) {
        cartQty = cartQty + currentQty;
    } else {
        cartQty = 99;
    }
    document.getElementById("cart-quality").innerHTML = cartQty;
    currentQty = 1;
    currentPrice = singlePrice * currentQty;
    document.getElementById("input_qty").value = currentQty;
    document.getElementById("current-price").innerHTML = currentPrice;
}

function zoomImg() {
    document.getElementById("product-detail-photo").style.webkitTransform = "scale(1.1)";
    document.getElementById("product-detail-photo").style.transform = "scale(1.1)";
}

function resetImg() {
    document.getElementById("product-detail-photo").style.webkitTransform = "scale(1)";
    document.getElementById("product-detail-photo").style.transform = "scale(1)";
}