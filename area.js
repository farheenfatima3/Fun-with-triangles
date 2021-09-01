const inpOne=document.querySelector("#one");
const inpTwo=document.querySelector("#two");
const calculate=document.querySelector("#btn");
const message=document.querySelector("#msg")

calculate.addEventListener("click",check)

function check(){
   let first=inpOne.value;
   let second=inpTwo.value;
   let mul=first*second/2;
   message.innerText=`Area of Triangle is `+mul

}