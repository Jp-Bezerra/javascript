var lista = []
var res = window.document.querySelector('div#res')

function adicionar(){
    res.innerHTML = ''
    var select = window.document.querySelector('select#selnum')
    var numero = window.document.querySelector('input#txtn').value

    if(numero.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else if(numero < 1 || numero > 100 || lista.indexOf(numero) != -1){
        window.alert('Valor inválido ou já encontrado na lista!')
    } else{
        numero = Number(numero)
        lista.push(numero)
        var item = document.createElement('option')
        item.text = `Valor ${numero} adicionado`
        select.appendChild(item)
    }
}

function finalizar(){
    res.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior(lista)}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor(lista)}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${somar(lista)}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media(lista)}.</p>`
}

function maior(lista){
    var m = -1
    for(pos in lista){
        if(lista[pos] > m){
            m = lista[pos]
        }
    }
    return m
}

function menor(lista){
    var m = 101
    for(pos in lista){
        if(lista[pos] < m){
            m = lista[pos]
        }
    }
    return m
}

function somar(lista){
    var m = 0
    for(pos in lista){
        m+=lista[pos]
    }
    return m
}

function media(lista){
    return somar(lista)/lista.length
}