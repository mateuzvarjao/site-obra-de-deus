// let botao = document.querySelector('.botao')

// botao.addEventListener('click', () => {

//     alert('funcionou')
// })

// É uma boa prática envolver o código em um evento que espera o DOM carregar,
// especialmente se o script for colocado no <head> do HTML.
// Como ele está no final do <body> no exemplo HTML, isso já é garantido.
// Mas, para robustez, pode-se usar:
// document.addEventListener('DOMContentLoaded', () => {

// Seleciona TODOS os elementos que têm a classe 'myText'
const textElements = document.querySelectorAll('.myText');

// Verifica se algum elemento foi encontrado
if (textElements.length > 0) {
    // Itera sobre cada elemento encontrado (NodeList)
    textElements.forEach(textElement => {
        const text = textElement.textContent.trim(); // Usar trim() para remover espaços extras
        textElement.innerHTML = ''; // Limpa o conteúdo original DO ELEMENTO ATUAL

        const minWeight = 600; // Peso inicial
        const maxWeight = 300; // Peso final (note que é menor, então o degradê será de "pesado" para "leve")
        const numChars = text.length;

        if (numChars > 0) { // Adiciona verificação para evitar problemas se o texto do elemento atual estiver vazio
            for (let i = 0; i < numChars; i++) {
                const span = document.createElement('span');
                span.textContent = text[i];

                // Calcula o peso para a letra atual
                // Se numChars for 1, usa o peso médio ou um valor padrão
                const weight = numChars > 1
                    ? minWeight + ((maxWeight - minWeight) / (numChars - 1)) * i
                    : (minWeight + maxWeight) / 2;

                span.style.fontVariationSettings = `'wght' ${Math.round(weight)}`;
                textElement.appendChild(span);
            }
        }
    });
} else {
    console.warn("Nenhum elemento com a classe 'myText' foi encontrado no DOM."); // Mensagem ajustada
}
