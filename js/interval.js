let up = document.querySelector("#up")
let down = document.querySelector("#down")
let box = document.querySelector(".box")
let cpt = 0
up.onclick = function(){
    let handler =  setInterval(function () {
        if(cpt==10){
            clearInterval(handler)
        }
        box.innerText = cpt
        cpt++
    },1000)
}


