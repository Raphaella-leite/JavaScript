//Escreva um programa Javascript para imprimir a área e o perímetro de um retângulo.
//Um perímetro é um caminho que circunda uma forma bidimensional. A palavra vem do grego peri (ao redor) e metro (medida). O perímetro pode ser usado para calcular o comprimento da cerca necessária para cercar um quintal ou jardim.
//Na geometria plana euclidiana, um retângulo é um quadrilátero com quatro ângulos retos. Para encontrar a área de um retângulo, multiplique o comprimento pela largura.
//Um retângulo com quatro lados de igual comprimento é um quadrado.

var base = parseFloat(prompt("Digite o valor da base do retangulo"));
var altura = parseFloat(prompt("Digite o valor da altura do retangulo"));

area = base*altura;
perimetro = 2*base + 2*altura;

    console.log(alert("A area do retangulo é = " + area, "<br>"));
    console.log(alert("O perimetro do retangulo é = " + perimetro));