// update the amount of extra configaration area
function extraCostAttach(id, cost){
    const element = document.getElementById(id)
    element.innerText = cost
}

// calculating and updating total amount.
function calculateTotal(){
    const total = document.getElementById('total-price')
    const totalMega = document.getElementById('total-mega-price')
    const besePrice = parseInt(document.getElementById('bese-price').innerText)
    const extraMamoryCost = parseInt(document.getElementById('extra-memory-cost').innerText)
    const extraStorageCost = parseInt(document.getElementById('extra-storage-cost').innerText)
    const deliveryCharge = parseInt(document.getElementById('delivery-charge').innerText)
    const sum = besePrice + extraMamoryCost + extraStorageCost + deliveryCharge
    total.innerText = sum
    totalMega.innerText = sum
}


document.getElementById('mac-configuration').addEventListener('click', function(event){
    let element = event.target.tagName
    if(element === "BUTTON"){
        let id = event.target.id
        switch (id){
        
        // 8gb Memory button
            case 'memory-8gb':
                extraCostAttach('extra-memory-cost', 0);
                calculateTotal();
                break;
        // 16gb Memory button
            case 'memory-16gb':
                extraCostAttach('extra-memory-cost', 180);
                calculateTotal();
                break;
        
        // 256gb storage button
            case 'storage-256gb':
                extraCostAttach('extra-storage-cost', 0);
                calculateTotal();
                break;

        // 512gb storage button
            case 'storage-512gb':
                extraCostAttach('extra-storage-cost', 100);
                calculateTotal();
                break;

        // 1tb storage button
            case 'storage-1tb':
                extraCostAttach('extra-storage-cost', 180);
                calculateTotal();
                break;

        // delivary without charge
            case 'free-delivery-btn':
                extraCostAttach('delivery-charge', 0);
                calculateTotal();
                break;
        
        // delivary with charge  
            case 'delivery-charge-btn':
                extraCostAttach('delivery-charge', 20);
                calculateTotal();
                break;
        
        // promocode implementation here
            case 'promo-code-btn':
                const promoCodeField = document.getElementById('promo-code-input')
                const promoCode = promoCodeField.value;

                // promoCode validation check
                if (promoCode == '') {
                    alert ('Please! enter your promocode');
                }
                else if (promoCode != 'stevekaku') {
                    alert ('Please! Enter the correct promocode');
                }
                else if(promoCode === 'stevekaku'){
                    const totalMega = document.getElementById('total-mega-price');
                    const totalMegaValue = parseInt(totalMega.innerText);
                    const discount = totalMegaValue/100*20;
                    totalMega.innerText = totalMegaValue - discount;

                    // clear data
                    promoCodeField.value = '';

                    // input field and button disabled after using promocode 
                    const button = document.querySelector('.applyButton');
                    button.setAttribute('disabled', true);
                    promoCodeField.setAttribute('disabled', true);
                }
                break;
        }
    }
})

