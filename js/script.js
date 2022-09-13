let listou = []
let calcular = document.querySelector('#calcular')
calcular.addEventListener('click', Calculando)
let limpar = document.querySelector('#limpar')
limpar.addEventListener('click', Limpando)
let lista = document.getElementById('lista').value

function Calculando(){
    let d = Number.parseFloat(document.getElementById('deslocamento').value)
    let t = Number.parseFloat(document.getElementById('tempo').value)
    let res = ("A Velocidade Média é: " + (d / t) + " km/h")
    document.getElementById('resposta').value = res
    //let respostaFixed = res.toFixed(3)
    document.getElementById("lista").innerHTML += res + "<br>"

}

function Limpando(){
    d = (" ")
    t = (" ")
    res = (" ")
  document.getElementById('deslocamento').value = d
  document.getElementById('tempo').value = t
  document.getElementById('resposta').value = res
}

for(let i=0; i<3; i++){
    lista = documento.getElementById('lista').value
    res = document.getElementById('resposta').value
   // listou.push([res])
   // lista.innerHtml = (listou[i])
}
