let num1=8
let num2=2
let x=document.getElementById("num1")
let y=document.getElementById("num2")
let z=document.getElementById("para")
x.textContent=8
y.textContent=2
let sum=0;
function add(){
    sum=num1+num2
    z.textContent="sum:"+sum
}
function sub(){
    sum=num1-num2
    z.textContent="sum:"+sum
}
function mul(){
    sum=num1*num2
    z.textContent="sum:"+sum
}
function div(){
    sum=num1/num2
    z.textContent="sum:"+sum
}