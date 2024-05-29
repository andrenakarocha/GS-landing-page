// Constantes Menu Hamburguer
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

// Constantes Popup
const nomeInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const mensagemInput = document.querySelector('#mensagem');
const errorNodes = document.querySelectorAll('.erro'); 

// Constantes Página
const btnFooter = document.querySelector('#btnFormFooter');
const popup = document.querySelector('#popup');

// Carrossel 
const wrapper = document.querySelector('#wrapper-holder');
const navButtons = document.querySelectorAll('#slider-navigation button');

// Validar Form
function validarForm() {
    limparMensagens();
    let errorFlag = false;

    if (nomeInput.value.length < 1) {
        errorNodes[0].innerText = 'Nome não pode estar em branco';
        nomeInput.classList.add('erro-border');
        errorFlag = true;
    }

    if (!emailValido(emailInput.value)) {
        errorNodes[1].innerText = 'Email inválido!';
        emailInput.classList.add('erro-border');
        errorFlag = true;
    }

    if (mensagemInput.value.length < 1) {
        errorNodes[2].innerText = 'Por favor, insira uma mensagem';
        mensagemInput.classList.add('erro-border');
        errorFlag = true;
    }

    if (!errorFlag) {
        alert('Mensagem enviada com sucesso!');
    }
}

// Testa se o email é válido
function emailValido(email) {
    let padrao = /\S+@\S+\.\S+/;
    return padrao.test(email);
}

// Limpa as mensagens de erro quando necessário
function limparMensagens() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = '';
    }
    nomeInput.classList.remove('erro-border');
    emailInput.classList.remove('erro-border');
    mensagemInput.classList.remove('erro-border');
}

// Menu Hamburguer
hamMenu.addEventListener('click', function () {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

// Mostrar PopUp
btnFooter.addEventListener('click', function () {
    popup.classList.toggle('active');
});

popup.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.classList.remove('active');
    }
});

// Carrossel
let sliderAtual = 0;
const totalSlides = 4;

function updateSlider(index) {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    navButtons.forEach(btn => btn.classList.remove('active'));
    navButtons[index].classList.add('active');
}

navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        sliderAtual = index;
        updateSlider(sliderAtual);
    });
});

setInterval(() => {
    sliderAtual = (sliderAtual + 1) % totalSlides;
    updateSlider(sliderAtual);
}, 5000);
