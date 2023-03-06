let boxSelector = document.querySelector(".Box");

let btnSelector = document.getElementById("change");

// //create function
// function onclick() {
//   btnSelector.addEventListener("click", function () {
//     let index = Math.ceil(Math.random() * 10);

//     const color = ["black", "green", "yellow", "red", "blue"];
//     console.log(color[index]);
//     /*  boxSelector.style.backgroundColor = color[index]; */
//   });
// }
// Adding colors, you can add your desired colors
const colors = [
  "blue",
  "green",
  "pink",
  "yellow",
  "red",
  "brown",
  "purple",
  "orange",
  "gold",
  "aqua",
  "white",
  "gray",
  "azure",
];

// function for changing the background
function changeTheBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  boxSelector.style.backgroundColor = colors[colorIndex];
}

// // Selecting a default color
// boxSelector.style.backgroundColor = "purple";
// // Adding event listener
// btnSelector.addEventListener("click", changeTheBackground());
