function calculoImc(peso, altura) {
  let alt = altura
  if(altura > 9.9) {
    alt = altura / 100
  }

  const imc = (peso / (alt * alt)).toFixed(1)
  return imc
}

module.exports = calculoImc