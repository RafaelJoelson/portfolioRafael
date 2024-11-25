document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const hamburgerIcon = './imgs/ham.webp';  // Caminho para o ícone de hambúrguer
    const closeIcon = './imgs/close.webp';    // Caminho para o ícone de fechar

    hamburgerButton.addEventListener('click', function() {
        navMenu.classList.toggle('active'); // Alterna a classe 'active' no menu

        // Verifica se o menu está ativo e altera o ícone do botão
        if (navMenu.classList.contains('active')) {
            hamburgerButton.querySelector('img').src = closeIcon;
        } else {
            hamburgerButton.querySelector('img').src = hamburgerIcon;
        }
    });
});
