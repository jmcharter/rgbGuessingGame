var colours = generateRandomColours(6);
var pickedColour = pickColour();

var squares = document.querySelectorAll(".square");
var colourDisplay = document.querySelector("#colourDisplay");
var infoDisplay = document.querySelector("#infoDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

colourDisplay.textContent = pickedColour;
genSquares();

resetButton.addEventListener("click", resetAll);

function genSquares(){
// Iterate through squares.
    for (var i = 0; i < squares.length; i++){
        // Add colours to to squares.
        squares[i].style.backgroundColor = colours[i];
        // Add click listeners to squares.
        squares[i].addEventListener("click", isCorrect);
    }
}

function isCorrect(){
// Check if collect colour was guessed and update info display.
    var clickedColour = this.style.backgroundColor;
            // Check if correct square is clicked.
            if(clickedColour === pickedColour.toLowerCase()){
                infoDisplay.textContent = "Correct!";
                colourChange(pickedColour);
                resetButton.textContent = "Play again?";
            } else {
                this.style.backgroundColor = "#242424";
                infoDisplay.textContent = "Try again.";
            }
}

function colourChange(colour){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colour;
        h1.style.backgroundColor = colour;
    }

}

function pickColour(){
    var randomnum = Math.floor(Math.random() * colours.length);
    return colours[randomnum].toUpperCase();
}

function generateRandomColours(qty){
    var rancolours = [];
    for (var i = 0; i < qty; i++){
        rancolours[i] = randomColour();
    }
    return rancolours;
}

function randomColour(){
        // Generate random number betwee 0 - 255 for R, G and B.
        var R = Math.floor(Math.random() * 256);
        var G = Math.floor(Math.random() * 256);
        var B = Math.floor(Math.random() * 256);
        // Concatenate into "RGB(0, 0, 0)".
        return "RGB(" + R + ", " + G+ ", " + B + ")";
}

function resetAll(){

    // Reset button text to default.
    resetButton.textContent = "New colours";
    // Generate new colours.
    colours = generateRandomColours(6);
    // Generate new picked colour.
    pickedColour = pickColour();
    // Reset Colour Display.
    colourDisplay.textContent = pickedColour;
    // Re-generate the squares.
    genSquares();
    // Reset H1.
    h1.style.backgroundColor = null;
}