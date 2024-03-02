// Scoring
let userScore = 0;
let compScore = 0;
const userScoreDiv = document.getElementById("user-score");
const compScoreDiv = document.getElementById("comp-score");
let resultDiv = document.getElementById("result");

// Action
const rockChoiceDiv = document.getElementById("rock");
const paperChoiceDiv = document.getElementById("paper");
const scissorChoiceDiv = document.getElementById("scissor");
// const resetScore = document.getElementById("reset");

getCompInput = () => {
  const choices = ["rock", "paper", "scissor"];
  let randomMath = Math.floor(Math.random() * 3);
  return choices[randomMath];
};

isWin = (userInput, compInput) => {
  resultDiv.innerHTML = "You choose " + userInput + ", The Computer choose " + compInput + "<br>" + "User Win, Computer Lose";
  userScore++;
  userScoreDiv.innerHTML = userScore;
  document.getElementById("result").className = "result-win";
  confetti();
};
isLose = (userInput, compInput) => {
  resultDiv.innerHTML = "You choose " + userInput + ", The Computer choose " + compInput + "<br>" + "Computer Win, User Lose";
  compScore++;
  compScoreDiv.innerHTML = compScore;
  document.getElementById("result").className = "result-lose";
};
isTie = (userInput, compInput) => {
  resultDiv.innerHTML = "You choose " + userInput + ", The Computer choose " + compInput + "<br>" + "It's a tie";
  document.getElementById("result").className = "result-tie";
};

game = (userInput) => {
  const compInput = getCompInput();
  switch (userInput + compInput) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      isWin(userInput, compInput);
      break;
    case "scissorrock":
    case "rockpaper":
    case "paperscissor":
      isLose(userInput, compInput);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      isTie(userInput, compInput);
      break;
  }
};

main = () => {
  rockChoiceDiv.addEventListener("click", () => {
    resultDiv.innerHTML = "You choose rock 🪨";
    game("rock");
  });
  paperChoiceDiv.addEventListener("click", () => {
    resultDiv.innerHTML = "You choose paper 📰";
    game("paper");
  });
  scissorChoiceDiv.addEventListener("click", () => {
    resultDiv.innerHTML = "You choose scissor ✂️";
    game("scissor");
  });
};

main();

// const resetScore = () => {
//   let resetConfirm = window.confirm("Mau reset score?");
//   switch (true) {
//     case userScore === 0 && compScore === 0:
//       alert("noscore");
//       break;
//     case resetConfirm:
//       userScore = 0;
//       compScore = 0;
//       userScoreDiv.innerHTML = userScore;
//       compScoreDiv.innerHTML = compScore;
//       alert("reset");
//       break;
//   }
// };

const resetScore = () => {
  Swal.fire({
    title: "Are you sure you want to reset the score?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      if (userScore === 0 && compScore === 0) {
        Swal.fire({
          title: "Failed!",
          text: "There are no score to reset",
          icon: "error",
        });
      } else
        Swal.fire({
          title: "Reset!",
          text: "The score has been reset",
          icon: "success",
        }),
          (userScore = 0);
      compScore = 0;
      userScoreDiv.innerHTML = userScore;
      compScoreDiv.innerHTML = compScore;
    }
  });
  console.log("test");
};

confetti({
  particleCount: 999999,
  spread: 999999,
  origin: { y: 0.6 },
});
//Confetti
