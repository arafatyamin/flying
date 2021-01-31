function HandlerProductChange(product, isIncrease) {
     const productCount = getInputValue(product);
     let newProductCount = productCount;
     if (isIncrease == true) {
          newProductCount = productCount + 1;
     }
     if (isIncrease == false && productCount > 0) {
          newProductCount = productCount - 1;
     }
     document.getElementById(product + '-count').value = newProductCount;
     calculateTotal();
}

function calculateTotal() {
     const firstClassCount = getInputValue('firstClass');
     const economyCount = getInputValue('economy');
     const totalPrice = economyCount * 100 + firstClassCount * 150;
     document.getElementById("total-Price").innerText = totalPrice;
     const tex = totalPrice * 0.1;
     document.getElementById('tex-amount').innerText = tex;
     const grandTotal = totalPrice + tex;
     document.getElementById('grand-total').innerText = "$" + grandTotal;
}

function getInputValue(product) {
     const productInput = document.getElementById(product + '-count');
     const productCount = parseInt(productInput.value);
     return productCount;
}
// alert area
const submitBtn = document.getElementById('booking');
submitBtn.addEventListener('click', function () {
     const bookingArea = document.getElementById('booking-area')
     bookingArea.style.display = "none";
     const confirmArea = document.getElementById('confirm-area')
     confirmArea.style.display = "block"
     // clear cache
     document.getElementById('economy-count').value = "0";
     document.getElementById('firstClass-count').value = "0";
})
