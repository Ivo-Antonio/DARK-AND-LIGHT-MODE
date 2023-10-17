function toggleMode() {
    const html = document.documentElement
    
    html.classList.toggle('light');

    // Pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if (html.classList.contains('light')) {
        // Se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
        // Se tiver light mode, mudar o texto 
        img.setAttribute("alt", "foto de perfil fundo azul")
        
    }else{
        // Se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar.png")
        // Se tiver sem light mode, mantem o texto
        img.setAttribute("alt", "foto de perfil fundo amarelo")
    }
}