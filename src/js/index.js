/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique no botão
        
        Passo 3 - adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais
        Passo 1 - pegar o botão e esconder ele
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-servicos');
const botaoOcultarProjetos = document.querySelector('.btn-ocultar-servicos');
const projetosInativos = document.querySelectorAll('.servico:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    // Passo 3 - adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();

    // Objetivo 2 - esconder o botão de mostrar mais
    // Passo 1 - pegar o botão e esconder ele
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
    botaoOcultarProjetos.classList.remove("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}


botaoOcultarProjetos.addEventListener('click', () => {
    ocultarProjetos();
    mostrarBotao();
})

function mostrarBotao() {
    botaoMostrarProjetos.classList.remove("remover");
    botaoOcultarProjetos.classList.add("remover");
}

function ocultarProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
}


//CONTROLE DAS MÚSICAS

const audioPlayer = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');
const tracks = playlist.getElementsByTagName('li');
let currentTrack = 0;

// Função para carregar e tocar a música
function loadTrack(index) {
    // Remove a classe 'active' de todas
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].classList.remove('active');
    }

    // Define a nova música e destaca na lista
    const track = tracks[index];
    track.classList.add('active');
    audioPlayer.src = track.getAttribute('data-src');
    audioPlayer.load();
}

// Inicializa a primeira música
loadTrack(currentTrack);

// Modificação no evento 'ended' para criar o Auto-loop
audioPlayer.addEventListener('ended', () => {
    // Incrementa o índice e volta para 0 se for a última música
    currentTrack = (currentTrack + 1) % tracks.length;

    loadTrack(currentTrack);
    audioPlayer.play();

    console.log("Iniciando próxima faixa: " + currentTrack);
});

// Permitir clicar na música para trocar manualmente
for (let i = 0; i < tracks.length; i++) {
    tracks[i].addEventListener('click', function () {
        currentTrack = i;
        loadTrack(currentTrack);
        audioPlayer.play();
    });
}


//ENVIAR DADOS DO FORMULARIO PEI WHATSAPP

document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta dos dados
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('contato').value;
    var email = document.getElementById('email').value;
    var data = document.getElementById('dataAgendamento').value;
    var hora = document.getElementById('horaAgendamento').value;
    var mensagem = document.getElementById('mensagem').value;

    // Configuração do WhatsApp
    var numeroWhatsapp = "5581998090037"; // Coloque o número com DDD

    var mensagem = "Olá, meu nome é " + nome + ", o meu contato é " + telefone + ", o meu e-mail é " + email + ", a data e horário escolhidos são " + data + " às " + hora + " e os problemas relatados são: " + mensagem;

    // Criação do link
    var url = "https://wa.me/" + numeroWhatsapp + "?text=" + encodeURIComponent(mensagem);

    // Redireciona
    window.open(url, '_blank');

    // Limpar o formulário
    document.getElementById('formulario').reset();

    localStorage.clear();
});


// MENU ESCONDIDO
function toggleMenu() {
    document.getElementById("meuPainel").classList.toggle("ativo");
}


//AGENDAMENTO FUTURO

document.addEventListener("DOMContentLoaded", function () {
    // 1. Obter a data atual no formato YYYY-MM-DD
    const hoje = new Date().toISOString().split('T')[0];

    // 2. Selecionar o campo de data pelo ID
    const campoData = document.getElementById('dataAgendamento');

    // 3. Definir o atributo 'min' do campo para a data de hoje
    campoData.setAttribute('min', hoje);
});