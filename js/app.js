// var  const operation comparition condition boucle function

var num1 = 24 //number
var num2 = 36  // numbrt

var num1 =24,num2 = 36
var num3
num3 = 78

var num4 
num4  = 29.4  // number   // float double 

var str  = "Ecoin" // String
var ch = 'A'   // String  Char
var isAdmin = true  // Boolean
var x 
//undefined
//console.log(typeof num4)  // api 

//document.write(str)
//alert(str)

var x = 28
x = 16

const PI = 3.14

//console.log(PI);

// var x=2 , 
//     y=14
//     ,z
//    // console.log(x);
//   x =  x + y   // x+=y
//   x =  x - y   // x-=y
//   x =  x * y   // x*=y
//   x =  x / y   // x/=y

//   var i  = 9

//   i = i + 1  // i++
//   i = i - 1  // i--

   // console.log(x);


    // x = '14'
    // y = 14
    // isAdmin = false
   // < <= > >= == ===
   // console.log(!isAdmin);

   // console.log(i**2);
  //var c = '25' + '36'
//console.log(c);
    // var c = prompt('please enter your num C')
    // c = parseInt(c)
    // console.log(typeof c);


// var level = 5
// // var base = 10
// level = level+ 



// nextLevel = level-- * base 
//console.log(level);

//condition type relation comp
// AND OR 
// x = 30
// if(x > 13)
//     console.log("Welcom > 13");
//fdsfdfds
//
// else if(x < 13)
//     console.log("Welcom < 13");
//
// else{
//     console.log("Not Work");
// }


// array object


// ((x>13) && (x > 16) && (x >= 25))

// true && false ===> false 
// false && true ===> false 
// false && false ===> false 
// true && true ===> true 

// true || false ===> true 
// false || true ===> true 
// false || false ===> false 
// true || true ===> true 


 //num 1 num2 op + - */

//  var num1 = parseInt(prompt("please enter Num1"))
//  var num2 = parseInt(prompt("please enter Num2"))

//  var op = prompt("Your op")
// if(typeof num1 == "Number" && typeof num2 == "Number" ){
//     if(op=="+") console.log(num1 + num2);
//     else if(op == "-") console.log(num1 - num2);
//     else if(op == "*") console.log(num1 * num2);
//     else if(op == "/"){
//         if(num2 == 0) console.log("Div By Zero");
//         else console.log(num1 / num2);
//     }
//     else console.log('No operation');

// }else{
//     console.log("please enter Number")
// }

// var num3 = parseInt(prompt("please enter your Num"))
// if(num3%2 ==0) console.log("Pair");
// else  console.log("Impair");

// var tab1 = Array(45,"Ecoin",36,true)
// var tab2 = [25,36,9,7]


// var tab3 = [15,[12,5],[[150,200],36]]

// console.log(tab1[3]);
// console.log(tab3[2][0][1]);
// console.log(typeof tab1);
//console.log(typeof null);


// var obj = Object()
// var obj2 = {
//     "key":"val",
//     "key2":"val2"
// }

// obj.user = "Admin"
// obj.password = 123456

// console.log(obj);
// var Student = {
//     nom:"sali",
//     prenom: "Sara",
//     age:25,
//     tel:["0665252525","0755656565"],
//     isStudent:true,
//     address: {alger:"25 rue ali meddouch H.dey",annaba:"14 rue amir annaba"}
// }

// var myTab = [25,36,45,12,2,9,8] 
// var k =m=i= 0
// var t = []
// var cpt = parseInt(prompt("Enter Compt"))
// do{
   
//   t[i] = parseInt(prompt("enter Num"+i))
//   i++
// }while(i<cpt)

// console.log(t);
// var p =[]
// var im = []
// for(var s = 0;s<t.length;s++){
//     if(t[s]%2==0){
//        p[k] = t[s]
//        k++
//     }

//     else{
//         im[m] = t[s]
//         m++
//     }
// }

//console.log(t,p,im);


//var pr = parseInt(prompt("please enter Num"))

// var isPrime = true
// if(pr>=3){
    //pr = 45  cp 2 --------------44 pr-1
    // pr = 5  2  3 4
// var cp = 2
//   while(cp <=pr/2){
//      if(pr%cp==0)  {
//         isPrime = false
//         break
//      }
//      cp++
     
//   }

//   if(isPrime)  console.log(pr + "is Prime");
//   else console.log(pr + "is Not Prime");
// }



//console.log(Student.address.annaba);


//JSON  =  JavaScript Object Notation

// Loop

// var i = 1
// while(i<=100){
//     console.log(i);
//    i+=2
// }


// var j = 10
// do{
//     console.log(j);
//    j+=2 
// }while(j<10)



// for(i = 0 ;i<=10;i++){
//     console.log(i);
// }


// for(i = 0;i<=tab1.length;i++){
//     console.log(tab1[i]);
// }

// var Student = {
//     nom:"sali",
//     prenom: "Sara",
//     age:25,
//     tel:["0665252525","0755656565"],
//     isStudent:true,
//     address: {alger:"25 rue ali meddouch H.dey",annaba:"14 rue amir annaba"}
// }
// console.log(Student['age']);
// for(std in Student){
//     console.log(Student[std]);
// }


// for (const std2 of tab2) {
//     console.log(std2);
// }

// function add(a,b){

//    return a + b

//    console.log(45454);
// }


// var res = add(45,25)
// console.log(res);

// console.log(add(100,25));


// function sHi(){
//     alert("Hiiii")
// }

//sHi()


// myF = function (a,b){
//     return a * b 
// }

// console.log(myF(25,6));

// x1 = 25,x2= 36;
//console.log(calc(x1,x2));

// myF = calc(x1,x2)
// console.log(myF);


// (function (a){
//     console.log(a);
// })("Hello")
//t("Hiiii")


// function ecoin(a,cb){
//      cb()
//    //  a()
// }


//ecoin(36,function(){console.log("Function In ");})
//reverse
// t1 = [11, 25, 5, 44, 99, 77, 100, 25, 200, 36]

// t2 = []

// for (let i = t1.length-1, j = 0; i >= 0; i--,j++) {
//     t2[j]  = t1[i]  
// }

// console.log(t2);


// var t1 = [11, 25, 5, 44, 99, 77, 100, 25, 200, 36]
// function myReverse2(arr = [20, 36, 1, 88, 9]) {
//     var rev = []
//     for (var i = arr.length - 1; i >= 0; i--) {
//         rev.push(arr[i])
//     }
//     console.log(rev);
// }


// myReverse2()

// WOOW  

// var str = "Ecoin"

// console.log(str);


// var student2 = {
//     nom: "Ahmed",
//     prenom : "Kadri",
//     age:25,
//     tel:["0656565656","0775554545"],
//     isStudent: true,
//     move: function(){
//         console.log(this.nom);
//         console.log(this.age);
//     }
// }

// student2.move()
//  coe    3  5   1   3  2
arr = [20, 36, 1, 88, 9]
var sum = 0
var coefs = 0
for(var i = 0 ; i<arr.length;i++){
  sum = sum + arr[i]
  coefs = coefs + coef[i]
}
res = sum/coefs