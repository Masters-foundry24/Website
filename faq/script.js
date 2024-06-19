// Seleciona todos os elementos com a classe "accordion" e armazena em uma lista
var acc = document.getElementsByClassName("accordion");

// Variáveis para controle do loop e tamanho da lista de elementos
var i;
var len = acc.length;

// Loop para adicionar um evento de clique a cada elemento com a classe "accordion"
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    // Adiciona ou remove a classe "active" no elemento clicado para alternar o estilo visual
    this.classList.toggle("active");

    // Seleciona o próximo elemento irmão do tipo "panel"
    var panel = this.nextElementSibling;

    // Verifica se o painel (elemento seguinte) possui a propriedade style maxHeight definida
    if (panel.style.maxHeight) {
      // Se tiver maxHeight definido, remove para fechar o painel
      panel.style.maxHeight = null;
    } else {
      // Se não tiver maxHeight definido, define-o com a altura completa do painel para abrir
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
