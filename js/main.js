//Introducao
//UMA COISA IMPORTANTE QUE NAO PODEMOS DE ESQUECER, E DE COLOCAR ";" EM CADA FINAL DE LINHA PARA QUE O CODIGO FUNCIONE.
var nome = "Nahuan Abreu ";
var idade = 17;
var idade2 = 18;
var frase = "Japão é o melhor time do mundo"; 
//alert usado para aparecer uma janela de pop-up na pagina.
//alert(nome + "tem " + idade + " anos");
//alert(idade + idade2)

//usamos o console para mostrar a mensagem no console do navegador, como se fosse um print.
console.log(nome);
console.log(idade + idade2);
//usamos o replace para mudar a palavra da frase com no exemplo que trocou de japao para brasil
console.log(frase.replace("Japão", "Brasil"));

// podemos usar o replace no alert tbm
alert(frase.replace("Japão", "Brasil"))

// tambem temos o toUpperCase, usado para colocar todas aletras em maisculas na frase.
console.log(frase.toUpperCase());

// e temos o toLowerCase, que coloca todas as letras em minusculos.
console.log(frase.toLowerCase());
/*---------------------------------------------------------------------------------------------------------------------------*/

// com os numeros podemos fazer qualquer tipos de conta *(multiplicar), /(dividir), +(somar qunado sao apenas numeros, se tiver string ele concatena), - (subtracao ou diminuir/ menos) 
var n1 = 3 
var n2 = 5 
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 + n2);
console.log(n1 - n2);
