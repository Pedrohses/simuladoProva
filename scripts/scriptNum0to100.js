const cx0 = document.getElementById("cx0");
const cx1 = document.getElementById("cx1");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", funcA);
btn2.addEventListener("click", funcB);

let intervalo

function funcA() {
  intervalo = setInterval(function(){
    cx0.value = Math.random()*100;
    cx1.textContent = Math.round(cx0.value); 
  },1000)
}

function funcB() {
  clearInterval(intervalo);
}