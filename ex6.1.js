//6. Escreva um programa Javascript para imprimir a soma (adição), multiplicar, subtrair, dividir e o resto de dois números


let opcao = parseFloat(prompt("Escolha a opção desejada: [1]soma [2]subtração [3]divisão [4]multiplicação [5]Resto "));
var numero1 = parseFloat(prompt("Digite o primeiro numero"));
var numero2 = parseFloat(prompt("Digite o segundo numero"));

if(opcao == 1){
    console.log(alert("A soma dos numeros é: " + (numero1 + numero2)));

}else if (opcao == 2){
    console.log(alert("A subtração dos numeros é: " + (numero1 - numero2)));

}else if (opcao == 3){
    console.log(alert("A divisão dos numeros é: " + (numero1 / numero2)));

}else if (opcao == 4){
    console.log(alert("A multiplicação dos numeros é: " + (numero1 * numero2)));

}else if (opcao == 5){
    console.log(alert("O resto dos numeros é: " + (numero1 % numero2)));

}else ((opcao ==0)||(opcao >=6))
console.log(alert("Operação falhou! A opção informada é inválida."));

