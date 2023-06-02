let ex1comprimento = document.querySelector("#ex1comprimento");
let ex1largura = document.querySelector("#ex1largura");
let ex1botaoarea = document.querySelector("#ex1botaoarea");
let ex1mostrararea = document.querySelector("#ex1mostrararea");

function ex1calcular(){
    let comp = Number(ex1comprimento.value);
    let larg = Number(ex1largura.value);
    let calculo = comp*larg;
    ex1mostrararea.innerHTML = 'A área do terreno é de '+calculo+'m².';
}

ex1botaoarea.onclick = function(){
    ex1calcular();
}