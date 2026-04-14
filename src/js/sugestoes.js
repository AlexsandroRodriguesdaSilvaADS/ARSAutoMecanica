// Carrega os dados ao abrir a página
document.addEventListener('DOMContentLoaded', carregarSugestoes);

function adicionarSugestao() {
    const nomeInput = document.getElementById('nomeUsuario');
    const textoInput = document.getElementById('textoSugestao');
    /*const numeroInput = document.getElementById('numeroContato');*/

    const nome = nomeInput.value.trim();
    const texto = textoInput.value.trim();
    /*const numero = numeroInput.value.trim();*/

    if (nome === "" || texto === "") {
        alert("Por favor, preencha o seu nome e a sugestão.");
        return;
    }

    const novaSugestao = {
        autor: nome,
        conteudo: texto,
        data: new Date().toLocaleDateString('pt-BR')
    };

    // 1. Salvar no LocalStorage
    salvarSugestao(novaSugestao);

    // 2. Exibir na tela
    renderizarSugestao(novaSugestao);

    // 3. Limpar campos
    nomeInput.value = "";
    textoInput.value = "";
}

function renderizarSugestao(sugestao) {
    const lista = document.getElementById('listaSugestoes');

    const card = document.createElement('div');
    card.className = 'sugestao-card';

    card.innerHTML = `
                <span class="sugestao-nome">${sugestao.autor} disse:</span>
                <div class="sugestao-texto">${sugestao.conteudo}</div>
            `;

    // Adiciona sempre no topo
    lista.insertBefore(card, lista.firstChild);
}

function salvarSugestao(sugestao) {
    let banco = JSON.parse(localStorage.getItem('muralDados') || "[]");
    banco.push(sugestao);
    localStorage.setItem('muralDados', JSON.stringify(banco));
}

function carregarSugestoes() {
    let banco = JSON.parse(localStorage.getItem('muralDados') || "[]");
    // Renderiza cada item do banco
    banco.forEach(item => renderizarSugestao(item));
}

function limparHistorico() {
    if (confirm("Tem certeza que deseja apagar todas as sugestões?")) {
        localStorage.removeItem('muralDados');
        document.getElementById('listaSugestoes').innerHTML = "";
    }
}