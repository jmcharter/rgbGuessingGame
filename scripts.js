var easyMode = false;
var pickedColour;
var colours = [];
var squares = document.querySelectorAll(".square");
var colourDisplay = document.querySelector("#colourDisplay");
var infoDisplay = document.querySelector("#infoDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    // Add logic to mode and reset buttons.
    resetButton.addEventListener("click", resetAll);
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                easyMode = true;
            } else {
                easyMode = false;
            }
            resetAll();
        });
    }
    resetAll();
}

function resetAll(){
    // Reset button text to default.
    resetButton.textContent = "New Colours";
    // Generate new colours.
    if (easyMode) {
        colours = generateRandomColours(3);
    } else {
        colours = generateRandomColours(6);
    }
    // Generate new picked colour.
    pickedColour = pickColour();
    // Reset Colour Display.
    colourDisplay.textContent = pickedColour;
    // Reset H1.
    h1.style.backgroundColor = null;
    // Reset info display.
    infoDisplay.textContent = "";
    // Re-generate the squares.
    genSquares();
}

function genSquares(){
    // Generate squares only for colours that exist, and add game logic to them.
    for (var i = 0; i < squares.length; i++){
        if (colours[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
            squares[i].addEventListener("click", isCorrect);
        } else{
            squares[i].style.display = "none";
        }
    }
}

function isCorrect(){
// Check if correct colour was guessed and update info display.
    var clickedColour = this.style.backgroundColor;
            // Check if correct square is clicked.
            if(clickedColour === pickedColour){
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
    return colours[randomnum];
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
        return "rgb(" + R + ", " + G+ ", " + B + ")";
}