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
document.addEventListener("DOMContentLoaded", () => {
    // Captura os parâmetros da URL
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const email = params.get("email");

    // Seleciona os contêineres
    const successContainer = document.querySelector(".success-container");
    const errorContainer = document.querySelector(".error-container");

    // Lógica para alternar visibilidade
    if (name && email) {
        // Exibe contêiner de sucesso
        successContainer.style.display = "block";
        successContainer.innerHTML = `
            <h1>Mensagem Enviada com Sucesso!</h1>
            <p>Obrigado pelo seu contato, <strong>${name}</strong>! Entraremos em contato pelo e-mail <strong>${email}</strong> assim que possível.</p>
            <a href="index.html">
                <button>Voltar à Página Inicial</button>
            </a>
        `;
    } else {
        // Exibe contêiner de erro
        errorContainer.style.display = "block";
    }
});

