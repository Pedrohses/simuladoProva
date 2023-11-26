const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const cx0 = document.getElementById("cx0");
const cx1 = document.getElementById("cx1");

// Lista de textos
const listaDeTextos = ["Teste", "Funciona", "PF", "Xablau", "OPAAA"];

btn1.addEventListener("click", function() {
    // Escolher aleatoriamente um texto da lista
    const textoAleatorio = escolherAleatoriamente(listaDeTextos);
    
    // Exibir o texto no elemento de entrada de texto
    cx0.value = textoAleatorio;
});

btn2.addEventListener("click", function() {
    // Escolher aleatoriamente um texto da lista
    const textoAleatorio = escolherAleatoriamente(listaDeTextos);
    
    // Exibir o texto no bloco vermelho
    cx1.textContent = textoAleatorio;
});

// Função para escolher aleatoriamente um elemento de uma lista
function escolherAleatoriamente(lista) {
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
}
