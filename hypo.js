const inputOne=document.querySelector("#one")
const inputTwo=document.querySelector("#two")
const checkBtn=document.querySelector("#btn")
const message=document.querySelector("#msg")

checkBtn.addEventListener("click", function(){
    let in1=inputOne.value;
    let in2=inputTwo.value;
    calc(in1,in2)
})

function calc(in1,in2){
    let a=Math.pow(in1,2)
    let b=Math.pow(in2,2)
    let sum=a+b
    let result=Math.sqrt(sum)
    message.innerText=`Result: `+result
}