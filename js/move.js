let btn = document.querySelector('button')
let box = document.querySelector('.box')

btn.onclick = function () {
    let cpt = 25
    let stm = setInterval(function(){
        if(cpt >= 200)  clearInterval(stm)
        box.style.transform = 'translateX('+cpt+'px)'
        box.style.transition = '3s'
        cpt = cpt + 25
    },200)

}


localStorage.setItem('ecoin',45)

let num = localStorage.getItem('ecoin')

box.innerText = num
