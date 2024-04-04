let price = document.querySelector('.price')
let discount = document.querySelector('.discount')
let result = document.querySelector('.result')

discount.onkeyup = function () {
    
   result.innerText = Number(price.value)  - (Number(price.value)  * Number(discount.value)/100)
}