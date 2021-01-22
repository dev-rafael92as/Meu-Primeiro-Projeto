ArrayNumeros = [0]

function analisarNumero() {
  let num = document.getElementById('numero').value
  document.getElementById('numero').value = ''

    
  if (num.length === 0) {
    alert('Digite um valor valido para Adicionar!')
  } else if (ArrayNumeros.indexOf(num) > -1) {
    alert('Este Valor já foi Adicionado, tente outro!')
  } else if (num > 100) {
    alert('Digite um valor abaixo de 100!')
  } else if (num < 0) {
    alert('Digite um valor maior que zero!')
  } else {
    ArrayNumeros.push(num)
    let x = document.getElementById("flista");
    let option = document.createElement("option");
    option.text = 'Número: ' + num + ' adicionado'
    x.add(option);    
  }
  
}

function finalizarAplicacao() {
  console.log(ArrayNumeros)
  ArrayNumeros.forEach(function(valor, indice, array) {
    
    let a = 0
    a += valor 
    document.getElementById('listaResultados').innerHTML = a})
  }
