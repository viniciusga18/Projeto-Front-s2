function carregar(id, arquivo) {
    fetch(arquivo)
        .then(res => res.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        });
}
carregar("header", "componentes/header.html");
carregar("hero", "componentes/hero.html");
carregar("cardapio", "componentes/cardapio.html");
carregar("sobre", "componentes/sobre.html");
carregar("contato", "componentes/contato.html");
carregar("saudacao", "componentes/saudacao.html");
carregar("footer", "componentes/footer.html");