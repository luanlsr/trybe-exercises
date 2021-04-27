const btn = document.getElementById('btn');
btn.addEventListener('click', (event) => onClick(event))

const onClick = async (event) => {
  event.preventDefault();
  let input = document.getElementById('input-cep')
  let address =  await searchCep(input.value)
  setAddress(address)
}

const searchCep = (cep) => {
  return new Promise((resolve, reject) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      response.json()
      .then((data) => {
        // setAdress(data);
        resolve(data);
        console.log(data);
      });
    });
  })
}

const setAddress = (address) => {
  let div = document.getElementById('result')
  div.innerHTML = `${address.logradouro}, ${address.bairro} - ${address.localidade}/ ${address.uf} `
}