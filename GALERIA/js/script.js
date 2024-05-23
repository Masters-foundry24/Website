let previewMenu = document.querySelector('.coffee-menu-preview');
let previewBoxes = previewMenu.querySelectorAll('.coffee-preview');

document.querySelectorAll('.coffee-menu-container .coffee-menu').forEach(product => {
    product.onclick = () => {
        previewMenu.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBoxes.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBoxes.forEach(close => {
    close.querySelector('.fa-xmark').onclick = () => {
        close.classList.remove('active');
        previewMenu.style.display = 'none';
    };
});
