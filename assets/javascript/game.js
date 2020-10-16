//Reset
let reset = 0;
let resetnum = document.querySelector("#num-resets");
let resetButton = document.querySelector("#reset-button");
let resetValue = Number(resetnum.innerHTML);
console.log(resetValue);
//resetButton.addEventListener("click", function () {
//resetnum += 1;
//});

//Team 1
let shots1 = 0;
let T1shots = document.querySelector("#teamone-numshots");
let T1goals = document.querySelector("teamone-numgoals");
let T1Button = document.querySelector("#teamone-shoot-button");
let T1Value = Number(T1shots.innerHTML);

console.log(T1Value);
T1Button.addEventListener("click", function () {
  T1Value += 1;
  T1goals += 1;
  T1shots.innerHTML = T1Value;
  //T1goals.innerHTML = Math.floor(Math.random() * 10) + 1;

  //while (shots1 < T1Value) {
  //let randomNumber = Math.floor(Math.random() * 10) + 1;
  //T1goals.push(randomNumber);
  //count++;
  //}

  //Math.floor((Math.random() * 10) + 1
});

//Team 2
let shots2 = 0;
let T2shots = document.querySelector("#teamtwo-numshots");
let T2goals = document.querySelector("teamtwo-numgoals");
let T2Button = document.querySelector("#teamtwo-shoot-button");
let T2Value = Number(T2shots.innerHTML);
console.log(T2Value);
T2Button.addEventListener("click", function () {
  T2Value += 1;
  T2shots.innerHTML = T2Value;
});

resetButton.addEventListener("click", function () {
  resetValue += 1;
  T1shots.innerHTML = 0;
  T2shots.innerHTML = 0;

  resetnum.innerHTML = resetValue;
});
