let data1 = document.querySelector("#data1");
let data2 = document.querySelector("#data2");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function quantosdias(){
    let dia = Number(data1.value);
    let mes = Number(data2.value);
    let diasnomes = 30;
    let quantosdiassepassaram = dia+((mes*diasnomes)-30);
    resultados.innerHTML = quantosdiassepassaram;
}

botao.onclick = function(){
    quantosdias();
}