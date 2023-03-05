const questionE = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

// geting random number
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// multipling two number
const correctAns = num1 * num2;

// show to answer section
questionE.innerText = `What is ${num1} multiply by ${num2} ?`;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `Score: ${score}`;

formEl.addEventListener("submit", function (event) {
  //prevent form from submitting and reloading page
  event.preventDefault();
  const userAns = +inputEl.value;

  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
    window.location.reload();
  } else {
    score--;
    updateLocalStorage();
    inputEl.style.color = "red";
    // inputEl.style.outlineColor = "red";

    inputEl.style.borderColor = "red";
    inputEl.style.borderRadius = "10px";
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
