document.addEventListener('DOMContentLoaded', function () {
    console.log('TechZone carregado com acessibilidade.');

    let fonteAtual = 100;

    window.alterarFonte = function (acao) {
        if (acao === '+') fonteAtual += 10;
        if (acao === '-' && fonteAtual > 60) fonteAtual -= 10;
        document.body.style.fontSize = fonteAtual + '%';
    };

    window.toggleContraste = function () {
        document.body.classList.toggle('daltonico');
    };
});
