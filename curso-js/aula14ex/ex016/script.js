function contar(){
    var inicio = window.document.querySelector('input#txti').value
    var fim = window.document.querySelector('input#txtf').value
    var passo = window.document.querySelector('input#txtp').value
    var res = window.document.querySelector('div#res')

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else {
        if(Number(passo) <= 0){
            window.alert('Passo inválido! Considerando Passo 1')
            passo = 1
        }

        res.innerHTML = 'Contando: <br>'
        if(inicio < fim){
            for(var i = Number(inicio); i <= Number(fim); i += Number(passo)){
                res.innerHTML += ` ${i} \u{1F449}`
            }
        }else {
            for(var i = Number(inicio); i >= Number(fim); i -= Number(passo)){
                res.innerHTML += ` ${i} \u{1F449}`
            }
        }
        res.innerHTML+= ` \u{1F3C1}`
    }
}