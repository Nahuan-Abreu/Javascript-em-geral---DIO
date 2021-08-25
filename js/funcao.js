/* a funcao funciona bem simples, eu estou mando fazer uma funcao em uma variavel 'soma' e estou passando tuas tarefas n1, n2. Dentro da funcao estou pedindo para que ele me retorne o valor da soma entre n1 e n2. Os valores que eles recebm para somar estar no alert que sao o 5 e o 10.*/

//a funcao praticamente manda a variavel oq ela tem q fazer e retorna para a varialvel com o valor novo.

function soma (/*parametros*/n1, n2){
    /*retorno*/ return n1 + n2;/*ação*/
}

/*chamada*/alert(soma(/*adicionando o valor*/5/*n1*/ ,10/*n2*/))

function validaIdade(idade/* Parametro */){
    /* Ação */
    var validar;
    if (idade >= 18){
        validar = true

    }else{
        valida = false
    }
    /* Retorno */
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade))