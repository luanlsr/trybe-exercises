function verificaPalindrome(palavra){
  let reverso = palavra.split('').reverse().join('');
  if (reverso === palavra){
    return true
  }else{
    return false

  }
}

console.log(verificaPalindrome('arara'));