var numero = Number(prompt("digite um numero"))
var numero2 = Number(prompt("digite outro numero"))
var numero3 = Number(prompt("digite outro numero"))

if (numero > numero2 && numero > numero3) {
    alert(`O número ${numero} é maior que ${numero2} e ${numero3}`);
} else if (numero2 > numero && numero2 > numero3) {
    alert(`O número ${numero2} é maior que ${numero} e ${numero3}`);
} else {
    alert(`O número ${numero3} é maior que ${numero} e ${numero2}`);
}