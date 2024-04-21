
function tocaSom(IdElementoAudio) {
    document.querySelector(IdElementoAudio).play();
}

// document.querySelector('.tecla_pom').onclick=tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];



    //template string
    const idAudio = `#som_${instrumento}`;


    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

}