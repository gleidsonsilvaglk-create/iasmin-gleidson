const dataInicio = new Date("2017-03-10T00:00:00");

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor(diferenca / (1000 * 60 * 60));

  const contador = document.getElementById("contador");

  if (contador) {
    contador.innerHTML =
      `❤️ ${dias.toLocaleString()} dias juntos<br>
       ⏰ ${horas.toLocaleString()} horas compartilhadas`;
  }
}

setInterval(atualizarContador, 1000);
atualizarContador();
