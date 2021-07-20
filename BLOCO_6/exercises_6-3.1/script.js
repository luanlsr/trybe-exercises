function dataEHora(data = new Date()) {
  let dia = data.getDay();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  let hora = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();

  if (dia <= 9) {
    dia = `0${dia}`
  }
  if (mes <= 9) {
    mes = `0${mes}`
  }
  if (hora <= 9) {
    hora = `0${hora}`
  }
  if (minutos <= 9) {
    minutos = `0${minutos}`
  }
  if (segundos <= 9) {
    segundos = `0${segundos}`
  }

  let fulldate = `${dia}/${mes}/${ano} | ${hora}:${minutos}:${segundos}`

  let date = document.querySelector('.date p');
  date.innerHTML = fulldate;

}

let intervalo = setInterval(dataEHora, 1000)
