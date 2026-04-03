//Varibles 
//Var
// var x=" Tala";
// x = 50
// console.log(x)
// console.log("x")
//not is not defined
// console.log(y)//error is not define (غير معرف ) 
// const t=-200+5;
// const r=10/2
// console.log(r)
// console.log(5+5)
// console.log(t)
// let a =10
// a++//a=a+1 && a+=1
// console.log(a)
//Varibles challenge 1
// var num1=10;
// var num2=4;
// console.log("First number is :"+num1)
// console.log("Second number is :"+num2)
// console.log("Sum is :"+(num1+num2))
// console.log("Sub is :"+(num1-num2))
// console.log("Div is :"+(num1/num2))
// console.log("Mod is :"+(num1%num2))
// let ht=document.querySelector('h3')
// ht.innerText=num2
// ht.innerHTML=9num1
//////////////////////////////////////////
//Data Type in JS(typeof)=>KeyWords
// console.log(typeof "tala")
// console.log(typeof(2))
// console.log(typeof [])//array==obj in js
//////////////////////////////////
//function in String 
// let title="hello world"
//substring function(بتقص النص بحدد اله نقطة البداية ونقطة النهاية )
//الترتيب والعد يبدأ من صفر لحد ال i-1
// console.log(title.substring (0,5))
/////////////////////////////////////////
// length (خاصية هاي ف ما بستخدم معها اقواس )
// console.log(title.length)
////////////////////////////////////////
//toUpperCase 
// console.log(title.toUpperCase())
// // toLowerCase
// console.log(title.toLowerCase())
// //Replace
// console.log(title.replace("l","r"))
// //charAt
// console.log( title.charAt(1))// =>e
// console.log(title[1])// === charAt 
//////////////////////////////////
// String challenge 
// let V="Hello World"
// console.log(V.toUpperCase())
// console.log(V.replace("o","Y"))
// //reverse
// console.log(V.split("").reverse("").join(""))
// /بحتاج اني احولها لمصفوفة عشان اعكس م بقدر اعكس وهو String
////////////////////////////////////////////////////
//بدي اخد المحتوى الي بال h
// let h1=document.querySelector("h1").innerHTML
// console.log(h1)
// console.log(h1.toUpperCase())
// console.log(h1.replace('o','y'))
////////////////////////////////////
// let btn =document.querySelector('button')
// btn.addEventListener("click",()=>{
//     let inp = document.querySelector('input').value
//     console.log(inp)
    //هان انا اخدت قيمة متغيرة وبدي اسوي عليها نفس العمليات الي فوق 


// })
/////////////////////////////////////////////
// Number Varibles
// var x =10
// var y=20
// var z=x * y + 20
// var name = "tala"
// console.log(name * y)// => NaN
// console.log(z)
// let m="10"
// let n="20"
// console.log(m*n)// => لما نيجي نعمل عملية رياضية بين 2 سترنج بحاول انه يحولو لرقم عشان ينفذ العملية الرياضية 
// console.log(m/n)
///في دالة بنتاكد اذا الناتج لا رقم او رقم 
// console.log(isNaN(z)) // => false لانه رقم 
// console.log(isNaN(name * y))
//Math laibrariy
// console.log(Math.min(5,6,8,5,9,52,8,-1))
// console.log(Math.max(1,2,5,8,9,6,5,4)) 
////////////////////////////////////////////////////
// Boolean(True || False )
// let x = false
// let c= true
// let n = isNaN("ld,flsd,flsd")
// console.log(n)
// console.log(x)
// console.log(typeof x)
// let y = 10
// let l=20
// console.log(y>l)
// console.log(y<l)
// console.log(y == l)
// console.log(Boolean(0))// => || Nan => false
// console.log(Boolean(10))
///////////////////////////////////
//Logical Operators
// let x =20
// console.log(x > 5 && x <20)//&&
// console.log(x<3 || x>10) // ! =>Not  
// let c =false
// console.log(! c)
// != => NOt Equale
////////////////////////////////////////
//Casting
// let x =10
// let y='20'
// x.toString
// console.log(Number(x)+Number(y))
// console.log(typeof(x))
//toString () => بتحول ل سلسلة نصية 
// console.log(Boolean(x))
//////////////////////////////////////////////////
//If Statement 
// let age =44
// if(age>50){
//     console.log("this man is old : " +age)
// }else{
//     console.log("this is young : "+age)
// }
///////////////////////////////////////////////
//if else
    // if(age>=60){
    //     console.log(Old and the ahe is :" + age)
    // }
    // else if(age >=40 && age<60){
    //     console.log("this Mid"+age)
    // }
    // else{
    //      console.log("Young and the age is : " +age)
    // }

//////////////////////////////////////////
//switch Case 
// let health ="Weak"
// switch(health){
//     case("Weak"):
//         console.log("Your health :"+health)
//         break;

//     case("Strong"):
//         console.log("Your health1 :"+health)
//         break;

//     default:
//         console.log("good")
// }
//if else => Switch
// switch(true){
//     case(age>=60):
//     console.log("Old and the ahe is :" + age)
//     break;
//     case(age>=40&& age<60):
//     console.log("this Mid"+age)
//     break;
//     default:
//     console.log("Young and the age is : " +age)
// }
////////////////////////////////////////////
//Arrays
let array1=["ahmed","tala","ameer","mohammed"]
// console.log(typeof array1) // => Object
document.getElementById("arr").innerHTML=array1
////////////////////////////////////////////
//Arrays Operations
console.log(array1.length)
console.log(array1[0])
// push element to array
array1.push("salma")
console.log(array1)
array1[1]="2" // => استبدال قيمة مكان قيمة 
console.log(array1)
// pop  last element => delete
 array1.pop()
 console.log(array1)
 
   






















