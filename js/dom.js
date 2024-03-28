let x = document.getElementById('myh')


console.log(x);

//x.innerText = "HTML 5"
//x.innerHTML = "<strong>HTML 5</strong>"


console.log(x.innerText );
// create element
let y = document.createElement('h5')
y.innerText  = "This is New element"

let ct = document.getElementById("content")

ct.appendChild(y)

let para = document.getElementById('mypara')

console.log(para.parentNode);


// attribute 
let myl = document.getElementById('mylink')
//getattribute
let myattr  = myl.getAttribute('href')
console.log(myattr);
//setAttribut

myl.setAttribute('href','https://yahoo.com')

 myattr  = myl.getAttribute('href')
console.log(myattr);

myl.setAttribute("ecoin","hiiii")

// removeattribute

myl.removeAttribute('ecoin')

let list = document.getElementsByClassName('cls')
//console.log(list[2]);

for (let key in list) {
        console.log(list[key]);
}

let sl = document.querySelector('.cls')

sl.onclick = function(){
    // this.style.fontSize =  '48px'
    // this.style.color =  'red'
    // this.style.border =  '2px solid green
    let cpt = sl.innerText.length
    let child = document.createElement('strong')
    child.innerText = cpt
    child.style.color = "red"
    document.querySelector("#content").innerText = ""
  document.querySelector("#content").appendChild(child)
    console.log(cpt);
}




