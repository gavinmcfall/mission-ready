console.log("Connected!")

var count = 0

var counterDisplay = document.getElementById("counterDisplay");
counterDisplay.textContent = "Counter " + count;

function incrementCount() {
    count++;
    counterDisplay.textContent = "Counter " + count;
}