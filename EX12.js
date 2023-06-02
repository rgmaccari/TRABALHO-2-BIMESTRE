let numerodigitado = document.querySelector("#numerodigitado");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function quantias(){
    let numeral = Number(numerodigitado.value);
    let centenas = parseInt(numeral/100);
    let numeralcentenas = centenas*100;
    let restantecentenas = numeral-numeralcentenas;
    let dezenas = parseInt(restantecentenas/10);
    let numeraldezenas = dezenas*10;
    let dias = numeral-numeralcentenas-numeraldezenas;
    resultados.innerHTML = 'Centenas: '+centenas+';<br>'+
    'Dezenas: '+dezenas+';<br>'+
    'Unidades: '+dias+'.';
}
botao.onclick = function(){
    quantias();
}
