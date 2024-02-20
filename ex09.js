//Escreva um programa Javascript para imprimir a área e o perímetro de um círculo
//Em geometria, a área delimitada por um círculo de raio r é πr2. Aqui a letra grega π representa uma constante, aproximadamente igual a 3,14159, que é igual à razão entre a circunferência de qualquer círculo e seu diâmetro.
//A circunferência de um círculo é a distância linear em torno de sua borda.


var raio = parseFloat(prompt("Digite o valor do Raio do círculo"));
var comprimento = 2 * Math.PI * raio;
var area = Math.PI * raio * raio;

   console.log(alert("Comprimento da circunferencia = " + comprimento, "<br>"));
   console.log(alert("Area da circunferencia = " + area));