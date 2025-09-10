/*
 LISTA DE ESTUDANTES
Você deverá:
1. guardar uma lista de estudantes com o nome de cada aluno/aluna;
2. apresentar o nome de cada aluno inserido.
Somente poderá ser inserido aluno na lista, caso a quantidade de alunos não tenha ultrapassado 5.

● Revisitando os conhecimentos
Conforme você viu, nós utilizamos uma linguagem de programação para resolvermos problemas do cotidiano, de um produto ou solução.
Essas linguagens possuem uma sintaxe específica, utilizando os mesmos recursos vistos até aqui. Estruturas de decisão, repetição, estruturas de dados e outros conhecimentos, como operadores lógicos e aritméticos.
    */

/*
LET declara variáveis locais
let nomeEstudante = "Helena";
console.log(nomeEstudante);

CONST declara variáveis que não podem ser reatribuídas
const nomeDoEstudante = "Helena";
console.log(nomeDoEstudante);

VAR declara variáveis globais
var nomeDoEstudante = "Helena";
console.log(nomeDoEstudante);
*/
//arrays ou listas
let listaDeEstudantes = ["Helena", "Chico", "Mário"];
console.log("Essa é a lista de estudantes: " + listaDeEstudantes);
//comprimento da lista
let quantidadeDeEstudantes = listaDeEstudantes.length;
console.log("A quantidade de estudantes é: " + quantidadeDeEstudantes);
/*for para percorrer a lista
for (let #declara uma variável local# 
    indice #variável indice responsável por armazenar o indice do array#
    = 0 #valor inicial do indice do array, lembrando que a primeira posição é sempre o zero#;
    #criação da regra do for# indice #variável indice do array# 
    < #Operador matemático usado para definir a relação# 
    #valor utilizado para definir o final do for# listaDeEstudantes.length #length conta o tamanho do array#;
    #Define que o indice será incrementado a cada laço do for, sendo a contração do comando: indice = indice + 1 indice++) 
    {
    console.log(listaDeEstudantes[i]);
}
*/
for (let indice = 0; indice < quantidadeDeEstudantes; indice++) {
	const alunoCorrente = listaDeEstudantes[indice];
	console.log("Esse é o aluno no laço FOR: " + alunoCorrente);
}
//Atribuição de valor a variável local inicio
let inicio = 0;
/*
Estrutura de repetição Do While, vale ressaltar que nesse tipo de laço a condição é verificada ao final do bloco
O bloco de comandos é executado pelo menos uma vez de forma obrigatória, independente do resultado da expressão lógica
*/
do {
	//imprime o valor do array na posição inicio
    console.log("Esse é o aluno no laço DO WHILE: " + listaDeEstudantes[inicio]);
    //conforme explicado acima o comando é a contração do comando: inicio = inicio + 1 e incrementa a variável em 1 a cada laço
	inicio++;
    //condição para o laço continuar, enquanto inicio for menor que a quantidade de estudantes
} while (inicio < quantidadeDeEstudantes);

//estrutura de repetição while, vale ressaltar que nesse tipo de laço a condição é verificada no início do bloco

let inicio1 = 0;
while (inicio1 < quantidadeDeEstudantes) {
	console.log("Esse é o aluno no laço WHILE: " + listaDeEstudantes[inicio1]);
	inicio1++;
}

for (let numero = 1; numero <= 10; numero++) {
	console.log("O número no laço FOR é: " + numero);
}
console.log("A quantidade de estudantes antes da inserção do José é: " + quantidadeDeEstudantes);
//inserção de um novo estudante na lista através do metodo PUSH
listaDeEstudantes.push("José");
console.log("Essa é a lista de estudantes após a inserção: " + listaDeEstudantes);
//comprimento da lista
quantidadeDeEstudantes = listaDeEstudantes.length;
console.log("A quantidade de estudantes após a inserção do José é: " + quantidadeDeEstudantes);

//condição para inserção de um novo estudante na lista
if (quantidadeDeEstudantes < 5) {
	listaDeEstudantes.push("Manoel");
    quantidadeDeEstudantes = listaDeEstudantes.length;
    console.log("A quantidade de estudantes após a inserção do Manoel é: " + quantidadeDeEstudantes);
}
console.log("Essa é a lista de estudantes após a inserção com IF: " + listaDeEstudantes);

//condição para inserção de um novo estudante na lista
if (quantidadeDeEstudantes < 5) {
	listaDeEstudantes.push("Maria");
    quantidadeDeEstudantes = listaDeEstudantes.length;
    console.log("A quantidade de estudantes após a inserção do Maria é: " + quantidadeDeEstudantes);
}
console.log("Essa é a lista de estudantes após a inserção com IF: " + listaDeEstudantes);

if (quantidadeDeEstudantes < 5) {
	listaDeEstudantes.push("João");
    quantidadeDeEstudantes = listaDeEstudantes.length;
    console.log("A quantidade de estudantes após a inserção do João é: " + quantidadeDeEstudantes);
	console.log("Essa é a lista de estudantes após a inserção com IF and ELSE: " + listaDeEstudantes);
} else {
	console.log("Não é possível inserir mais alunos nessa turma");
}

const notas = [10, 6, 8];

for (let index = 0; index < notas.length; index++) {
       const elemento = notas[index];
       console.log(elemento);
   }
let indice = 0;
   while (indice < 3) {
       console.log(notas[indice]);
       indice++;
   }
