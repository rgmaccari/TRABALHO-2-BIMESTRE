let pesodoprato = document.querySelector("#pesodoprato");
let botao = document.querySelector("#botao");
let valorapagar = document.querySelector("#valorapagar");

function pesagem(){
    let peso = Number(pesodoprato.value);
    let valordokg = 12.00;
    let tara = 0.200;
    let totalapagar = (peso-tara)*valordokg;
    valorapagar.textContent = 'O valor do seu prato é de: R$'+(totalapagar).toFixed(2);
}

botao.onclick = function(){
    pesagem();
}