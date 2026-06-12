const dataInicio = new Date("2017-03-10T00:00:00");

let etapa = 0;

function iniciarIntro() {

    const intro = document.getElementById("musicaIntro");

    if (intro) {
        intro.play();
    }

    document.getElementById("capa").style.display = "none";
    document.getElementById("tela1").style.display = "flex";
}

function proximaTela() {

    const telas = [
        "tela1",
        "tela2",
        "tela3",
        "tela4",
        "tela5"
    ];

    document.getElementById(telas[etapa]).style.display = "none";

    etapa++;

    if (etapa < telas.length) {
        document.getElementById(telas[etapa]).style.display = "flex";
    }
}

function entrarSite() {

    const intro = document.getElementById("musicaIntro");
    const final = document.getElementById("musicaFinal");

    if (intro) {
        intro.pause();
        intro.currentTime = 0;
    }

    if (final) {
        final.play();
    }

    document.getElementById("tela5").style.display = "none";
    document.getElementById("site").style.display = "block";
}

function atualizarContador() {

    const agora = new Date();
    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor(diferenca / (1000 * 60 * 60));

    const contador = document.getElementById("contador");

    if (contador) {

        contador.innerHTML =
        `❤️ ${dias.toLocaleString('pt-BR')} dias juntos<br>
        ⏰ ${horas.toLocaleString('pt-BR')} horas compartilhadas`;

    }
}

atualizarContador();

setInterval(atualizarContador, 1000);
