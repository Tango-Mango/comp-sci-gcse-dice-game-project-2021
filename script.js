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

let CensorStatus = false;

Censor = () => {
  if (CensorStatus) {
    document.getElementById("password").setAttribute("type", "password");
    CensorStatus = false;
  } else {
    document.getElementById("password").setAttribute("type", "text");
    CensorStatus = true;
  }
}

//Dice Game Code

let player1score = 0;
let player2score = 0;
const result = document.querySelector('.result');
const p_1=document.querySelector('#p1');
const p_2=document.querySelector('#p2');
const roundd=document.querySelector('#round');
result.innerHTML='Get Ready';
roundd.innerHTML = 'Round 1';

let player1turn = true;
let player2turn = false;
let player_1total = 0;
let player_2total = 0;

player1roll = () => {
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
    p_1.innerHTML = "Player 1: " + player1score + " total points";
    document.getElementById("rollresult").innerHTML = "Odd Total! -5 points!";
  } else if ((player_1total % 2) === 0) {
    player1score += (10 + player_1total);
    p_1.innerHTML = "Player 1: " + player1score + " total points";
    document.getElementById("rollresult").innerHTML = "Even Total! +10 extra points!";
  }
}
player2roll = () => {
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
    document.getElementById("rollresult").innerHTML = "Odd Total! -5 points!";
    p_2.innerHTML = "Player 2: " + player2score + " total points";
  } else if ((player_2total % 2) === 0) {
    player2score += (10 + player_2total);
    document.getElementById("rollresult").innerHTML = "Even Total! +10 extra points!";
    p_2.innerHTML = "Player 2: " + player2score + " total points";
  }
}

tiebreaker = () => {
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

extraroll = (turn) => {
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

let player1turns = 1;
let player2turns = 1;
let currentround = 1;

roundcheck = () => {
  if (player1turns === player2turns) {
    currentround++;
    roundd.innerHTML = "Round " + currentround;
  }
}

roll = () => {
  
  if (currentround === 5 && player1score === player2score) {
    result.innerHTML = 'Tiebreaker!';
    tiebreaker();
  } else if (currentround === 5 && (player1score > player2score)) {
    result.innerHTML = 'Player 1 wins!';
    p_1.style.color="#9C060C";
    p_1.transition="all 0.5s";
    p_2.style.color="white";
    p_2.transition = "all 0.5s";
    p_1.innerHTML = "Player 1: " + player1score + " total points";
    alert("Player 1 wins!");
  } else if (currentround === 5 && (player1score < player2score)) {
    result.innerHTML = 'Player 2 wins!';
    p_2.style.color="#9C060C";
    p_2.transition="all 0.5s";
    p_1.style.color="white";
    p_1.transition = "all 0.5s";
    p_2.innerHTML = "Player 2: " + player2score + " total points";
    alert("Player 2 wins!");
  }else if (player1turn === true && player2turn === false) {
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


//Leaderboard code
//Firebase code
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9Z0mwHgIFizO5EPtCA31_2pL44FyXesI",
  authDomain: "comp-sci-gcse-dice-game.firebaseapp.com",
  projectId: "comp-sci-gcse-dice-game",
  storageBucket: "comp-sci-gcse-dice-game.appspot.com",
  messagingSenderId: "289504905992",
  appId: "1:289504905992:web:e499d49774ab6b988f7abd",
  measurementId: "G-4GP3VGB5DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let database = firebase.database();
let ref = database.ref('scores');

let data = {
  name: "",
  score: ""
}

ref.push(data);