// let pai = document.getElementById('primeiroFilhoDoFilho').parentNode
//   pai.parentNode.
// console.log(pai);

let brothers = [
  'Luan',
  'Vanessa',
  'Ana',
  'Raphael'
];

  let brother = document.getElementById('elementoOndeVoceEsta2');

  for (let index = 0; index < brothers.length; index += 1){
    let brow = brothers[index];
    
    let brothersList = document.createElement('li');
    brothersList.innerText = brow;

    brother.appendChild(brothersList);
  }
