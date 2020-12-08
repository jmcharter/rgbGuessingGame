let easy_mode = false;
let game_finished = false;
let colours;
let chosen_colour;
let action_count = 0;

let header = document.querySelector("header");
let mode_btns = document.querySelectorAll(".mode");
let squares = document.querySelectorAll(".square");
let colour_display = document.querySelector(".colour_display");
let info_display = document.querySelector(".info");
let win_message = document.querySelector(".win_message");

function init () {
    for(const square of squares) {
        square.addEventListener('click',check_square)
    }
    info_display.addEventListener('click', reset)
    change_mode()
    reset()
}

let reset = () =>{
    game_finished = false;
    colours = getColours(easy_mode ? 4 : 8 );
    chosen_colour = choose_colour();
    colour_display.textContent = chosen_colour;
    info_display.textContent = "New colours"
    win_message.textContent = ""
    header.style.backgroundColor = "#5e81ac"
    hide_squares();
    for(let i = 0; i < colours.length; i++){
        squares[i].style.backgroundColor = colours[i]
        squares[i].setAttribute("id",colours[i]);
        squares[i].classList.remove('invisible')
    }
    action_count = 0;
}

let change_mode = () =>{
    for(const btn of mode_btns){
        btn.addEventListener('click', () =>{
            for(const btn of mode_btns){
                btn.classList.remove('mode-highlight')
            }
            btn.classList.add('mode-highlight')
            if (btn.textContent === 'Easy'){
                easy_mode = true;
            } else {
                easy_mode = false;
            }
            reset();
        });
    }
    
}

let randomColour = () => {
    let viable_hex = "ABCDEF0123456789"
    let hex_list = []
    let hex_colour = "#"
    for(let i=0; i<6; i++){
        hex_list.push(viable_hex[Math.floor(Math.random() * viable_hex.length)])
    }
    for(const character of hex_list){
        hex_colour += character
    }
    return hex_colour
}

let getColours = (quantity) => {
    let colours = []
    for (let i=0; i<quantity; i++){
        colours.push(randomColour());
    }
    return colours
}

let choose_colour = () => {
    choice = colours[Math.floor(Math.random() * colours.length)]
    return choice;
}

let hide_squares = () => {
    for(const square of squares){
        square.classList.add('invisible')
    }
}

let game_win = () => {
    game_finished = true;
    header.style.backgroundColor = chosen_colour;
    for(let i=0;i<colours.length;i++){
        squares[i].style.backgroundColor = chosen_colour;
        squares[i].classList.remove('invisible');
    }
}

function check_square() {
    let bg = this.id;
    action_count++;
    if(!game_finished){
        if(bg === chosen_colour){
            win_message.textContent = `You've found it! It took you ${action_count} attempts.`;
            game_win();

        } else {
            this.classList.add('invisible')
        }
        info_display.textContent = "Reset?"
    }
}

init()