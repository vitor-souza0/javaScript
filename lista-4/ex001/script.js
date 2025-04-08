var quantidade = Number(prompt("digite a quantidade de maçãs que voce quer comprar"))
var menos = quantidade * 1.30
var mais = quantidade * 1.00
 if (quantidade < 12 ){
    alert(`você comprou ${quantidade} e saira por ${menos.toLocaleString('pt-br' , {style: 'currency', currency:'BRL'})}`)
 }
 else {
    alert(`você comprou ${quantidade} e saira por ${mais.toLocaleString('pt-br' , {style: 'currency', currency:'BRL'})}`)
 }