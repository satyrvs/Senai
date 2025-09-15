
const prompt = require('prompt-sync')({ sigint: true });

var opt;
var estoque;
function saldo() {
    estoque = parseInt(prompt("Informar saldo inicial: "));
    // var cria uma variável global
    //parseint converte string em número inteiro e ainda verifica de é um número válido
    while (isNaN(estoque)) {
        // isNaN verifica se o valor não é um número
        //document.write(estoque);
        console.log(estoque);
        estoque = parseInt(prompt("O Valor inserido é inválido. Por favor, insira um número: "));
    }
    //document.write("Saldo inicial: " + estoque + "</br>");
    console.log("Saldo inicial: " + estoque + "</br>");
}
saldo();

function option() {
    opt = parseInt(prompt(`0 para Encerrar / 1 para Adicionar / 2 para Remover do estoque: </br>
        Informe a opção desejada: `));
    while (isNaN(opt)) {
        console.log("A opção selecionada é inválida");
        //document.write("A opção selecionada é inválida");
        opt = parseInt(prompt((`0 paraEncerrar / 1 para Adicionar / 2 para Remover do estoque: </br>
        Informe a opção desejada: `)));
    }
    console.log("Opção escolhida: " + opt);
}
//option();

function adiciona() {
    var add = parseInt(prompt("Informe a quantidade a adicionar: "));
    while (isNaN(add)) {
        console.log("A quantidade inserida é inválida");
        add = parseInt(prompt("Informe a quantidade a adicionar: "));
    }
    estoque = estoque + add;
    console.log("Saldo atualizado: " + estoque);
    //document.write("Saldo atualizado: " + estoque);
    option();
}   

function remove() {
    var rem = parseInt(prompt("Informe a quantidade a remover: "));
    while (isNaN(rem)) {
        console.log("A quantidade inserida é inválida");
        rem = parseInt(prompt("Informe a quantidade a remover: "));
    }
    estoque = estoque - rem;
    console.log("Saldo atualizado: " + estoque);
    //document.write("Saldo atualizado: " + estoque);
    option();
}

do {
    option();
    switch (opt) {
        case 0:
            console.log("Encerrando...");
            break;
        case 1:
            adiciona ();
            break;
        case 2:
            remove ();
            break;
    }
}while (opt != 0);
















/*
 function IF
function b2ol() {
    let sol = true;
    if (sol) {
        //return sol;
        console.log('Vou nadar!');
    }else{
        console.log('Vou ler!');
    }
   
};

b2ol();

// function age ELSE IF
function age() {
    let idade = 17;
    if (idade >= 18) {
        console.log('Pode entrar na festa');
    }else if (idade < 18 && idade > 16){
        console.log('Pode entrar na festa com acompanhante');
    }else{
        console.log('Não pode entrar na festa');
    }
}
age();

// function switch case

function navegator() {
    let navegador = 'Opera';
    switch (navegador) {
        case 'Edge':
            console.log("You've got the Edge!");
            break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            console.log('Okay we support these browsers too');
            break;
        default:
            console.log('We hope that this page looks ok!');
    }
}
navegator();
*/