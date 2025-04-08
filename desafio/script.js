var res = document.querySelector(".res"); 
var filme = ["Star Wars", "Harry Potter", "Senhor dos Anéis", "Vingadores", "Batman"];

res.innerHTML = ""; 

for (var i = 0; i < filme.length; i++) {
    res.innerHTML += `<p>${filme[i]}</p>`;}
    