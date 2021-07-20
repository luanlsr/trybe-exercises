let longestWord = (string) => {
  let stringSplited = string.split(' ');
  let wordsLength = 0;
  let longest = '';

  for (let string of stringSplited) {
    if (string.length > wordsLength) {
      wordsLength = string.length;
      longest = string;
    }
    
  }
  return longest;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
