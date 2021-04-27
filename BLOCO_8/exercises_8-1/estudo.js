const person = {
  name: 'luan',
  age: 29,
  endereço: {
    rua: 'são gonçalo',
    numero: 57
  }
};

const {age: idade} = person;
const {endereço: {rua: street, numero: number}} = person;
const {name: nome} = person;
// const newNome = nome.toLocaleUpperCase
console.log(`${nome.toUpperCase()} mora na rua ${street}, número ${number} e tem ${idade} anos`)