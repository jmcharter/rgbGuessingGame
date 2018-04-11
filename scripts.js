var colours = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)"
];

var squares = document.querySelectorAll(".square");
var colourDisplay = document.querySelector("#colourDisplay");
var pickedColour = colours[4].toUpperCase();
var infoDisplay = document.querySelector("#infoDisplay");

colourDisplay.textContent = pickedColour;

// Iterate through squares.
for (i = 0; i < squares.length; i++){

    // Add colours to to squares.
    squares[i].style.backgroundColor = colours[i];

    // Add click listeners to squares.
    squares[i].addEventListener("click",function(){
        var clickedColour = this.style.backgroundColor;

        // Check if correct square is clicked.
        if(clickedColour === pickedColour.toLowerCase()){
            infoDisplay.textContent = "Correct!";
            colourChange(pickedColour);
        } else {
            this.style.backgroundColor = "#242424";
            infoDisplay.textContent = "Try again.";
        }
    });
}

function colourChange(colour){

    for (i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colour;
    }

}