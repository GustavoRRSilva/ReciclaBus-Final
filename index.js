var botaomenu = document.querySelector(".icone-menu");
var menulateral = document.querySelector(".menu-lateral");
botaomenu.addEventListener("click",()=>{
    menulateral.classList.toggle("menu-lateral-ativo")
})
var botao_x = document.querySelector(".Sair-menu")
botao_x.addEventListener("click",()=>{
    menulateral.classList.remove("menu-lateral-ativo")
})