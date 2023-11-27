const cx0 = document.getElementById("cx0");
const cx1 = document.getElementById("cx1");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", funcA);
btn2.addEventListener("click", funcB);

function funcA(){
    cx0.value = Math.random();
};

function funcB() {
    cx1.textContent = cx0.value;
};