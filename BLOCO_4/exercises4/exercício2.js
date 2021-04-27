function retornaMaiorIndex(array){
  let maiorIndex = 0
  for(let index = 0; index < array.length; index += + 1){
    if(array[index] > array[maiorIndex]){
      maiorIndex = index
    }
  }
  return maiorIndex;
}
console.log(retornaMaiorIndex([2, 3, 6, 7, 10, 1]))