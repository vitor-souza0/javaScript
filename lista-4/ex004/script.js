var temperatura = Number(prompt("digite a temperatura"))

if(temperatura < 0){
    alert(`com a temperatura em ${temperatura}, esta muito frio`)
}else if(temperatura >=0 && temperatura <= 20){
    alert(`com a temperatura em ${temperatura},  esta frio`)
}else if(temperatura >=21 && temperatura <= 30){
    alert(`com a temperatura em ${temperatura},esta agradavel `)
}else{
    alert(`com a temperatura em ${temperatura},está calor demais`)
}