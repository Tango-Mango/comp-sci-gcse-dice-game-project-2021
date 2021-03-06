//Login Page Code
$(document).ready(() => {
  $("#LoginButton").click( e => {
  e.preventDefault();

  /*let Shakeup = () => {
    $("#username").addClass("shake");
    $("#password").addClass("shake");
  }*/
  //Doesn't work but Shakedown() does. Not sure what to do here.

  let Shakedown = setTimeout( () => {
    $("#username").removeClass("shake");
    $("#password").removeClass("shake");
    $("input").css("box-shadow", "0 0 10px #9ecaed"); }, 500);
 });
})

let player1_attempts = 2;
//Login Validation for the first player
$(validate1 = form => {
  if (player1_attempts === 0) {
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  } else if ((form.username.value == "Sakthi") && (form.password.value == "Test")) {
    window.location.replace("login.html");
  } else {
    alert(`Login Error! Please check your username and password! Player 1, you have ${player1_attempts} attempt/s left!`);
    player1_attempts -= 1;
    $("#username").addClass("shake");
    $("#password").addClass("shake");
    $("input").css("box-shadow", "0 0 10px #ff0000");
    Shakedown();
    form.username.focus();
  }
  return true;
});
  
let player2_attempts = 2;
//Login Validation for the second player
$(validate2 = form => {
  if (player2_attempts === 0) {
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  } else if ((form.username.value == "Alan") && (form.password.value == "Why")) {
    window.location.replace("main.html");
  } else {
    alert(`Login Error! Please check your username and password! Player 2, you have ${player2_attempts} attempt/s left!`);
    player2_attempts -= 1;
    $("#username").addClass("shake");
    $("#password").addClass("shake");
    $("input").css("box-shadow", "0 0 10px #ff0000");
    Shakedown();
    form.username.focus();
  }
  return true;
});

//Creates array in local storage
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;

//Submits the winner's name and submits their name and their score from sessionStorage to localStorage
$(detailSubmit1 = form => {
  if (form.winner.value !== "") {
    //Form can't be empty
    const score = {
      name: form.winner.value,
      score: sessionStorage.getItem("p1score"),
    };
    highScores.push(score);
    //pushes score to the local storage
    highScores.sort((a, b) => b.score - a.score);
    //Sorts out scores from highest to lowest
    highScores.splice(5);
    //Only 5 players can be stored in the local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.replace("leaderboard.html");
  }
});

//Submits the winner's name and submits their name and their score from sessionStorage to localStorage
$(detailSubmit2 = form => {
  if (form.winner.value !== "") {
    //Form can't be empty
    const score = {
      name: form.winner.value,
      score: sessionStorage.getItem("p2score"),
    };
    highScores.push(score);
    //Pushes score to local storage
    highScores.sort((a, b) => b.score - a.score);
    //Sorts out scores from highest to lowest
    highScores.splice(5);
    //Only 5 players can be stored in the local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.replace("leaderboard.html");
  }
});

//For the password censor button
let CensorStatus = false;
const Censor = () => {
  if (CensorStatus) {
    document.getElementById("password").setAttribute("type", "password");
    CensorStatus = false;
  } else {
    document.getElementById("password").setAttribute("type", "text");
    CensorStatus = true;
  }
}

//Dice Game Code
//Initialising variables
var player1score = 0;
var player2score = 0;
// selects classes and IDs from html and puts them into variables for easier reference
const result = document.querySelector('.result');
const p_1=document.querySelector('#p1');
const p_2=document.querySelector('#p2');
const roundd = document.querySelector('#round');
//sets text
result.innerHTML='Get Ready';
roundd.innerHTML = 'Round 1';
//p1 starts first, very fair
let player1turn = true;
let player2turn = false;
let player_1total = 0;
let player_2total = 0;
let player1turns = 1;
let player2turns = 1;
let currentround = 1;
var winnerp1 = false;
var winnerp2 = false;

//sets dices for player1's turn and changes mostly html elements
const player1roll = () => {
  const player_1 = Math.floor(Math.random() * 6) + 1;
  const player_12 = Math.floor(Math.random() * 6) + 1;
  result.innerHTML = "Player 1 Turn";
  player_1total = player_1 + player_12;
  document.getElementById("firstDice").src = "Images/dice" + player_1 + ".png";
  document.getElementById("secondDice").src = "Images/dice" + player_12 + ".png";
  if (player_1 === player_12) {
    extraroll(1);
  } else if ((player_1total % 2) !== 0) {
    player1score -= 5;
    player1score = player1score < 0 ? 0 : player1score;
    //Prevents value from going below 0
    p_1.innerHTML = "Player 1: " + player1score + " total points";
    document.getElementById("rollresult").innerHTML = "Odd Total! -5 points!";
  } else if ((player_1total % 2) === 0) {
    player1score += (10 + player_1total);
    p_1.innerHTML = "Player 1: " + player1score + " total points";
    document.getElementById("rollresult").innerHTML = "Even Total! +10 extra points!";
  }
}

//sets dices for player2's turn and changes mostly html elements
const player2roll = () => {
  const player_2 = Math.floor(Math.random() * 6) + 1;
  const player_22 = Math.floor(Math.random() * 6) + 1;
  result.innerHTML = "Player 2 Turn";
  player_2total = player_2 + player_22;
  document.getElementById("firstDice").src = "Images/dice" + player_2 + ".png";
  document.getElementById("secondDice").src = "Images/dice" + player_22 + ".png";
  if (player_2 === player_22) {
    extraroll(2);
  } else if ((player_2total % 2) !== 0) {
    player2score -= 5;
    player2score = player2score < 0 ? 0 : player2score;
    //Prevents value from going below 0
    document.getElementById("rollresult").innerHTML = "Odd Total! -5 points!";
    p_2.innerHTML = "Player 2: " + player2score + " total points";
  } else if ((player_2total % 2) === 0) {
    player2score += (10 + player_2total);
    document.getElementById("rollresult").innerHTML = "Even Total! +10 extra points!";
    p_2.innerHTML = "Player 2: " + player2score + " total points";
  }
}

//In case there is a draw. This has never happened for me though. Could not test if it works. Or maybe it doesn't work?
const tiebreaker = () => {
  const player_1extra = Math.floor(Math.random() * 6) + 1;
  const player_2extra = Math.floor(Math.random() * 6) + 1;
  alert("Tiebreaker!");
  if (player_1extra > player_2extra) {
    document.getElementById("firstDice").src = "Images/dice" + player_1extra + ".png";
    document.getElementById("secondDice").src = "Images/dice" + player_2extra + ".png";
    result.innerHTML = 'Player 1 wins!';
    p_1.style.color="#9C060C";
    p_1.transition="all 0.5s";
    p_2.style.color="white";
    p_2.transition = "all 0.5s";
    player_1total += player_1extra;
    player_2total += player_2extra;
    p_1.innerHTML = "Player 1: " + player1score + " total points";
    p_2.innerHTML = "Player 2: " + player2score + " total points";
    alert("Player 1 wins!");
  } else if (player_1extra < player_2extra) {
    document.getElementById("firstDice").src = "Images/dice" + player_1extra + ".png";
    document.getElementById("secondDice").src = "Images/dice" + player_2extra + ".png";
    result.innerHTML = 'Player 2 wins!';
    p_2.style.color="#9C060C";
    p_2.transition="all 0.5s";
    p_1.style.color="white";
    p_1.transition = "all 0.5s";
    player_1total += player_1extra;
    player_2total += player_2extra;
    p_1.innerHTML = "Player 1: " + player1score + " total points";
    p_2.innerHTML = "Player 2: " + player2score + " total points";
    alert("Player 2 wins!");
  } else if (player_1extra == player_2extra && player_2 == player_1extra) {
    document.getElementById("firstDice").src = "Images/dice" + player_1extra + ".png";
    document.getElementById("secondDice").src = "Images/dice" + player_2extra + ".png";
    result.innerHTML = 'Draw. Roll again.';
    p_1.style.color="#9C060C";
    p_1.transition="all 0.5s";
    p_2.style.color="#9C060C";
    p_2.transition = "all 0.5s";
    tiebreaker();
  }
}

//An extra roll!
const extraroll = (turn) => {
  player_1extra = Math.floor(Math.random() * 6) + 1;
  player_2extra = Math.floor(Math.random() * 6) + 1;
  if (turn === 1) {
    result.innerHTML = "P1 Extra Turn";
    player1score += player_1extra;
    p_1.innerHTML = "Player 1: " + player1score + " total points";
    document.getElementById("firstDice").src = "Images/dice" + player_1extra + ".png";
    document.getElementById("secondDice").src = "Images/BlankDice.jpg";
  } else {
    result.innerHTML = "P2 Extra Turn";
    player2score += player_2extra;
    p_2.innerHTML = "Player 2: " + player2score + " total points";
    document.getElementById("firstDice").src = "Images/BlankDice.jpg";
    document.getElementById("secondDice").src = "Images/dice" + player_2extra + ".png";
  }
}

//increments the round
const roundcheck = () => {
  if (player1turns === player2turns) {
    currentround++;
    roundd.innerHTML = "Round " + currentround;
  }
}

//On click in html, this code is executed
const roll = () => {
  //Tiebreaker initiated at the end of 5 rounds
  if (currentround === 5 && player1score === player2score) {
    result.innerHTML = 'Tiebreaker!';
    tiebreaker();
    //If Player1 has a higher score after 5 rounds
  } else if (currentround === 5 && (player1score > player2score)) {
    result.innerHTML = 'Player 1 wins!';
    p_1.style.color="#9C060C";
    p_1.transition="all 0.5s";
    p_2.style.color="white";
    p_2.transition = "all 0.5s";
    winnerp1 = true;
    p_1.innerHTML = "Player 1: " + player1score + " total points";
    sessionStorage.setItem("p1score", player1score);
    alert("Player 1 wins!");
    window.location.replace("mainsub.html");
    //If Player2 has a higher score after 5 rounds
  } else if (currentround === 5 && (player1score < player2score)) {
    result.innerHTML = 'Player 2 wins!';
    p_2.style.color="#9C060C";
    p_2.transition="all 0.5s";
    p_1.style.color="white";
    p_1.transition = "all 0.5s";
    winnerp2 = true;
    p_2.innerHTML = "Player 2: " + player2score + " total points";
    sessionStorage.setItem("p2score", player2score);
    alert("Player 2 wins!");
    window.location.replace("mainsubmit.html");
    //Alternates player turns between p1 and p2
  } else if (player1turn === true && player2turn === false) {
    player1roll();
    p_1.style.color="#9C060C";
    p_1.transition="all 0.5s";
    p_2.style.color="white";
    p_2.transition = "all 0.5s";
    player1turns++;
    player1turn = false;
    player2turn = true;
    roundcheck();
  } else {
    player2roll();
    p_2.style.color="#9C060C";
    p_2.transition="all 0.5s";
    p_1.style.color="white";
    p_1.transition = "all 0.5s";
    player2turns++;
    player1turn = true;
    player2turn = false;
    roundcheck();
  }
}

