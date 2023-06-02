let salario = document.querySelector("#salario");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function calcularsalario(){
    let salariobruto = Number(salario.value);
    let aumento = salariobruto*0.15;
    let novosalario = salariobruto+aumento;
    let desconto = novosalario*0.08;
    let salarioliquido = novosalario-desconto;
    resultados.innerHTML = 'Utilizando como base o valor de R$ '+salariobruto+', '+
    'o aumento será de R$'+(aumento).toFixed(2)+', '+
    ' deduzindo os impostos (R$'+(desconto).toFixed(2)+
    '), seu novo salário passará a ser de R$'+(salarioliquido).toFixed(2)+'.'
}

botao.onclick = function(){
    calcularsalario();
}