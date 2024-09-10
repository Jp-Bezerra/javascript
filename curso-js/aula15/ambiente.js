let num = [5, 8, 9, 3]
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O tamanho do vetor é ${num.length}`)
console.log(`O primeiro valor do vetor é o ${num[0]}`)

for(var pos in num){
    console.log(`Na posição ${pos} do vetor, temos o valor ${num[pos]}`)
}

console.log(`O valor 10 está na posição ${num.indexOf(10)}`)