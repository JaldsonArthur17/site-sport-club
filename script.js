const jogos = [
    { time_casa: 'Santa Cruz', time_visitante: 'Sport', data: '2024-12-10', placar: 'torcedores acreditam que o placar será de 1x2' },
    { time_casa: 'Ponte Preta', time_visitante: 'Sport', data: '2024-12-12', placar: 'torcedores acreditam que o placar será de 0x3' },
];

const noticias = [
    { titulo: 'Clube conquista novo patrocinador!', data: '2024-11-20', conteudo: 'Nosso clube firmou uma nova parceria com uma grande marca!' },
    { titulo: 'Vitória no último jogo!', data: '2024-11-18', conteudo: 'O time venceu o náutico fechando o placar com 3x11 na última partida.' },
];

const forumPosts = [
    { autor: 'João', conteudo: 'Quando será o próximo jogo?', data: '2024-11-21' },
    { autor: 'Maria', conteudo: 'Quais são as expectativas para o time no campeonato?', data: '2024-11-20' },
];

function renderizarJogos() {
    const jogosLista = document.getElementById('jogos-lista');
    jogos.forEach(jogo => {
        jogosLista.innerHTML += `<p>${jogo.time_casa} vs ${jogo.time_visitante} - ${jogo.data} - Placar: ${jogo.placar}</p>`;
    });
}

function renderizarNoticias() {
    const noticiasLista = document.getElementById('noticias-lista');
    noticias.forEach(noticia => {
        noticiasLista.innerHTML += `<h3>${noticia.titulo}</h3><p>${noticia.conteudo}</p><small>${noticia.data}</small>`;
    });
}

function renderizarForum() {
    const forumLista = document.getElementById('forum-posts');
    forumPosts.forEach(post => {
        forumLista.innerHTML += `<p><strong>${post.autor}</strong> - ${post.conteudo} <small>(${post.data})</small></p>`;
    });
}

window.onload = function() {
    renderizarJogos();
    renderizarNoticias();
    renderizarForum();
};
