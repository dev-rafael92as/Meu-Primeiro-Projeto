ArrayNumeros = []

function analisarNumero() {
  //Lógica para pegar o número digitado pelo usuário
  let num = document.getElementById('numero').value;
  //Apagar caixa de texto após a variavel for salva
  document.getElementById('numero').value = '';
  //Tratar o tipo de variável para Number (Caso seja uma letra irá retornar o valor NaN)
  num = parseFloat(num);
  
  //Lógica para apenas aceitar incluir na lista numeros válidos
  if (Number.isNaN(num)) {
    alert('Digite um número!');
  } else if (num.length === 0) {
    alert('Digite um valor valido para Adicionar!');
  } else if (ArrayNumeros.indexOf(num) > -1) {
    alert('Este Valor já foi Adicionado, tente outro!');
  } else if (num > 100) {
    alert('Digite um valor abaixo de 100!');
  } else if (num <= 0) {
    alert('Digite um valor maior que zero!');
  } else {
    document.getElementById('listaResultados').innerHTML = '';
    ArrayNumeros.push(num);
    let x = document.getElementById("flista");
    let option = document.createElement("option");
    option.text = 'Número: ' + num + ' adicionado';
    x.add(option);    
  }
}

function finalizarAplicacao() {
    let soma = ArrayNumeros.reduce((soma, num) => soma + num, 0);

  ArrayNumeros.sort(function(a, b){return b - a});
  let maiorNumero = ArrayNumeros[0];

  ArrayNumeros.sort(function(a, b){return a - b});
  let menorNumero = ArrayNumeros[0];

  let quantNumeros = ArrayNumeros.length;
  let mediaNumeros = soma / quantNumeros;

    document.getElementById('listaResultados').innerHTML = `<hr>A soma de todos os valores é ${soma}! <br><hr>
    O maior número é ${maiorNumero}! <br><hr>
    O menor número é ${menorNumero}!<br><hr>
    A média dos números é ${mediaNumeros}!`
}
