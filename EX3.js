let paes = document.querySelector("#paes");
let broas = document.querySelector("#broas");
let botao = document.querySelector("#botao");
let resultadosfinais = document.querySelector("#resultadosfinais");

function calculospadeiro(){
    let paozinho = Number(paes.value);
    let oqebroas = Number(broas.value);
    let valorpao = 0.12;
    let valorbroa = 1.50;
    let lucropaes = paozinho*valorpao;
    let lucrobroa = oqebroas*valorbroa;
    let vendastotais = lucropaes+lucrobroa;
    let poupanca = 10/100;
    let depositonapoupanca = (vendastotais*poupanca).toFixed(2);
    resultadosfinais.innerHTML =
    'Valor arrecadado com os pães: '+'R$'+lucropaes+'<br>'+
    'Valor arrecadado com as broas: '+'R$'+lucrobroa+'<br>'+
    'Valor total arrecadado: '+'R$'+vendastotais+'<br>'+
    'Valor a ser depositado na conta poupança: '+'R$'+depositonapoupanca;
}
botao.onclick = function(){
    calculospadeiro();
}
