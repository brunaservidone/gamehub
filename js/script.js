// BUSCA DE JOGOS
const campoBusca = document.getElementById("buscaJogos");
if (campoBusca) {
    const jogos = document.querySelectorAll(".jogo-card");
    const semResultado = document.getElementById("semResultado");
    campoBusca.addEventListener("input", function() {
        const pesquisa = campoBusca.value.toLowerCase();
        let encontrados = 0;
        jogos.forEach(function(jogo) {
            const nomeJogo = jogo.querySelector("h3").textContent.toLowerCase();
            const descricao = jogo.querySelector("p").textContent.toLowerCase();
            if (nomeJogo.includes(pesquisa) || descricao.includes(pesquisa)) {
                jogo.style.display = "block";
                encontrados++;
            } else {
                jogo.style.display = "none";
            }
        });
        semResultado.hidden = encontrados > 0;
    });
}
// INTERAÇÃO DA PÁGINA SOBRE
const botaoInfo = document.getElementById("botaoInfo");
if (botaoInfo) {
    botaoInfo.addEventListener("click", function() {
        const mensagem = document.getElementById("mensagemInfo");
        mensagem.textContent =
            "O GameHub foi criado para conectar jogadores, compartilhar experiências e descobrir novos universos através dos games!";
    });
}
