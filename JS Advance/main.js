//Error Handling
function divide(num1,num2){
    if (num2 ==0){
    throw" You cant divide by zero" // => اي اشي بعدها م رح يتنفذ
     //برمي الخطأ 

    }
    return num1/num2

}
document.getElementById("calc-btn").addEventListener("click", function(){
    let firstInput = document.getElementById("first-input").value
    let secondInput = document.getElementById("second-input").value

try{
    let result = divide(Number(firstInput), Number(secondInput))
    document.getElementById("result").innerHTML = result
}catch(e){
    console.log(e)
    alert ("Error: "+e)
}finally{
    console.log("hello")
}
    
    
})