let camisetaspequenas = document.querySelector("#camisetaspequenas");
let camisetasmedias = document.querySelector("#camisetasmedias");
let camisetasgrandes = document.querySelector("#camisetasgrandes");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function valoresfinais(){
    let tamanhop = Number(camisetaspequenas.value);
    let tamanhom = Number(camisetasmedias.value);
    let tamanhog = Number(camisetasgrandes.value);
    let precop = 10.00;
    let precom = 12.00;
    let precog = 15.00;
    let ganhostotais = (tamanhop*precop)+(tamanhop*precom)+(tamanhop*precog);
    resultados.textContent = 'Somando todas as vendas, o total arrecadado será de R$'+ganhostotais+',00';
}
botao.onclick = function(){
    valoresfinais();
}