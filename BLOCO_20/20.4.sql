-- INSERT ---------------------------------------------------------

-- 1. Insira um novo funcionário na tabela sakila.staff .
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!

INSERT INTO sakila.actor (first_name, last_name)
VALUES ('Luan','Ramalho');

-- 2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password) VALUES
('Luan', 'Ramalho', (SELECT address_id FROM sakila.address) , 'luan.ramalho@gmail.com', (SELECT store_id FROM sakila.store) , 1, 'luanramalho', 'gjfhgfgssdfudsiu045405'),
('Ramalho', 'Luan', (SELECT address_id FROM sakila.address), 'ramalho.luan@gmail.com', (SELECT store_id FROM sakila.store), 1, 'ramalholuan', 'gjfhgfgssdfudsiu045405');


SELECT * FROM sakila.staff;

---------------------------------------------------

-- 3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO sakila.actor (first_name, last_name) 
SELECT first_name, last_name FROM sakila.customer
LIMIT 5;

SELECT * FROM sakila.actor;

-- 4. Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO sakila.category (name) VALUES
('terror'),
('comédia'),
('suspense'),
('ação'),
('ficção científica');

SELECT * FROM sakila.category;

-- 5. Cadastre uma nova loja na tabela sakila.store.
SELECT * FROM sakila.store;

------------------------------

-- UPDATE ---------------------------------------------------------

-- 1. Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".
SELECT * FROM sakila.actor;

SET SQL_SAFE_UPDATES = 0;
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

-- 2. Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
SET SQL_SAFE_UPDATES = 0;
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

SELECT * FROM sakila.category;

-- 3. Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.
SET SQL_SAFE_UPDATES = 0;
UPDATE sakila.film
SET replacement_cost = 25
WHERE length > 100;

SELECT * FROM sakila.film;

-- 4. Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.
SET SQL_SAFE_UPDATES = 0;
UPDATE sakila.film
SET replacement_cost = (
CASE WHEN(length BETWEEN 0 AND 100) THEN 10
    ELSE 20
END);

SELECT * FROM sakila.film;

-- DELETE ---------------------------------------------------------
-- 1. Exclua do banco de dados o ator com o nome de "KARL".
SELECT * FROM sakila.film_actor;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'KARL';

SELECT * FROM sakila.actor;

-- 2. Exclua do banco de dados os atores com o nome de "MATTHEW".
SELECT * FROM sakila.film_actor;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM sakila.film_actor
WHERE actor_id IN(SELECT actor_id FROM sakila.actor
WHERE first_name = 'MATTHEW');

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

SELECT actor_id FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- 3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
-- 4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .
-- 5. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
-- 6. Exclua o banco de dados e o recrie (use as instruções no início desta aula).