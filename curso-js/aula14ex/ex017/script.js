function tabuada(){
    var num = window.document.querySelector('input#txtn')
    var tab = window.document.querySelector('select#seltab')

    if(num.value.length == 0){
        window.alert('[ERRO] Digite um número')
    } else{
        var n = Number(num.value)

        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}