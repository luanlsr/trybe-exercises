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

-- 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. 
-- As informações podem ser encontradas na tabela address e customer.

-- 6. Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . 
-- Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

-- 7. Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . 
-- Dica: você precisará fazer mais de um JOIN na mesma query .