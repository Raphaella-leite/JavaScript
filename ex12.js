//. Escreva um programa Javascript para trocar duas variáveis
//Trocar duas variáveis refere-se a trocar mutuamente os valores das variáveis. Geralmente, isso é feito com os dados na memória.

var num1 = parseFloat(prompt("Digite o 1º número"));
var num2 = parseFloat(prompt("Digite o 2º número"));

//Essa variável armazena o valor de num1 antes dele mudar:
var aux = num1;

//Aí sim fazemos:
console.log(alert("ATENÇÃO! Os números foram invertidos:", "<br>"))
console.log(alert("O valor do 1º número agora é: " + (num1 = num2) , "<br>")); 
console.log(alert("O valor do 2º número agora é: " + (num2 = aux)));




    