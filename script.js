// Função para renderizar os jogos
function renderizarJogos(jogos) {
    const jogosLista = document.getElementById('jogos-lista');
    jogosLista.innerHTML = ''; // Limpar lista de jogos antes de renderizar
    jogos.forEach(jogo => {
        jogosLista.innerHTML += `<p>${jogo.time1} vs ${jogo.time2} - ${jogo.data} - Resultado: ${jogo.resultado || 'Aguardando resultado'}</p>`;
    });
}

// Função para renderizar as notícias
function renderizarNoticias(noticias) {
    const noticiasLista = document.getElementById('noticias-lista');
    noticiasLista.innerHTML = ''; // Limpar lista de notícias antes de renderizar
    noticias.forEach(noticia => {
        noticiasLista.innerHTML += `
            <div class="noticia">
                <h3>${noticia.titulo}</h3>
                <p>${noticia.descricao}</p>
                <small>${noticia.data}</small>
            </div>
        `;
    });
}

// Função para renderizar os posts do fórum
function renderizarForum(forumPosts) {
    const forumLista = document.getElementById('forum-posts');
    forumLista.innerHTML = ''; // Limpar lista de posts antes de renderizar
    forumPosts.forEach(post => {
        forumLista.innerHTML += `
            <div class="forum-post">
                <strong>${post.autor}</strong> - ${post.conteudo}
                <small>(${post.data})</small>
            </div>
        `;
    });
}

// Função para buscar os dados da API
function carregarDados() {
    // Carregar os jogos
    fetch('http://localhost:3000/api/jogos')
        .then(response => response.json())
        .then(jogos => {
            renderizarJogos(jogos);
        })
        .catch(error => console.error('Erro ao carregar jogos:', error));

    // Carregar as notícias
    fetch('http://localhost:3000/api/noticias')
        .then(response => response.json())
        .then(noticias => {
            renderizarNoticias(noticias);
        })
        .catch(error => console.error('Erro ao carregar notícias:', error));

    // Carregar os posts do fórum
    fetch('http://localhost:3000/api/forum')
        .then(response => response.json())
        .then(forumPosts => {
            renderizarForum(forumPosts);
        })
        .catch(error => console.error('Erro ao carregar posts do fórum:', error));
}

// Chama a função carregarDados quando a página for carregada
window.onload = function() {
    carregarDados();
};
