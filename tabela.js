const botoes = document.querySelectorAll("[data-controle]");
var valor = document.querySelector("[data-valor]")
const materiais ={
    "plastico":0.032,
    "metal" : 0.52,
    "papel": 0.015,
    "vidro" : 0.01
}
botoes.forEach((elemento)=>{
    elemento.addEventListener("click",(evento)=>{
        valorTotal(evento.target.dataset.controle,elemento.textContent,evento.target.parentNode)
        manipulaDados(elemento.textContent,elemento.parentNode);
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
function valorTotal(material,operacao,quantidade)
{
    const quantidades = quantidade.querySelector("[data-quantidade]")
    console.log(quantidades.textContent)
    if(operacao==="-"&&(valor.textContent)>0&&quantidades.textContent>0){
        valor.textContent= parseFloat(valor.textContent)-materiais[material];
        valor.textContent= parseFloat(valor.textContent).toFixed(3);
    }
    else if(operacao==="+"){
        valor.textContent= parseFloat(valor.textContent)+(materiais[material]);
        valor.textContent= parseFloat(valor.textContent).toFixed(3);
    }
}
