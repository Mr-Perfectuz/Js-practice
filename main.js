// Your age in days

function AgeInDays( ){
    var yearOfBirth = prompt("Which year ware you born ?");
    var Indays = (2022 - yearOfBirth) * 365;
    // console.log("you are "+ Indays + " days old");
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("you are "+ Indays + " days old");
    h1.setAttribute('id', 'AgeInDays');
    h1.appendChild(textAnswer);
    document.getElementById("flexbox-result").appendChild(h1);
}

function ResetButton(){
    document.getElementById("AgeInDays").remove();
}

// Challange 2 cat generator

function generateCat(){
    var image = document.createElement('img');
    var div =   document.getElementById('fex-cat-gen');
    image.src="https://media.wired.com/photos/5cdefb92b86e041493d389df/191:100/w_1280,c_limit/Culture-Grumpy-Cat-487386121.jpg";

    div.appendChild(image);
}


// Challange 3: Rock paper scissors

function rpsGame(yourChoice){
    var humanChoice, botchoice;
    humanChoice = yourChoice.id;

    botchoice =numberToChoice(randomToRpsInt());
    console.log("Computer Choice: ", botchoice);
    results = decideWinner(humanChoice, botchoice);

    console.log(results);
    message = finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id, botchoice, message);
}


function randomToRpsInt(){
    return Math.floor(Math.random() * 3);

}

function numberToChoice(number){
    return ["rock", "paper", "scissors"][number];
}


function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors' : 1, 'rock': 0.5, 'paper':  0},
        'paper': {'scissors' : 0, 'rock': 1, 'paper':  0.5},
        'scissors': {'scissors' : 0.5, 'rock': 0, 'paper':  1}
    }


    var yourScore = rpsDatabase[yourChoice][computerChoice];

    var computerScore = rpsDatabase[computerChoice][yourChoice];


    return [yourScore, computerScore]
}


function finalMessage(yourScore,computerScore){
    if(yourScore===0){
        return{'message': 'You lost !', 'color': 'red'};
    } else if(yourScore === 0.5){
        return{'message': 'You tied !', 'color': 'yellow'};
    } else{
        return{'message': 'You won !', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }


    // Remove all the images
    document.getElementById('rock').remove
    document.getElementById('paper').remove
    document.getElementById('scissors').remove

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src'" + imagesDatabase[humanImageChoice] + "'height = 150 width = 150 style= 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);' >";

    botDiv.innerHTML = "<img src'" + imagesDatabase[botImageChoice] + "'height = 150 width = 150 style= 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);' >";

    document.getElementById('flexbox-rps-div').appendChild(humanDiv);
    document.getElementById('flexbox-rps-div').appendChild(botDiv);
}

// const greeting = 'Hello'
// const subject = 'World'
// console.log(`${greeting} ${subject}!`)

const a = 'hello'
const b = 42
const c = {d: [true, false]}
console.log({a, b, c})
