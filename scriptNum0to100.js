const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const cx0 = document.getElementById("cx0");
const cx1 = document.getElementById("cx1");

let intervalo;

btn1.addEventListener("click", function() {
    // Iniciar a atualização a cada segundo
    intervalo = setInterval(function() {
        const numeroAleatorio = Math.random() * 100;
        
        // Atualizar o elemento de entrada de texto
        cx0.value = numeroAleatorio.toFixed(2); // Arredondar para 2 casas decimais
        
        // Atualizar o bloco vermelho (arredondado)
        cx1.textContent = Math.round(numeroAleatorio);
    }, 1000);
});

btn2.addEventListener("click", function() {
    // Parar a atualização
    clearInterval(intervalo);
    
    // Fixar o número atual nos dois elementos
    const numeroFixo = parseFloat(cx0.value);
    cx0.value = numeroFixo.toFixed(2); // Arredondar para 2 casas decimais
    cx1.textContent = Math.round(numeroFixo);
});

