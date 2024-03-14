
alert("0. Iphone13   95000\n 1 Sumsung S3 650000\n  2.Oppo s3 25000  \n 4. No thing")


var mobile = [
    {nom:"Iphone13",price:95000},
    {nom:"Sumsung S3",price:650000},
    {nom:"Oppo s3 ",price:25000}
]

var code=[] ,i = 0,qty = []
do{
 v  = parseInt(prompt("choice your phone "))
  if(v==4) break
  code[i] = v 
  qty[i] =  parseInt(prompt("phone Qty "))

  i++
}while(1)

console.log(code,qty);
var sum = 0
for(var i = 0;i< code.length;i++){
sum = sum + (mobile[code[i]].price * qty[i])
//console.log(mobile[code[i]].price);
}


console.log(sum);