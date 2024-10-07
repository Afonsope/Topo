// Captura o elemento (Botão Subir)
const scrollTopButton = document.getElementById("scrollTop")
// Adiciona um ouvinte aguardando um click no botão
scrollTopButton.addEventListener("click", () => {
// Subir a tela
window.scrollTo({  
    top:0,
    behavior:"smooth"
    })
})
 
// Exibir o botão quando o site descer mais que 1000px
window.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop > 1000){
        scrollTopButton.style.display = "block"
    }else{
        scrollTopButton.style.display = "none"
    }
})