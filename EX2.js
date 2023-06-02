let quantoscavalos = document.querySelector("#quantoscavalos");
let botaocalculo = document.querySelector("#botaocalculo");
let quantasferraduras = document.querySelector("#quantasferraduras");

function calcular(){
    let cavalos = Number(quantoscavalos.value);
    let ferraduras = 4;
    let calculo = cavalos*ferraduras;
    quantasferraduras.innerHTML = 'Devem ser adquiridas '+calculo+' ferraduras.';
}

botaocalculo.onclick = function(){
    calcular();
}