//memory section calculation

let extraMemoryCost = document.getElementById('extraMemoryCost');
let extraMemoryCostValue = parseInt(extraMemoryCost.innerHTML);


let memory8gb = document.getElementById('8gbMemory');
memory8gb.addEventListener('click', function (e) {
    extraMemoryCost.innerHTML = extraMemoryCostValue + 0;

    setTotalPrice(extraMemoryCost, extraStorageCost, deliveryCharge)
    setTotal(extraMemoryCost, extraStorageCost, deliveryCharge)
})

let memory16gb = document.getElementById('16gbMemory');
memory16gb.addEventListener('click', function (e) {
    extraMemoryCost.innerHTML = extraMemoryCostValue + 180;

    setTotalPrice(extraMemoryCost, extraStorageCost, deliveryCharge)
    setTotal(extraMemoryCost, extraStorageCost, deliveryCharge)
})



//storage section calculation

let extraStorageCost = document.getElementById('extraStorageCost');
let extraStorageCostValue = parseInt(extraStorageCost.innerHTML);

let storage256gb = document.getElementById('256gbStorage');
storage256gb.addEventListener('click', function (e) {
    extraStorageCost.innerHTML = extraStorageCostValue + 0;

    setTotalPrice(extraMemoryCost, extraStorageCost, deliveryCharge)
    setTotal(extraMemoryCost, extraStorageCost, deliveryCharge)
})

let storage512gb = document.getElementById('512gbStorage');
storage512gb.addEventListener('click', function (e) {
    extraStorageCost.innerHTML = extraStorageCostValue + 100;

    setTotalPrice(extraMemoryCost, extraStorageCost, deliveryCharge)
    setTotal(extraMemoryCost, extraStorageCost, deliveryCharge)
})

let storage1tb = document.getElementById('1tbStorage');
storage1tb.addEventListener('click', function (e) {
    extraStorageCost.innerHTML = extraStorageCostValue + 180;

    setTotalPrice(extraMemoryCost, extraStorageCost, deliveryCharge)
    setTotal(extraMemoryCost, extraStorageCost, deliveryCharge)
})




//delivery section calculation

let deliveryCharge = document.getElementById('deliveryCharge');
let deliveryChargeValue = parseInt(deliveryCharge.innerHTML);

let freeDelivery = document.getElementById('freeDelivery');
freeDelivery.addEventListener('click', function (e) {
    deliveryCharge.innerHTML = deliveryChargeValue + 0;

    setTotalPrice(extraMemoryCost, extraStorageCost, deliveryCharge)
    setTotal(extraMemoryCost, extraStorageCost, deliveryCharge)
})

let PaidDelivery = document.getElementById('PaidDelivery');
PaidDelivery.addEventListener('click', function (e) {
    deliveryCharge.innerHTML = deliveryChargeValue + 20;

    setTotalPrice(extraMemoryCost, extraStorageCost, deliveryCharge)
    setTotal(extraMemoryCost, extraStorageCost, deliveryCharge)
})


// total price section
let totalPrice = document.getElementById('totalPrice');
let totalPriceValue = parseInt(totalPrice.innerHTML);
let totalPriceValueSum = 0;

let setTotalPrice = function (cost, strorage, delivery) {

    totalPriceValueSum = totalPriceValue + parseInt(cost.innerHTML) + parseInt(strorage.innerHTML) + parseInt(delivery.innerHTML);
    totalPrice.innerHTML = totalPriceValueSum

}

// final price section
let total = document.getElementById('total');
let totalValue = parseInt(total.innerHTML);
let totalValueSum = 0;

let setTotal = function (cost, strorage, delivery) {

    totalValueSum = totalValue + parseInt(cost.innerHTML) + parseInt(strorage.innerHTML) + parseInt(delivery.innerHTML);
    total.innerHTML = totalValueSum;

}


//promo code section
let applyBtn = document.getElementById('applyBtn')
applyBtn.addEventListener('click', function () {

    let promoCode = document.getElementById('promoCode');
    let promoCodeValue = promoCode.value;
    if (promoCodeValue === 'stevekaku') {
        let totalValueSumChange = parseInt(total.innerHTML)
        let discountPrice = ((totalValueSumChange / 100) * 80).toFixed(2);
        total.innerHTML = discountPrice;
        promoCode.value = '';
        document.getElementById("promoCode").disabled = true;
        document.getElementById("promoCode").placeholder = 'coupon code can be used only once';

    }

    else{
        promoCode.value = '';
        document.getElementById("promoCode").placeholder = 'Enter a valid coupon code';
    }
    

})