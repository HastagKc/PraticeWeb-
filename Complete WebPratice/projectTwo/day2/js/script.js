// const inputBox = document.getElementById("myInput");

// const totalNumRem = document.getElementById("totalNum");
// const countText = document.getElementById("count");

// let messageText = inputBox.value;

// if (inputBox.contains(value)) {
//   let textRem = 200 - messageText;
//   totalNumRem.innerText = textRem;
// }
// // alert("The text entered is: " + messageText);

let inputBox = document.getElementById("myInput");
let count = document.getElementById("count");

function updateCount() {
  let textValue = inputBox.value;
  if (textValue.length <= 200) {
    count.innerHTML = 200 - textValue.length;
  } else {
    alert("You exceed your limits: ");
  }
}
function tweetUpdate() {
  let inputText = inputBox.value;
  if (inputText.trim() === "" || inputText == null || inputText == undefined) {
    alert("Please enter some tweets");
  } else {
    alert("Your tweet is update sucessfully ");
  }
  inputBox.value = "";
}
