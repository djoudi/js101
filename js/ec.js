let btns = document.querySelectorAll('button')
let cart = document.querySelector('.cart')

let cpt = (localStorage.getItem("cp"))?localStorage.getItem("cp"):0

// if(localStorage.getItem("cp"))  cpt = localStorage.getItem("cp") 
// else cpt =0 '/ec.html'
let path = location.pathname
path = path.slice(1, path.length);
console.log(path);
if(path == 'ec.html'){
cart.innerText =  localStorage.getItem("cp")
btns[0].onclick = function () {
    let namep = this.getAttribute('data-product')
   cart.innerText = ++cpt
   localStorage.setItem("cp",cpt)
   localStorage.setItem("nom",namep)

}

btns[1].onclick = function () {
    if(cpt>0)
    cart.innerText = --cpt
    localStorage.setItem("cp",cpt)
    let namep = this.getAttribute('data-product')
    localStorage.setItem("nom",namep)
}

    cart.onclick = function () {
        location.href = 'cart.html'
       
    }
}
else{
    console.log(path);
    let cart2 = document.querySelector('.cart2')
    cart2.innerText = localStorage.getItem('cp')  + '----'+localStorage.getItem('nom')
    console.log(cart2);
}
