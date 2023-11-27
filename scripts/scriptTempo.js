const cx0 = document.getElementById("cx0");
const cx1 = document.getElementById("cx1");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", funcA);
btn2.addEventListener("click", funcB);

let intervalo;
let valor;

function funcA() {
  valor = cx0.value;
  intervalo = setInterval(funcInterval, 1000);
}

function funcInterval(){
    cx1.innerText = valor;
    valor++;
}

function funcB() {
  clearInterval(intervalo);
  cx0.value = cx1.innerHTML;
}
