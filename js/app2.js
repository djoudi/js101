let x = 15  // global var 


function ecoin(){
    let  x = 26   //local var
    console.log(x);
}

if(true){
    let x = 25
    console.log(x);  //15
}

let y = 2
{
    console.log(y); 
}


//ecoin()   //26
console.log(x);  //15