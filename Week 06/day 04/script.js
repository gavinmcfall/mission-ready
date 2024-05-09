console.log("Connected!");
// document.body.style.background = "blue";
// document.body.style.color = "white";


// function changeColor() {
//     if (document.body.style.background === "blue") {
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "blue";
//     }
// }

function changeColor() {
    // Create a color picker
    var colorPicker = document.createElement("input");
    colorPicker.type = "color";

    // Append the color picker to the body
    document.body.appendChild(colorPicker);

    // Add an event listener to the color picker
    colorPicker.addEventListener("input", function() {
        // Change the background color of the body
        document.body.style.backgroundColor = this.value;
    }, false);
}

// Call the function to create the color picker
changeColor();