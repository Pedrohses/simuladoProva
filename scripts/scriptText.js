const cx1 = document.getElementById("cx1");
const cx0 = document.getElementById("cx0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", funcA);
btn2.addEventListener("click", funcB);

const lista = ["Texto1", "Texto2", "Texto3", "Texto4"];

function funcA() {
  let num = Math.round(Math.random() * 3);
  cx1.value = lista[num];
}

function funcB() {
  let num = Math.round(Math.random() * 3);
  cx0.innerHTML = lista[num];
}
