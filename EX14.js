let valorconta = document.querySelector("#valorconta");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function racharaconta(){
    let conta = Number(valorconta.value);
    let rachaoemtres = Math.floor(conta/3);
/* Math.floor = arredonda para o número inteiro mais próximo */
    let valoresfechados = conta-(rachaoemtres*2);
/* Multiplica o rachao ja arredondado por 2 = Andre e Carlos */
/* Subtrai o valor total da conta, o que sobrar é do Felipe */
/* Números inteiros */
    resultados.innerHTML = 'Felipe pagará R$'+valoresfechados+
    '. Enquanto André e Carlos pagarão R$'+rachaoemtres+
    ' cada.';
}
botao.onclick = function(){
    racharaconta();
}