
let count = 0

function increment(){
    count++;
    document.getElementById("count-ele").innerText=count
    
}
function decrease(){
    if(count!=0){
        count--;
    }
    document.getElementById("count-ele").innerText=count
}
