// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Banana', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Laranja', 'Limão', 'Abacaxi'];

const fruitSalad = (fruit, additional) => {
  const fruitSalad = [...fruit, ...additional]
  return fruitSalad
};

console.log(fruitSalad(specialFruit, additionalItens));