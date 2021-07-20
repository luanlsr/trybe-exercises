import React from 'react';
import UserProfile from './UserData';

class App extends React.Component {
  render() {
    const users = [
      {
        nome: 'Luan',
        idade: 29,
        email: 'luan.ramalhosilva@gmail.com',
        time: 'Flamengo',
        endereço: {
          rua:'São Gonçalo',
          numero: 57,
          cidade: 'Nilópolis',
          estado: 'Rio de Janeiro',
        },
        telefone: `(21) 97010-6538`
      },
      {
        nome: 'Luan',
        idade: 29,
        email: 'luan.ramalhosilva@gmail.com',
        time: 'Flamengo',
        endereço: {
          rua:'São Gonçalo',
          numero: 57,
          cidade: 'Nilópolis',
          estado: 'Rio de Janeiro',
        },
        telefone: `(21) 97010-6538`
      },
      {
        nome: 'Luan',
        idade: 29,
        email: 'luan.ramalhosilva@gmail.com',
        time: 'Flamengo',
        endereço: {
          rua:'São Gonçalo',
          numero: 57,
          cidade: 'Nilópolis',
          estado: 'Rio de Janeiro',
        },
        telefone: `(21) 97010-6538`
      }
    ];
    return (
      users.map((user) => 
        <div className="App">
          <UserProfile xablau={ user } />
        </div>
      )
    )
    
  }
}

export default App;































// import React from 'react';

// class App extends React.Component {
//   render() {
//     const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne','miojo',];
//     const items = shoppingList.map((item, index) => {
//       console.log("item: ", item);
//       return (<li key={index}>{ item }</li>);
//     });

//     return (
//       <div>
//         <h2>Lista de compras</h2>
//         <ul>
//           { items }
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;