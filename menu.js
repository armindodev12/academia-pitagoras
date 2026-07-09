let btnmenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
btnmenu.addEventListener('click', ()=> {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu')
})

const frases = [
    "não entende nada",
    "não consegue estudar",
    "tem dificuldades"
];

const texto = document.getElementById("texto");

let frase = 0;
let letra = 0;
let apagando = false;

function escrever() {

    if (!apagando) {

        texto.textContent = frases[frase].substring(0, letra);
        letra++;

        if (letra > frases[frase].length) {
            apagando = true;
            setTimeout(escrever, 1500); // espera antes de apagar
            return;
        }

    } else {

        texto.textContent = frases[frase].substring(0, letra);
        letra--;

        if (letra < 0) {
            apagando = false;
            frase = (frase + 1) % frases.length;
            letra = 0;
        }

    }

    setTimeout(escrever, apagando ? 50 : 100);
}

escrever();