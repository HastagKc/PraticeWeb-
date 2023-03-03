const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondELl = document.getElementById("second");

const amPmEl = document.getElementById("AmPm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondELl.innerText = s;
  amPmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
