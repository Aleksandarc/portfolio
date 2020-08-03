const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// #f15025 primer boje
const btn = document.getElementById('btn');
const color = document.querySelector(".current-color-color");
const background = document.querySelector(".background");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for(let i=0;i<6;i++){
    hexColor += hex[randomNumber()];
  }
  color.textContent = hexColor;
  background.style.backgroundColor = hexColor;

  console.log(hexColor);
});

function randomNumber(){
  return Math.floor((Math.random() * hex.length));
}