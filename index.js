var botaomenu = document.querySelector(".icone-menu");
var menulateral = document.querySelector(".menu-lateral");
var botaoenviar = document.querySelector("#enviar");
var enviar_sucesso = document.querySelector(".confirma-envio")
console.log(botaoenviar)
botaomenu.addEventListener("click",()=>{
    menulateral.classList.toggle("menu-lateral-ativo")
})
var botao_x = document.querySelector(".Sair-menu")
botao_x.addEventListener("click",()=>{
    menulateral.classList.remove("menu-lateral-ativo")
})
botaoenviar.addEventListener("click",()=>{
        enviar_sucesso.classList.add("confirma-envio-sucesso")
})