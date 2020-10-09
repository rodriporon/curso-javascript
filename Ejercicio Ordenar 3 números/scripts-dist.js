
const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = prompt('Introduzca el primer número');
let b = prompt('Introduzca el segundo número');
let c = prompt('Introduzca el tercer número');

numbers.textContent = `Los numeros introducidos son ${a}, ${b}, ${c}`

if(a >= b && a >= c) {
    if(b > c) {
        result.textContent = `El orden es: ${a}, ${b}, ${c}`
    }
} else {
    result.textContent = `El orden es: ${a}, ${c}, ${b}`
}