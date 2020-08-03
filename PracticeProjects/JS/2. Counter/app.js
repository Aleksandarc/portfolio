// const btnDecrease = document.querySelector(".decrease");
// const btnIncrease = document.querySelector(".increase");
// const btnReset = document.querySelector(".reset");
// const number = document.querySelector(".counter-number");

// btnDecrease.addEventListener("click", function(){
//   number.innerHTML --;
// });

// btnIncrease.addEventListener("click", function(){
//   number.innerHTML ++;
// });

// btnReset.addEventListener("click", function(){
//   number.innerHTML = 0;
// });
// Gore je manual method za odabir dugmadi

let count = 0;

// Odaberi vrednosti i dugmice
const number = document.querySelector(".counter-number");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
  btn.addEventListener("click",function(e){
    const stilovi = e.currentTarget.classList;
    if(stilovi.contains("decrease")){
      count --;
    }
    else if(stilovi.contains("increase")){
      count ++;
    }
    else if(stilovi.contains("reset")){
      count = 0;
    }
    if(count > 0){ 
      number.style.color= "green";
    }
    else if(count < 0){ 
      number.style.color= "red";
    }
    else number.style.color = "#000";
    
    number.textContent = count;
  })
});
