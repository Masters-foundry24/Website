// Seleciona o elemento que contém o menu de café para pré-visualização
let previewMenu = document.querySelector('.coffee-menu-preview');

// Seleciona todos os elementos de pré-visualização de produtos dentro do menu de café
let previewBoxes = previewMenu.querySelectorAll('.coffee-preview');

// Adiciona um evento de clique a cada produto no menu de café
document.querySelectorAll('.coffee-menu-container .coffee-menu').forEach(product => {
    product.onclick = () => {
        // Exibe o menu de pré-visualização ao clicar em um produto
        previewMenu.style.display = 'flex';

        // Obtém o nome do produto clicado através do atributo 'data-name'
        let name = product.getAttribute('data-name');

        // Itera sobre os elementos de pré-visualização
        previewBoxes.forEach(preview => {
            // Obtém o valor do atributo 'data-target' de cada elemento de pré-visualização
            let target = preview.getAttribute('data-target');

            // Verifica se o nome do produto clicado corresponde ao 'data-target' do elemento de pré-visualização
            if (name == target) {
                preview.classList.add('active'); // Adiciona a classe 'active' para exibir o elemento de pré-visualização correspondente
            }
        });
    };
});

// Adiciona um evento de clique ao ícone de fechar ('x') em cada pré-visualização de produto
previewBoxes.forEach(close => {
    close.querySelector('.fa-xmark').onclick = () => {
        close.classList.remove('active'); // Remove a classe 'active' para ocultar o elemento de pré-visualização
        previewMenu.style.display = 'none'; // Oculta o menu de pré-visualização quando o ícone de fechar é clicado
    };
});
