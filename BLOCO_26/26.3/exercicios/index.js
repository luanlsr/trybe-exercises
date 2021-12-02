const verifyNumber = (num) => {
  if(typeof num === 'string') {
    
  }
  if(num > 0) {
    return 'positivo';
  }
  if(num < 0) {
    return 'negativo';
  }
  return 'neutro';
}

module.exports = verifyNumber