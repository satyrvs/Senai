
function saldo() {
    var estoque = parseInt(prompt("Informar saldo inicial"));
    // var cria uma variável global
    //parseint converte string em número inteiro e ainda verifica de é um número válido
    while (isNaN(estoque)) {
        // isNaN verifica se o valor não é um número
        document.write(estoque);
        estoque = parseInt(prompt("O Valor inserido é inválido. Por favor, insira um número."));
    }
    document.write("Saldo inicial: " + estoque + "<br>");
}
saldo();

















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