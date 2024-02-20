//Escreva um programa Javascript que receba cinco números como entrada para calcular e imprimir a média dos números.

var num1 = parseFloat(prompt("Digite o 1° número"));
var num2 = parseFloat(prompt("Digite o 2° número"));
var num3 = parseFloat(prompt("Digite o 3° número"));
var num4 = parseFloat(prompt("Digite o 4° número"));
var num5 = parseFloat(prompt("Digite o 5° número"));

var média = (num1 + num2 + num3 + num4 + num5)/5;

var resultado = parseFloat(alert("A média dos números digitados é: " + média));
