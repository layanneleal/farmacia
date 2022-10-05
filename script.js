function mostrarPromocao() {
  //Cria referência aos elementos da página
  let inMedicamento = document.getElementById('inMedicamento')
  let inPreco = document.getElementById('inPreco')
  let outPreco = document.getElementById('outPreco')
  let outMedicamento = document.getElementById('outMedicamento')

  //Obtem conteúdo dos campos de entrada
  let medicamento = inMedicamento.value.toUpperCase()
  let preco = Number(inPreco.value.replace('.', '').replace(',','.'))
  //console.log(preco)

  //Calcula o valor a ser pago com o desconto
  let desconto = Math.floor(preco)
  //console.log(desconto)

  //Altera o conteúdo da linha de resposta
  outMedicamento.textContent = 'Promoção de ' + medicamento 
  outPreco.textContent += 'Leve 2 por apenas R$: ' + desconto
}
  //Cria referência ao elemento btMostrarPromocao
  let btMostrarPromocao = document.getElementById('btMostrarPromocao')
  //Registra um evento associado ao botão, para carregar uma função
  btMostrarPromocao.addEventListener('click', mostrarPromocao)