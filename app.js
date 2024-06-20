// Seleciona os elementos do DOM
var toggle_btn; // Botão de toggle para alternar entre temas
var big_wrapper; // Wrapper principal da página
var hamburger_menu; // Menu hamburguer pra dispositivos móveis

// Função para declarar e inicializar os elementos
function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

// Seleciona o elemento <main> do documento
const main = document.querySelector("main");

// Chama a função para declarar os elementos
declare();

let dark = false; // Variável para controlar o estado do tema (claro ou escuro)

// Função para alternar entre os temas claro e escuro
function toggleAnimation() {
  dark = !dark; // Inverte o estado do tema

  // Clona o wrapper principal
  let clone = big_wrapper.cloneNode(true);

  // Adiciona classes dependendo do estado do tema
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }

  clone.classList.add("copy"); // Adiciona classe para animação de cópia
  main.appendChild(clone); // Adiciona o clone ao <main> do documento

  document.body.classList.add("stop-scrolling"); // Adiciona classe para parar o scroll

  // Evento para remover o clone e restaurar a funcionalidade após a animação
  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling"); // Remove a classe para permitir scroll
    big_wrapper.remove(); // Remove o wrapper original
    clone.classList.remove("copy"); // Remove a classe de cópia do clone

    // Re-declara os elementos e reatribui os eventos
    declare();
    events();
  });
}

// Função para adicionar eventos aos elementos
function events() {
  toggle_btn.addEventListener("click", toggleAnimation); // Evento de clique no botão de toggle
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active"); // Evento de clique no menu hamburguer para dispositivos móveis
  });
}

events(); // Chama a função para adicionar eventos aos elementos
