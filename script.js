
let count = 0

function increment() {
    count++;
    document.getElementById("count-ele").innerText = count

}
function decrease() {
    if (count != 0) {
        count--;
    }
    document.getElementById("count-ele").innerText = count
}

let prev = document.getElementById("prev")
let temp = ""
function save() {
    temp += count + " - "
    prev.innerText = temp
    // prev.textContent=temp
    count=0
    document.getElementById("count-ele").innerText=count
}
