console.log("file loaded");

var possible_moves = ["rock", "paper", "scissors"];
var playerChoice, outcome;
var user_input;

function play(){
    user_input = document.getElementById("user-input");
    playerChoice = user_input.value;
    console.log(playerChoice);
    
    compare();
}

function compare(){
    var i = Math.floor(Math.random()*3);
    var computerChoice = possible_moves[i];
    
    
    if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        if(playerChoice === computerChoice){
            outcome = playerChoice + " vs. " + computerChoice + ". tied bro try again";
        } else if(playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper" || playerChoice === "rock" && computerChoice === "scissors") {
            outcome = playerChoice + " vs. " + computerChoice + ". damn you won";
        } else outcome = playerChoice + " vs. " + computerChoice + ". haha you lost";
    }
    else outcome = "what? you have to pick either rock, paper, or scissors";
    
    var outcome_div = document.getElementById("outcome");
    outcome_div.innerHTML = outcome;
}

// processing
var canvas;
var hue = 200;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index: -5;");
    colorMode(HSB, 360, 100, 100);
}

function draw(){
    background(hue, 15, 100);
    
    hue = map(mouseX, 0, width, 150, 250);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}