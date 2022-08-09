const botoes = document.querySelectorAll("[data-controle]");
var valor = document.querySelector("[data-valor]")
const materiais ={
    "plastico":16,
    "metal" : 2,
    "papel": 1,
    "vidro" : 16
}
botoes.forEach((elemento)=>{
    elemento.addEventListener("click",(evento)=>{
        manipulaDados(elemento.textContent,elemento.parentNode);
        valorTotal(evento.target.dataset.controle,elemento.textContent)
    })
})
function manipulaDados(texto,parente){
var quantidade = parente.querySelector("[data-quantidade]")
if(texto==="-"){
    if(quantidade.textContent>0){
     quantidade.textContent = parseInt(quantidade.textContent)-100;
    }
}
else{
    quantidade.textContent = parseInt(quantidade.textContent)+100;
}
}
function valorTotal(peca,operacao)
{
    console.log(valor)
    if(operacao==="-"&&parseInt(valor.textContent)>0){
        valor.textContent= parseInt(valor.textContent)-materiais[peca]
    }
    else if(operacao==="+"){
        valor.textContent= (parseInt(valor.textContent)+materiais[peca])
    }
}