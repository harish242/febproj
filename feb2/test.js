let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
console.log(saveEl)
let count=0;
function increment(){
    count+=1
    countEl.innerText=count
}
function save(){
    let countSting=count+" - "
    saveEl.innerText+=countSting
    countEl.innerText=0
    count=0
    console.log(count)    
}
