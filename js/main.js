document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const hamburgerIcon = './imgs/ham.png';  // Caminho para o ícone de hambúrguer
    const closeIcon = './imgs/close.png';    // Caminho para o ícone de fechar

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
// Substitua 'YOUR_USER_ID' com seu User ID do EmailJS
emailjs.init('service_eji5khx');

document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o envio do formulário por padrão

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
        } else {
            alert(result.error);
        }
    } catch (error) {
        alert('Ocorreu um erro ao enviar a mensagem.');
    }
});

