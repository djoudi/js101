const USER = "Admin"
const PASS = "123"

let user = document.querySelector("input[type=text]")
let pass = document.querySelector("input[type=password]")
let btn = document.querySelector("button")
let mydiv = document.querySelector(".msg")

btn.onclick = function(event){
    event.preventDefault()
    // if(user.value.trim().length <= 6 ){
    //   let stm = setTimeout(function () {
    //     alert(46465)
    //   },5000)  
    // }
    if(user.value.trim()== USER && pass.value.trim() == PASS){
        user.style.border = "2px solid green"
        pass.style.border = "2px solid green"
        mydiv.style.display = 'block'
        
        // let stm = setTimeout(function () {
        //       location.href = "https://google.com" 
        //        },5000)

    }else if(user.value.trim()!= USER){
        if(pass.value.trim() != PASS){
            user.style.border = "2px solid red"
        pass.style.border = "2px solid red" 
        }else {
            user.style.border = "2px solid red"
            pass.style.border = "2px solid green"
        }
    }else{
        user.style.border = "2px solid green"
        pass.style.border = "2px solid red"  
    }

   
}
