// VALIDAÇÃO DO FORMULÁRIO
const formulario = document.getElementById("formSugestao");
if (formulario) {
    formulario.addEventListener("submit", function(event) {
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const jogo = document.getElementById("jogo").value.trim();
        const genero = document.getElementById("genero").value;
        const motivo = document.getElementById("motivo").value.trim();
        // Validação do nome
        const regexNome = /^[A-Za-zÀ-ÿ' -]{3,}$/;
        if (!regexNome.test(nome)) {
            event.preventDefault();
            alert("Digite um nome válido com pelo menos 3 letras.");
            return;
        }
        // Validação do e-mail
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            event.preventDefault();
            alert("Digite um e-mail válido.");
            return;
        }
        // Validação do nome do jogo
        if (jogo.length < 2) {
            event.preventDefault();
            alert("Digite o nome do jogo.");
            return;
        }
        // Validação do gênero
        if (genero === "") {
            event.preventDefault();
            alert("Selecione um gênero para o jogo.");
            return;
        }
        // Validação do motivo
        if (motivo.length < 10) {
            event.preventDefault();
            alert("Escreva pelo menos 10 caracteres no motivo da indicação.");
            return;
        }
    });
}
// RECEBIMENTO DOS DADOS VIA GET
const parametros = new URLSearchParams(window.location.search);
const resultado = document.getElementById("resultado");
if (resultado) {
    const nome = parametros.get("nome");
    const email = parametros.get("email");
    const jogo = parametros.get("jogo");
    const genero = parametros.get("genero");
    const motivo = parametros.get("motivo");
    if (nome && email && jogo && genero && motivo) {
        resultado.innerHTML = `
            <div class="dados-recebidos">
                <p><strong>Nome:</strong> ${escapeHTML(nome)}</p>
                <p><strong>E-mail:</strong> ${escapeHTML(email)}</p>
                <p><strong>Jogo:</strong> ${escapeHTML(jogo)}</p>
                <p><strong>Gênero:</strong> ${escapeHTML(genero)}</p>
                <p><strong>Motivo:</strong> ${escapeHTML(motivo)}</p>
            </div>
        `;
    } else {
        resultado.textContent = "Nenhuma sugestão foi enviada. Preencha o formulário primeiro.";
    }
}
// PROTEÇÃO PARA EXIBIR OS DADOS COMO TEXTO
function escapeHTML(texto) {
    return texto.replace(/[&<>"']/g, function(caractere) {
        const entidades = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        return entidades[caractere];
    });
}