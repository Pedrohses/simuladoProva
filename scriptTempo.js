const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const cx0 = document.getElementById("cx0");
const cx1 = document.getElementById("cx1");

let contador = 0;
let intervalo;

btn1.addEventListener("click", function() {
    // Iniciar ou continuar o contador
    if (!intervalo) {
        // Se o intervalo não estiver definido, inicia o contador
        intervalo = setInterval(function() {
            contador++;
            cx1.textContent = contador;
        }, 1000); // Atualiza a cada segundo
    }
});

btn2.addEventListener("click", function() {
    // Pausar o contador e exibir o último número no input
    clearInterval(intervalo);
    intervalo = undefined; // Limpar o intervalo
    cx0.value = contador;
});

// Se você quiser reiniciar o contador a partir do valor no input, pode fazer algo assim
btn1.addEventListener("click", function() {
    const valorInput = parseInt(cx0.value);
    if (!isNaN(valorInput)) {
        contador = valorInput;
        cx1.textContent = contador;
    }
});
