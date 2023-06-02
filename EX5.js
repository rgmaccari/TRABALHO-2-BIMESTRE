let precodolitro = document.querySelector("#precodolitro");
let quantoreais = document.querySelector("#quantoreais");
let resultado = document.querySelector("#resultado");
let quantoslitros = document.querySelector("#quantoslitros");

function fazeraconta(){
    let litro = Number(precodolitro.value);
    let reais = Number(quantoreais.value);
    let facada = reais/litro;
    quantoslitros.innerHTML = 'Você conseguirá colocar '+facada+' litros de gasolina em seu tanque.';
}

resultado.onclick = function(){
    fazeraconta();
}