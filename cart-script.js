function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("item_table").rows[i].cells[2].children[1].children[0].value = 0; document.getElementById("item_table").rows[i].cells[3].children[0].children[0].innerHTML = 0;
    updateTotalPrice();
    updateTotalQty();
    
    document.getElementById("item_table").deleteRow(i); 
}

function addQty(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var currentQty = document.getElementById("item_table").rows[i].cells[2].children[1].children[0].value;
    currentQty = parseInt(currentQty);
    var currentPrice = document.getElementById("item_table").rows[i].cells[3].children[0].children[0].textContent;
    currentPrice = parseInt(currentPrice);
    var singlePrice = currentPrice / currentQty;
    
    if (currentQty <20) {
        currentQty = currentQty + 1;    
    } else {
        currentQty = 20;
    }
    currentPrice = currentQty * singlePrice;
    document.getElementById("item_table").rows[i].cells[2].children[1].children[0].value = currentQty;
    document.getElementById("item_table").rows[i].cells[3].children[0].children[0].innerHTML = currentPrice;
    
    updateTotalPrice();
    updateTotalQty();
}

function dropQty(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var currentQty = document.getElementById("item_table").rows[i].cells[2].children[1].children[0].value;
    currentPrice = parseInt(currentPrice);
    var currentPrice = document.getElementById("item_table").rows[i].cells[3].children[0].children[0].textContent;
    var singlePrice = currentPrice / currentQty;
    currentQty = parseInt(currentQty);
    
    if (currentQty >1) {
        currentQty = currentQty - 1;
    } else {
        currentQty = 1;
    }
    currentPrice = currentQty * singlePrice;
    document.getElementById("item_table").rows[i].cells[2].children[1].children[0].value = currentQty;
    document.getElementById("item_table").rows[i].cells[3].children[0].children[0].innerHTML = currentPrice;
    
    updateTotalPrice();
    updateTotalQty();
}

function updateTotalPrice() {
    var i = document.getElementById("item_table").rows.length;
    var shipping = document.getElementById("shipping-fee").textContent;
    shipping = parseInt(shipping);
    var subtotalPrice = 0;
    var totalPrice = 0;
    var j;
    for (j=0; j<i; j++) {
        subtotalPrice = subtotalPrice + parseInt(document.getElementById("item_table").rows[j].cells[3].children[0].children[0].textContent);
    }
    totalPrice = shipping + subtotalPrice;
    document.getElementById("subtotal-price").innerHTML = subtotalPrice;
    document.getElementById("total-price").innerHTML = totalPrice;
}

function updateTotalQty() {
    var i = document.getElementById("item_table").rows.length;
    var totalQty = 0;
    var j;
    for (j=0; j<i; j++) {
        totalQty = totalQty + parseInt(document.getElementById("item_table").rows[j].cells[2].children[1].children[0].value);
    }
    document.getElementById("cart-quality").innerHTML = totalQty;
}

function insRow(r) {
    var i = document.getElementById("item_table");
    var new_row = i.rows[1].cloneNode(true);
    
    new_row.cells[0].children[0].children[0].src = r.parentNode.children[0].children[0].children[0].src; //thumbnail img link
    
    new_row.cells[0].children[0].href = r.parentNode.children[0].children[0].href; //thumbnail link
    
    new_row.cells[1].children[0].href = r.parentNode.children[0].children[0].href; //item name link
    
    new_row.cells[1].children[0].innerHTML = r.parentNode.children[1].children[0].textContent; //item name
    
    new_row.cells[2].children[1].children[0].value = 1; //item qty
    
    new_row.cells[3].children[0].children[0].innerHTML = r.parentNode.children[1].children[1].children[0].textContent; //item price
    
    i.appendChild(new_row);
    
    updateTotalPrice();
    updateTotalQty();
    
}




