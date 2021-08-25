const reciveNumberOnly = (a, b, c ) => {
  const promise = new Promise((resolve, reject) => {
    if(isNaN(a) || isNaN(b)|| isNaN(c)) {
      return reject(Error("Informe apenas números"))
    }
    const resultado =  ( (a + b) * c )
    if(resultado < 5) {
      return reject(Error("Valor muito baixo"))
    }
    resolve(resultado)
  });
  return promise
}

// reciveNumberOnly(2,6,1)
//   .then((data) => {
//     console.log(data)
// })
//   .catch((err) => {
//   console.error(err.message);
// });

module.exports = reciveNumberOnly
