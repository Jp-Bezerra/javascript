function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora < 12){
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#d8be85'
    } else if(hora < 18){
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#feb89e'
    } else {
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#221e3d'
    }
}