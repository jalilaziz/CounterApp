//document.getElementById("count-el").innerText = 5

// let count = 5;
// count = count + 1;
// console.log(count);

// initilize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-e in the html

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.innerHTML = count;  
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}
