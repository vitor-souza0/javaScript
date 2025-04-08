var idade = Number(prompt("Digite uma idade"))
if (idade< 12){
    alert(`com a idade de ${idade},pode ser considerado: infantil`)
}else if(idade >=12 && idade<=17){
    alert(`com a idade de ${idade},pode ser considerado:adolecente ou aborrecente`)
}else if (idade >=18&& idade <= 64){
    alert(`com a idade de ${idade},pode ser considerado:adulto`)
}else{
    alert(`com a idade de ${idade},pode ser considerado:idoso`)
}