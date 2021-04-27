const dataApi = async () => {
  return new Promise((resolve, reject) => {
    fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
    .then((response) => {
      response.json()
      .then((data) => {
        console.log(data);
        // resolve(data);
      });
    }); 
  });  
};

dataApi();