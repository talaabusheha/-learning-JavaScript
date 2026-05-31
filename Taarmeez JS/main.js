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

// const { createElement } = require("react")


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
// let array1=["ahmed","tala","ameer","mohammed","Samy"]
// console.log(typeof array1) // => Object
// document.getElementById("arr").innerHTML=array1
////////////////////////////////////////////
//Arrays Operations
// console.log(array1.length)
// console.log(array1[0])
// push element to array
// array1.push("salma")
// console.log(array1)
// array1[1]="2" // => استبدال قيمة مكان قيمة 
// console.log(array1)
// pop  last element => delete
//  array1.pop()
//  console.log(array1)
/////////////////////////////////////////////////
//Splice Operations ==> بتتلقى مجموع بارميتر 
// console.log(array1)
// array1.splice(2)// => بتحذف العنصر وكل الي بعدو 
// console.log(array1)
// array1.splice(2,1) // => البارميتر التاني بحدد كم من عنصر تحزف 
// console.log(array1)
// array1.splice(0,1,"salem")
// console.log(array1)
// array1.splice(2,0,"heba") // => بنضيف بالاندكس التاني هادي القيمة
// console.log(array1)
/////////////////////////////////////////////////////////
//ِ Arrays Function 
// const arr =[10,100,50,40,90,70,20];
// console.log(arr)
// console.log(Array.isArray(arr)) // => هاي الدالة بتيجي من الكلاس تبعها 
// console.log(arr.includes(10))
// console.log(arr.indexOf(50))
// console.log(arr.indexOf(5))// => بطلع سالب واحد يعني مش موجود 
// arr.shift() // => بتحزف من بداية المصفوفة 
// console.log(arr) 
// console.log(arr.reverse())
//////////////////////////////////////////////
//array chanelge
// const add =document.getElementById('add') 
// const del =document.getElementById('del') 
// const inp =document.querySelector('input')
// const n =document.getElementById('arr')
// console.log(n)
// console.log(inp)
// console.log(add , del) 
// const arr =[];
// add.addEventListener("click" ,()=>{
// arr.push(inp.value)
// console.log(arr)
// n.innerHTML=arr
// inp.value=''

// })
// del.addEventListener("click" ,()=>{
//     arr.pop()
//     console.log(arr)
//     n.innerHTML=arr
// })
///////////////////////////////////////////////////
//loop
// for(let i=0; i<=1000; i++){
//     console.log("hello world")
// }
// for(let j=0; j<=500; j+=2){
//     console.log(j)
// }
//loop chanalge
// for(let i =1;i<=30;i++){
//     let x="10 X "+i+"="+i*10
//     let pre = document.getElementById('pre').innerHTML+=`<p>${x}</p>`

    
// }
///////////////////////////////////////
//String with loop
let name="Tala"
// console.log(name[0])
// for(let i=0; i<name.length; i++){
//     console.log(name[i])
// }
//for in => بتتلقى المتغير الي بدي اعمل عليه لوب
// for(let i in name){
//     console.log(name[i])// i => index of element in array or string
// }
//for of => بتتلقى المتغير الي بدي اعمل عليه لوب
// for(let i of name){
//     console.log(i) // i => value of element in array or string
// }
///////////////////////////////////////////////
//chanelge string with loop
// let btn=document.querySelector('button')
// let dev=document.querySelector('div')


// btn.addEventListener("click",()=>{
//     dev.innerHTML=``
//     let text =document.querySelector('input').value
//     for(let i=0; i<text.length; i++){
//         if(text[i]=="a" || text[i]=="e" || text[i]=="i" || text[i]=="o" || text[i]=="u"){
//         continue;
//     }
//         else{
//             dev.innerHTML+=`<p>${text[i]}</p>`

//         }
        
    
// }
// text.value=''
// })
////////////////////////////////////////////////////////
// loop with array
// const school =["T.tala","T.ahmed","mohammed","samy","salma"]
// const dev=document.getElementById('dev')
// school.forEach(element => {
//     if(element[0]=='T'){
//         dev.innerHTML+=`<p>${element}</p>`
//     }
    
// });
///////////////////////////////////////////////////
//chanelge string with array

// const btn=document.getElementById('Search')
// const arr=["tala","salma","ameer","heba","abood"]
// const dev=document.getElementById('dev')
// console.log(dev);
// btn.addEventListener("click",()=>{
// const in1=document.getElementById('in').value.toLowerCase()     
// let isFound=false;
// arr.forEach(e => { 
//     if(e.toLowerCase()==in1){
//         isFound=true;
        
//     }
    
// });
// if(isFound==true){
//     dev.innerHTML+=`${in1} is found`
// }
// else{
//     dev.innerHTML+=`${in1} is not found`
// }
// })
///////////////////////////////////////////
// 2D Array
// const arr =[
//             [1,2,3],
//             [4,5,6],
//             [7,8,9]
//         ]
// console.log(arr[2][0])
// let Student=[
//     ["yarob","Ahmed","Kaled"],
//     ["Tala","Salma","Heba"],
//     ["Ameer","Abood"]
// ];
// for(let i=0;i<Student.length;i++){
//     let currentClass=Student[i] // => array of students in the current class
//     document.getElementById('student').innerHTML+="<br>"+`Class ${i+1} : `
//     for(let j=0 ; j<currentClass.length;j++){
        // console.log(j)  
        // let currentStudent=currentClass[j];//
//         document.getElementById('student').innerHTML+=Student[i][j]+" / "
//         console.log(Student[i][j])
//     }
    // document.getElementById('student').innerHTML+=Student[i]
// }
// console.log(Student)
// document.getElementById('student').innerHTML=Student
// 2D Array with nested loop
///////////////////////////////////////////////
//chanelge 2D Array
// let tab=document.getElementById('tab')
// console.log(tab)
// for(let i=1;i<=10;i++){
//     tab.innerHTML+=`<h3>Multiplication Table Of ${i} </h3>`
// for(let j=1;j<=10;j++){
//     console.log(i*j)
//     tab.innerHTML+=`${i} X ${j} = ${i*j} <br>
// }
// tab.innerHTML+=`<hr>`
// }
///////////////////////////////////////////////
//Functions => مجموعة من الاوامر الي بتنفذ مهمة معينة
// function sayHello(){// =>header
    //body
//     console.log("Hello World")
// }
// sayHello()// => Call Function
//Function with Parameters
// function ID(name){
//     console.log("Hi "+name)
// }
// ID("Tala")
// ID("Salma")
//function with multiple parameters
// function sum(num1,num2){
//     console.log(num1+num2)
// }
// sum(5)
// sum(15,20)
/////////////////////////////////////
// function Square(num){
//    console.log(num*num)
// }
// Square(5)// =>Argument 
// Square(10)
/////////////////////////////////////////////
//Function with Return => بتستخدم لما بدي ارجع قيمة من الدالة عشان استخدمها بعدين
// function Square(num){
//     let result=num*num
//    return result
// }
// console.log("the result is :"+Square(4))
/////////////////////////////////////////////////
// chanelge function
// function reverseArr(arr=[1,2,5,3,4,6]){
//     let reversedArr=[];
//     for(let i=arr.length-1;i>=0;i--){
//         reversedArr.push(arr[i])
//     }
//     return reversedArr;
// }
// console.log(reverseArr([1,2,3,4,5,6]))
////////////////////////////////////////////////////
//anonymous function => هي دوال بدون اسماء
// function test(){
    // console.log("hi")
// }
// let x=test// => بدي احط الدالة داخل متغير عشان اقدر استدعيها
// let y=test()// => بدي استدعي الدالة عشان تنفذ وتطلع النتيجة
// x()
// let u=function(){
//     console.log("Hi from U")
// }
// u()
// function callAnotherFunction(functionToCall){ 
//     console.log("getting ready to call another function")
//     functionToCall()// => بدي استدعي الدالة الي جايه كبراميتر عشان تنفذ
// }
// callAnotherFunction(u)
// setTimeout(u,2000) // => بتتلقى دالة ووقت عشان تنفذ الدالة بعد الوقت المحدد
// setTimeout(()=>{
//     console.log("Hi from setTimeout")
// },5000)
//callback function=> هي دوال بنمررها كبراميتر لدوال تانية عشان تنفذ بعد ما تخلص الدالة التانية شغلها 
// setInterval(function(){
//     console.log("Hi from setInterval")
// },5000)
// let arr=[1,2,3,4,5]
// arr.forEach((element)=>{
// console.log(element*20)
// })
////////////////////////////////////////
// Challenge function with callback
// function getRandomRGB(){
//     let r =Math.floor(Math.random()*256)
//     let g =Math.floor(Math.random()*256)
//     let b =Math.floor(Math.random()*256)
//     return `rgb(${r},${g},${b})`
// }
// let btn=document.getElementById('click')
// const body = document.body;
// btn.addEventListener("click",()=>{
//     btn.style.backgroundColor=getRandomRGB()
//     setInterval(()=>{
//         let color=getRandomRGB()
//         console.log(color)
//         body.style.backgroundColor=color
        
        
//     },2000)
    
// })
////////////////////////////////////////////
// Scope in JS => هو مدى الوصول للمتغيرات داخل الكود
//Global Scope => المتغيرات الي بتكون خارج اي دالة او بلوك وبتكون متاحة في كل مكان في الكود
//Local Scope => المتغيرات الي بتكون داخل دالة او بلوك وبتكون متاحة بس داخل الدال او البلوك الي انشأت فيه
//Block Scope => المتغيرات الي بتكون داخل بلوك معين زي if , for , while وبتكون متاحة بس داخل البلوك الي انشأت فيه
// if(true){
//    var x =20;
// }
 
//  for(let i=0; i<5; i++){
//     var x =20
//  }
//  console.log(x)
//  function test(){
    // var y =10 //=> function Scope => المتغيرات الي بتكون داخل دال وبتكون متاحة بس داخل الدال الي انشأت فيه حتى لو VAR
//  }
// console.log(y)  // => error is not defined لانه متغير محلي داخل الدال وانا بحاول اوصل له من برا الدال
// {
    // var w=10 // => var ما بتتأثر بالبلوك سكوب يعني بتكون متاحة في كل مكان في الكود حتى لو انشأت داخل بلوك
// }
// console.log(w)
//////////////////////////////////////////////////////
 //Higher Order function (map ,filter,reduce) with array
//  const arr =[1,2,3,4,5,6,7,8,9,10]
//map => بتتلقى دالة كبراميتر وبتطبقها على كل عنصر في المصفوفة وبترجع مصفوفة جديدة بالنتائج
// const arr1=arr.map((e)=>{
//     return e*10;
// })
// console.log(arr1)
//filter => بتتلقى دالة كبراميتر وبتطبقها على كل عنصر في المصفوفة وبترجع مصفوفة جديدة بالنتائج الي بتكون true
// const arr2=arr.filter((e)=>{
//     if(e>5)return true
//     else return false
    //return e>5
        
// })
// console.log(arr2)
//reduce =>بطلع رقم بعتمد على حسب لمنطق البرمجي مثلا مجموع العناصر او المتوسط الحسابي وهكذا 
// const num=arr.reduce((prevValue,currentValue)=>{
//     return prevValue+currentValue
// })
//بتاخد 2 باراميتر هاي الدالة  
// console.log(num)
////////////////////////////////////////
//chanelge Higher Order function
// const arr =[1,2,3,4,5,6,7,8,9,10]
// const number=arr.reduce((prevValue,currentValue)=>{
//     return prevValue+currentValue;
// })
// let arre=[number,arr.length]
// console.log(arre)
///////////////////////////////////////////////////
// object in JavaScript:)
// let student ={
//     firstName :"tala",
//     lasaName:"Rafat",
//     age :15,
//     year :"2000",
//     printFullname:()=>{
//         console.log(this.firstName +" "+this.lasaName)

//     }
// }
// student.printFullname()
// console.log(student.name)
// console.log(student.age)
//this=>معناها الاوبجيكت الحالي الي انا موجودة فيه حاليا بتعود على الاوبجيكت لازم استخدم الكلمة هاي 

// function printFullName(st){
//     console.log(st.firstName + " "+st.lasaName)

// }
// printFullName(student)
// =edit& delet obj 
// student.year="2005"
// console.log(student.year)
// student.grade="A+"
// console.log(student.grade)
///////////////////////////////////////////////////////
// Array of object 
// let Students =[
// {
//     firstName :"tala",
//     lasaName:"Rafat",
//     age :21,
//     year :"2000",
//     printFullname:()=>{
//         console.log(this.firstName +" "+this.lasaName)

//     }
// },
// {
//     firstName :"Salma",
//     lasaName:"Rafat",
//     age :19,
//     year :"2002",
//     printFullname:()=>{
//         console.log(this.firstName +" "+this.lasaName)

//     }
// },
// {
//     firstName :"Abood",
//     lasaName:"Rafat",
//     age :18,
//     year :"2000",
//     printFullname:()=>{
//         console.log(this.firstName +" "+this.lasaName)

//     }
// },
// {
//     firstName :"Heba",
//     lasaName:"Samir",
//     age :18,
//     year :"2000",
//     printFullname:()=>{
//         console.log(this.firstName +" "+this.lasaName)

//     }
// }
// ]
// console.log(Students[0])
// console.log(Students[0].firstName)
// const tab=document.getElementById("table")
// console.log(tab)
// Students.forEach((e)=>{
//     tab.innerHTML+=`
//     <tr>
//     <td>${e.firstName}</td>
//     <td>${e.lasaName}</td>
//     <td>${e.age}</td>
//     </tr>`
// })
//nested obj:)
// let obj=[
//    {
//     name :{
//         firstName:"tala",
//         lastname:"rafat" },
//      courser:   ["math","arabic"]

//     }


// ]
// let st={
//     nam:"tala",
//     age:55
// }
//destructuring
// let {nam, age }=st // => destructuring obj
// console.log(name , age)
// console.log(st)
// const arr =[10,20,30]
// let[first,second,third]=arr // => destructuring array
// console.log(first,second,third)
/////////////////////////////////////////////////////
//JSON => java Script Object Notation
//  في اغراض متعددة في البرمجة عموما تمثيل معين للبنات يتم ا
////////////////////////////////////////////////
// pass by value Vs pass By Reference 
// let x ="hi"
// let y =x  // => pass by value
// x ="Tarmeez"
// let x ={
//     name :"tala"
// }
// let y =x // => pass By Reference
// x.name ="heba"
// console.log("The x value is ",x)
// console.log("The y value is ",y)
/////////////////////////////////////////////////////////
///////////////////////////////////////////////
//Dom in JS
// DOM => Document Object Model 

























