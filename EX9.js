let valorx1 = document.querySelector("#valorx1");
let valory1 = document.querySelector("#valory1");
let valorx2 = document.querySelector("#valorx2");
let valory2 = document.querySelector("#valory2");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function distanciaxy(){
    let x1 = Number(valorx1.value);
    let x2 = Number(valorx2.value);
    let y1 = Number(valory1.value);
    let y2 = Number(valory2.value);
    let distancia = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    resultados.innerHTML = 'A distância entre os pontos corresponde à '+distancia+' unidades, arredondando, chegamos à '+(distancia).toFixed(2)+' unidades.';
}

botao.onclick = function(){
    distanciaxy();
}