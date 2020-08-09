var piada = document.querySelector('#pergunta')
var segundaparte = document.querySelector('#resultado')


fetch("https://sv443.net/jokeapi/v2/joke/Dark,Pun?type=twopart")

.then(function(response) {
    return response.json();
})

.then(function(meusdados) {
    console.log(meusdados)
    let piadaobtida = JSON.stringify(meusdados.setup)
    pergunta.innerHTML = piadaobtida
    veresposta = JSON.stringify(meusdados.delivery)
    resultado.innerHTML = veresposta
 })

.catch(err => {
	console.log(err);
});

function mostrar(){
    veresposta.innnerHTML = resposta
 }