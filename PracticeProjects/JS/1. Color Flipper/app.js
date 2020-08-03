const colors = ["green", "red", "rgba(56,56,56,200)", "#555"];
const btn = document.getElementById('btn');
const background = document.querySelector(".background");
const color = document.querySelector(".current-color-color");

btn.addEventListener("click", function () {
  //Get random number between 0 - (number of items in colors)
  // const randomNumber = 1
  const randomNumber = getRandomNumber();

  background.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];


  console.log(randomNumber);
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}