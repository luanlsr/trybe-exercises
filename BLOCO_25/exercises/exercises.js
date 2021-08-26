// Exercício 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO".
use('erp');
db.clientes.aggregate([
  {
    $match: {sexo: "MASCULINO"}
  }
]);



// Exercício 2: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005.

use('erp');
db.clientes.aggregate([
  {
    $project: {
      year: {
        $year: "$dataNascimento"
      },
      nome: 1,
      sexo: 1,
      _id: 0,
    },
  },
  {
    $match:
      {
        sexo: "FEMININO",
        year: {$lte: 2005, $gte: 1995}
      }
  },
]);


// Exercício 3: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5.
use('erp');
db.clientes.aggregate([
  {
    $project: {
      year: {
        $year: "$dataNascimento"
      },
      nome: 1,
      sexo: 1,
      _id: 0,
    },
  },
  {
    $match:
      {
        sexo: "FEMININO",
        year: {$lte: 2005, $gte: 1995}
      }
  },
  {$limit: 5}
]);


// Exercício 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.
use('erp');
db.clientes.aggregate([
  {
    $match: {
      "endereco.uf": "SC"
    }
  },
  {
    $group: {
      _id: "$endereco.uf",
      count: {$sum: 1}
    }
  }
]);

// Exercício 5: Agrupe os clientes por sexo . Retorne o total de clientes de cada sexo no campo total .
use('erp');
db.clientes.aggregate([
  {
    $group: {
      _id: "$sexo",
      count: {$sum: 1}
    }
  }
]);

// Exercício 6: Agrupe os clientes por sexo e uf . Retorne o total de clientes de cada sexo no campo total .
use('erp');
db.clientes.aggregate([
  {
    $group: {
      _id: {sexo: "$sexo", uf: "$endereco.uf"},
      count: {$sum: 1}
    }
  },
  {
    $sort: { "_id.uf": 1}
  }
]);

// Exercício 7 : Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):
// Copiar
// {
//   "estado": "SP",
//   "sexo": "MASCULINO",
//   "total": 100
// }

use('erp');
db.clientes.aggregate([
  {
    $group: {
      _id: {sexo: "$sexo", uf: "$endereco.uf"},
      count: {$sum: 1}
    }
  },
  {
    $sort: { "_id.uf": 1}
  },
  {
    $project: {
      estado: "$_id.uf",
      sexo: "$_id.sexo",
      total: "$count",
      _id: 0
    }
  }
]);

// Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.
use('erp');
db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      total: {
        $sum: "$valorTotal"
      }
    }
  },
  {
    $sort: {
      total: -1
    }
  },
  {
    $limit: 5
  }
]);


// Exercício 9 : Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019 .
use('erp');
db.vendas.aggregate([
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'vendaCliente'
    }
  },
  {
    $project: {
      year: {
        $year: "$dataVenda"
      },
      valorTotal: 1,
      nome: "$vendaCliente.nome",
      _id: 0
    }
  },
  {
    $unwind: "$vendaCliente"
  },
  {
    $match: {
      year: 2019
    }
  },
  {
    $sort: {valorTotal: -1}  
  },
  {
    $limit: 10
  }
]);


// Exercício 10 : Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o total de clientes.
// Dica: O operador $count pode simplificar sua query .



// Exercício 11 : Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020 .



// Exercício 12 : Descubra quais as três uf s que mais compraram no ano de 2020 . Retorne os documentos no seguinte formato:
// Copiar
// {
//   "totalVendas": 10,
//   "uf": "SP"
// }




// Exercício 13 : Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf . Retorne os documentos no seguinte formato:
// Copiar
// {
//   "_id": "MG",
//   "mediaVendas": 9407.129225352113,
//   "totalVendas": 142
// }