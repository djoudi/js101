let tw = document.querySelector("#tw")
let sp = document.querySelector("#cmpt")
let btn = document.querySelector("button")

tw.onkeyup = function(){
    let v = tw.value.trim()
   sp.innerText =100 - v.length

   if(100 - v.length<=20 && 100 - v.length>10){
    sp.style.color = "yellow"
   }else if(100 - v.length <=10  && 100 - v.length>0){
    sp.style.color = "red"
    btn.removeAttribute("disabled")
    btn.removeAttribute("class")
   }else if(100 - v.length <0){
    sp.style.color = "#9b59b6"
    btn.setAttribute("disabled","disabled")
    btn.setAttribute('class','not')
   // tw.setAttribute("readonly","readonly")
   }
    else{
    sp.style.color = "#000"
   }

   //else  #000
}