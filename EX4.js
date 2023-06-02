let nome = document.querySelector("#nome");
let ano = document.querySelector("#idade");
let descubra = document.querySelector("#descubra");
let dias = document.querySelector("#dias");

function diasvividos(){
    let nascimento = Number(idade.value);
    let fulano = String(nome.value);
    let diasporano = 365;
    let diasdevida = nascimento*365;
    dias.innerHTML = fulano+', '+'você já viveu '+diasdevida+' dias!';
}

descubra.onclick = function(){
    diasvividos();
}