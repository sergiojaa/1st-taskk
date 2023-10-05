// pirveli davaleba
function hereti(a, b) {
    if(a === b){
        console.log('ტოლია')
    }else {
        console.log('არ არის ტოლი')
    }
}

// meore davaleba
function farenheit(celsius){
    if(typeof celsius !== 'number'){
        return false
    }else{
        return  (celsius * 9/5) + 32
    }
}

console.log(farenheit(10))

// mesame davaleba
function opera(a, b, operation){
    if(operation === '-'){
        return a - b;
    }
    if(operation === '+'){
        return a + b;
    }
    if(operation === '*'){
        return a * b;
    }
    if(operation === '/'){
        return a / b;
    }
    if(typeof a !== 'number' && typeof b !== 'number' ){
        return false
    }
}
console.log(opera(5, 10, '+'))

