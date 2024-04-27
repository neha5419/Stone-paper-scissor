let player1;

document.querySelector(".choice").addEventListener("click", userinputrock);
document
  .querySelectorAll(".choice")[1]
  .addEventListener("click", userinputpaper);
document
  .querySelectorAll(".choice")[2]
  .addEventListener("click", userinputscissor);

function editName() {
  player1 = prompt("Enter your Name");
  document.querySelector(".editname").innerHTML = player1 + "";
}
document.querySelector("#msg").addEventListener("click", editName);

function userinputrock() {
  const userChoice = document.querySelector(".choice").getAttribute("id");
  playGame(userChoice);
}
function userinputpaper() {
  const userChoice = document.querySelectorAll(".choice")[1].getAttribute("id");
  playGame(userChoice);
}
function userinputscissor() {
  const userChoice = document.querySelectorAll(".choice")[2].getAttribute("id");
  playGame(userChoice);
}

function genCompChoice() {
  let options = ["rock", "paper", "scissor"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

function playGame(userChoice) {
  console.log("user choice=", userChoice);
  //generate computer choice
  let compChoice = genCompChoice();
  console.log("computer choice=", compChoice);

  if (
    (userChoice == "rock" && compChoice == "paper") ||
    (userChoice == "paper" && compChoice == "scissor") ||
    (userChoice == "scissor" && compChoice == "rock")
  ) {
    document.querySelector("#user-score").innerHTML = player1 + " Loose";
    document.querySelector("#comp-score").innerHTML = "COMP Wins";
  }
  if (
    (userChoice == "rock" && compChoice == "scissor") ||
    (userChoice == "paper" && compChoice == "rock") ||
    (userChoice == "scissor" && compChoice == "paper")
  ) {
    document.querySelector("#user-score").innerHTML = player1 + " Wins";
    document.querySelector("#comp-score").innerHTML = "COMP Loose";
  }
  if (
    (userChoice == "rock" && compChoice == "rock") ||
    (userChoice == "scissor" && compChoice == "scissor") ||
    (userChoice == "paper" && compChoice == "paper")
  ) {
    document.querySelector("#user-score").innerHTML = "Same Choice: ";
    document.querySelector("#comp-score").innerHTML = "Its a Tie";
  }
}
