-- 1. Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor.
SELECT actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) AS fullname, film.title
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS film_actor_id
ON actor.actor_id = film_actor_id.actor_id
INNER JOIN sakila.film AS film
ON film_actor_id.film_id = film.film_id
ORDER BY fullname;


-- 2. Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT staff.first_name, staff.last_name, address.address
FROM sakila.staff AS staff
INNER JOIN sakila.address AS address
ON address.address_id = staff.address_id;


-- 3. Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id 
-- do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT customer.customer_id, LCASE(CONCAT(customer.first_name, ' ', customer.last_name)) AS fullname, LCASE(customer.email), customer.address_id, address.address
FROM sakila.customer AS customer
INNER JOIN sakila.address AS address
ON address.address_id = customer.address_id
ORDER BY fullname DESC
LIMIT 100;



-- 4. Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. 
-- As informações podem ser encontradas nas tabelas address e customer.
SELECT CONCAT(customer.first_name, ' ', customer.last_name) AS fullname, customer.address_id, address.address, address.district
FROM sakila.customer AS customer
INNER JOIN sakila.address AS address
ON customer.address_id = address.address_id
WHERE address.district = 'California' && customer.first_name LIKE '%rene%';


-- 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. 
-- As informações podem ser encontradas na tabela address e customer.
SELECT CONCAT(customer.first_name, ' ', customer.last_name) AS fullname, COUNT(address.address) AS 'QTD de Endereços'
FROM sakila.customer AS customer
INNER JOIN sakila.address AS address
ON address.address_id = customer.address_id
WHERE customer.active = 1
GROUP BY fullname;


-- 6. Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . 
-- Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT staff.first_name, staff.last_name, AVG(payment.amount) AS 'Média Salarial'
FROM sakila.staff AS staff
INNER JOIN sakila.payment AS payment
ON staff.staff_id = payment.staff_id
WHERE payment_date LIKE '2006%'
GROUP BY staff.first_name, staff.last_name;


-- 7. Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . 
-- Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT actor.actor_id;


SELECT f.title, f.rating
FROM (
    SELECT *
    FROM sakila.film
    WHERE rating = 'R'
) AS f;

-- SELF JOIN

-- 1. Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.


-- 2. Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.


-- UNION ALL

-- 1. Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor , exibindo apenas o nome e o sobrenome.
-- Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.


-- 2. Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm
-- "je" na tabela actor . Exiba apenas os resultados únicos.


-- 3. Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição
-- da tabela customer . Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.


-- 4. Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética.
-- Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.


-- EXISTS 

-- 1. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.

-- 2. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.

-- 3. Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.

-- 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes
-- que fizeram compras de carros.

-- EXERCÍCIOS

-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( internationa_sales ) de cada filme.
-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( internationa_sales ) do que vendas nacionais ( domestic_sales ).
-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
