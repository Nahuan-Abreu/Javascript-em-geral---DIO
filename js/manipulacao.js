//document.getElementById("agradecimento"). Usamos para chamar o elemento h3 que esta nomiado de agradecimento e passar o comando que vai dentro dele (h3)
// a funcao innerHTML serve para adcicionar o que esta escrito nele no html ao clicar no botao, injeta um comando html dentro da tag.
// ao clicar no botao, ira aparecer uma nova linha escrito "Obrigado por clicar" na pagina.

function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //alert("Obrigado por clicar")
}

//Redirecionamento de pagina.

function redirecionar(){
    //o window.open faz abrir uma nova guia com o link do redirecionamento
    window.open("https://google.com")

    //o window.local faz abrir o link na mesma pagina.
    window.location.href = "https://google.com"
}

//funcao faz o texto mudar quando passamos o mouse
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"

    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"

}
// quando carrega a pagina o codigo e executado. onload.
function load(){
    alert("Pagina carregada")
}

// usado para quando trocar de valor, aparecer para qual valor for trocado. onchange
function funcaoChange(elemento){
    console.log(elemento.value)
}