var valor =Number(prompt("digite o valor da compra"))
var desconto = valor * 0.10

if(valor <100){
    alert(`sua compra deu ${valor.toLocaleString('pt-br' , {style: 'currency', currency:'BRL'})}`)
}else{
    alert(`sua compra deu ${valor.toLocaleString('pt-br' , {style: 'currency', currency:'BRL'})} e foi aplicado um desconto de 10% dando ${desconto.toLocaleString('pt-br' , {style: 'currency', currency:'BRL'})} de desconto`)
}