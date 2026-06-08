/*
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
const fotovideo = document.getElementById (".container-foto");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}*/


const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
const fotovideo = document.getElementById("container-foto"); // Corrigido o espaço que tinha antes do parêntese

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

        // Ativa a nova função passando o índice correspondente
        atualizarMidia(indice);
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove("selecionado");
    }
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove("selecionado");
    }
}

// NOVA FUNÇÃO: Atualiza o container de foto/vídeo
function atualizarMidia(indice) {
    // Exemplo 1: Se você estiver usando classes no CSS para mudar o fundo (ex: .midia-0, .midia-1)
    // Primeiro, removemos qualquer classe de mídia anterior
    fotovideo.className = "";

    // Depois, adicionamos a classe base e a classe do índice atual
    fotovideo.classList.add("container-foto", `midia-${indice}`);
}

// ALTERNAR CONTAINER-FOTO
/*<button id="btnAlternar">Ativar / Desativar</button>
<div id="objeto" class="meu-objeto">
<p style="color: white; text-align: center; padding-top: 80px;">Estou Ativo!</p>
</div>*/

// 1. Seleciona o botão e o objeto no HTML
const botao = document.querySelector(".botao");
const objeto = document.querySelector(".container-foto");

// 2. Cria a função que ativa/desativa
function alternarObjeto() {
    // O 'toggle' adiciona a classe se ela não existir, e remove se ela já existir
    objeto.classList.toggle('ativo');
}

// 3. Escuta o clique do botão para executar a função
botao.addEventListener('click', alternarObjeto);