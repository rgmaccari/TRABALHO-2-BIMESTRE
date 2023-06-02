let diassemacidentes = document.querySelector("#diassemacidentes");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function tempo(){
    let todososdias = Number(diassemacidentes.value);/* Exemplo: 4688 */
    let anos = parseInt(todososdias/365);
/* 4688/365 = 12,84... parseInt pega só os números antes da vírgula*/
    let oquerestoudosanos = todososdias-(anos*365);
/* 4688-(12*365)
4688 - 4380 = 308*/
    let meses = parseInt(oquerestoudosanos/30);
/* 308/30 =  10,26 ---> parseInt pega só o 10*/
    let dias = oquerestoudosanos-(meses*30);
/* 308-(10*30)
308-300 = 8 */
    resultados.innerHTML = 
    'Anos: '+anos+'.<br>'+
    'Meses: '+meses+'. <br>'+
    'Dias: '+dias+'.'
}

botao.onclick = function(){
    tempo();
}

/* 
                        Exemplo: 4688 dias
4688/365 = 12,84
... parseInt pega só os números antes da vírgula, logo = 12 anos
4688-(12*365)
4688-4380 = 308
308/30 =  10,26 ---> parseInt pega só o 10
308-(10*30)
308-300 = 8
*/
