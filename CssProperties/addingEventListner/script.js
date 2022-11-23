const classSelect = document.querySelector(".class");

var btn = document.getElementsById("btn1");

btn.addEventListener("click", function () {
  classSelect.textContent = "working properly";
});
