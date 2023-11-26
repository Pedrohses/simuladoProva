const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const cx0 = document.getElementById("cx0");
const cx1 = document.getElementById("cx1");

btn1.addEventListener("click", function() {
    // Gerar um número aleatório entre 1 e 100
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    
    // Exibir o número aleatório no elemento de entrada de texto
    cx0.value = numeroAleatorio;
});

btn2.addEventListener("click", function() {
    // Copiar o conteúdo do elemento de entrada de texto para o bloco vermelho
    cx1.textContent = cx0.value;
});
