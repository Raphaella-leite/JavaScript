//6. Escreva um programa Javascript para imprimir a soma (adição), multiplicar, subtrair, dividir e o resto de dois números


var numero1 = parseFloat(prompt("Digite o primeiro numero"));
var numero2 = parseFloat(prompt("Digite o segundo numero"));
var soma = (numero1 + numero2);
var subt = (numero1 - numero2);
var multiplica = (numero1 * numero2);
var divide = (numero1 / numero2);
var resto =(numero1 % numero2);

console.log("A soma dos numeros é: " + soma);
console.log("A subtração dos numeros é: " + subt);
console.log("A multiplicação dos numeros é: " + multiplica);
console.log("A divição dos numeros é: " + divide);
console.log("O resto dos numeros é: " + resto);