let raio = document.querySelector("#raio");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function calculararea(){
    let valorraio = Number(raio.value);
    let pi = 3.14;
    let area = pi*(valorraio*valorraio);
    resultados.innerHTML = 'A área é de: '+area;
}

botao.onclick = function(){
    calculararea();
}