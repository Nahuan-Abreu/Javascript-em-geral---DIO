// condicionais if e else 
/*o comando prompt faz uma caixa de pergunta para que o usuario possa escrever, como se fosse um input*/

var idade = prompt("Qual a sua idade?")
var idade = 18
if(idade > 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
};
/*--------------------------------------- */
// repeticao while.
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count)// podemos repetir o alerta tbm.
    count = count + 1; // posso trocar o  + 1, por  ++ que funciona do mesmo jeito (count ++)
};
/*--------------------------------------------*/
// usando outra forma de repeticao for.

var count = 0;
for (count = 0; count <= 5; count ++){
    alert(count);
};

/*----------------------------------------------------------------------*/
//  usamos o date para poder pegar a hora local.
//Date
// Podemos escolher as data que queremos pegar, apenas o mes, dia, minutos e etc. para isso usamos o comando get.Minute(), get.Month()+1 e etc.
var d = new Date();
alert(d) // data completa, dia da semana, dia/mes/ano, horas/minutos, horario local GMT-0300(Horario Padrão de Brasilia)
alert(d.getMonth()+1)//apenas o Mes 
alert(d.getMinutes())// apenas os minutos
alert(d.getDay())// apenas o dia 
alert(d.getHours())// apenas a hora
alert(d.getFullYear())// o ano completo 2021 e temos muitas mais exemplos




