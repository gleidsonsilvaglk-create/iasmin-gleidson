function entrarSite(){

document.getElementById("intro").style.display="none";
document.getElementById("site").style.display="block";

const musicaFinal = document.getElementById("musicaFinal");

if(musicaFinal){
    musicaFinal.play();
}

}

const dataInicio = new Date("2017-03-10T00:00:00");

function atualizarContador(){

const agora = new Date();
const diferenca = agora - dataInicio;

const dias = Math.floor(diferenca/(1000*60*60*24));
const horas = Math.floor(diferenca/(1000*60*60));

const contador = document.getElementById("contador");

if(contador){
contador.innerHTML =
`❤️ ${dias.toLocaleString('pt-BR')} dias juntos<br>
⏰ ${horas.toLocaleString('pt-BR')} horas compartilhadas`;
}

}

atualizarContador();
setInterval(atualizarContador,1000);
