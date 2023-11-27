const cx0 = document.getElementById("cx0");
const cx1 = document.getElementById("cx1");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", funcA);
btn2.addEventListener("click", funcB);

let contador = 0 
console.log(cx0.value)
let intervalo;

function funcA() {
    contador = cx0.value;
    intervalo = setInterval(function(){
        contador++
        cx1.textContent = contador;
    },1000);
}

function funcB() {
    clearInterval(intervalo)
    cx0.value = contador
}
