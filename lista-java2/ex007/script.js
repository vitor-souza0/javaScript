var money1=Number(prompt("digite um valor me R$: "))
var money2=Number(prompt("digite outro valor me R$: "))
var money3=Number(prompt("digite mais um valor me R$: "))
var soma= money1 + money2 + money3 
var media= soma / 3
alert(media.toLocaleString('pt-br' , {style: 'currency', currency:'BRL'}))