// crriando uma lista
//Array
var lista = ["maça", "pera", "laranja"];

//mosntrando a lista inteira.
console.log(lista);

//mostrando apenas uma fruta especifica. a contagem vai de 0 a 2 nesta lista.
console.log(lista[1]);

//podemos fazer a mesma coisa no alert
alert(lista[1]);

//para adicionar um item na lista usamos o comando.
lista.push("uva");

//para remover um item da lista usamos o comando 
lista.pop();

//usamos o leangth para ver o tamanho da lista
console.log(lista.length);

// temos o reverse como o nome ja diz ele tras a lista ao contrario.
console.log(lista.reverse());

// usamos o .tiString, transforma a lista (Array) em string.
console.log(lista.toString());

//usamos o join para trocar o separador da string, por exemplo trocar a virgula por "-"
console.log(lista.join(" - ")); //podemos colocar outras coisas como o | ou o que voce quiser.

/*------------------------------------------------------------------------------------------------------------------------------*/

//Dicionário

//adicionamos um dicionarios para a fruta, ou seja, quando queremos saber a cor da fruta ou nome usamos comando .nome, .cor
var fruta = {nome: "maça", cor: "vermelha"}

//exemplos 
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor)

// podemos fazer uma lista de dicionarios.
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor:"roxa"}]

//exemplos 
console.log(frutas);
console.log(frutas[1].nome);
alert(frutas[1].cor)