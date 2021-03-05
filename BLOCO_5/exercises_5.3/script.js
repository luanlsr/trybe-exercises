window.onload = function() {
  let button = document.getElementById('start-race-btn');
  let car1 = document.querySelector('.car1');
  let car2 = document.querySelector('.car2');
  
  
  car1.style.marginLeft = 0;
  car2.style.marginLeft = 0;
  resetCars(car1, car2);
  
  button.addEventListener('click', function () {
    car1.style.marginLeft = (parseInt(car1.style.marginLeft) + (Math.random() * 100) + 'px');
    car2.style.marginLeft = (parseInt(car1.style.marginLeft) + (Math.random() * 100) + 'px');

    if(parseInt(car1.style.marginLeft) > 1480) {
      alert('Carro VERMELHO GANHOU!');
      resetCars(car1, car2);
    }
    if(parseInt(car1.style.marginLeft) > 1480) {
      alert('Carro AZUL GANHOU!');
      resetCars(car1, car2);
    }
  });
}
function resetCars(car1, car2) {
  car1.style.marginLeft = 0;
  car2.style.marginLeft = 0;
}

// function ShowRedWinner() {
//   let winnerCar = document.getElementsByClassName('center');
//   let mensage = 'O Carro Vermelho Ganhou!!!';
//   let redWinner = document.createElement('h1');

//   redWinner.innerText = mensage
//   winnerCar.appendChild(redWinner)

//   redWinner.style.color = 'red';
//   redWinner.style.fontSize = 'larger';
//   redWinner.style.fontWeight = 'bold';
//   redWinner.style.textAlign = 'center';
//   redWinner.style.marginTop = '400px';
//   redWinner.style.position = 'absolute';

// }