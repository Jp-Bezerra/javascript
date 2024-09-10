function fatorial(n){
    var c = 1
    for(var i = n; i > 1; i--){
        c *= i
    } 
    return c
}

console.log(fatorial(5))