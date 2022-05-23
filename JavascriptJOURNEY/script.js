let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");
let resetBtn = document.getElementById("reset-btn");
let decrementBtn = document.getElementById("decrement-btn");

let EntryText = "Previous Entries: "

let count = 0;


function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    let savedCount = count + " - ";
    saveEl.textContent += savedCount;

    count = 0;
    countEl.textContent = count;
}

function reset() {
    savedCount = 0;
    saveEl.textContent = EntryText;
}

function decrement() {
    if(count == 0) return;
    else {
        count -= 1;
        countEl.textContent = count;
    }
}

incrementBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", save);
resetBtn.addEventListener("click", reset);
decrementBtn.addEventListener("click", decrement);
