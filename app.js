let count = 0;
let initialValue = document.getElementById("home-result");

function addone() {
  initialValue.textContent = count += 1;
}
function addtwo() {
  initialValue.textContent = count += 2;
}
function addthree() {
  initialValue.textContent = count += 3;
}

let initial = 0;
let firstValue = document.getElementById("guest-result");

function add1() {
  firstValue.textContent = initial += 1;
}
function add2() {
  firstValue.textContent = initial += 2;
}
function add3() {
  firstValue.textContent = initial += 3;
}

//  I couldn't understand how this code works and simply watched from youtube and copied the code as guy didnt teach what each code refers to  //

document.getElementById("reset").onclick = function () {
  count = 0;
  document.getElementById("home-result").innerText = count;
  document.getElementById("guest-result").innerText = count;
};
