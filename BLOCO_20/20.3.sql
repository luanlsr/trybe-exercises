-- SELECT * FROM sakila.actor;
-- WHERE last_name = 'DAVIS' AND first_name = 'SUSAN';
-- WHERE last_name = 'DAVIS' OR first_name = 'SUSAN';

-- SELECT * FROM sakila.film
-- WHERE length > 50
-- ORDER BY title;

-- 1. Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';

-- 2. Mostre todos os detalhes dos filmes cujas descrições finalizam com china .
SELECT * FROM sakila.film
WHERE description LIKE '%china';

-- 3. Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord .
SELECT * FROM sakila.film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';

-- 4. Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon .
SELECT * FROM sakila.film
WHERE title LIKE '___gon%';

-- 5. Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary .
SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
AND description LIKE '%documentary%';

-- 6. Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito .
SELECT * FROM sakila.film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';

-- 7. Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%'
LIMIT 6;

-- Encontrar todos os detalhes sobre o aluguel dos clientes com os seguintes ids: 269, 239, 126, 399, 142?
SELECT * FROM sakila.rental
WHERE rental_id IN(269, 239, 126, 399, 142);

SELECT * FROM sakila.address
WHERE district IN('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas')
ORDER BY address_id;


-- 1. Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy , ordenados por nome em ordem alfabética.
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

-- 2. Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176 , ordenados em ordem alfabética.
SELECT email FROM sakila.customer
WHERE address_id IN(172, 173, 174, 175, 176)
ORDER BY email;

-- 3. Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005 . Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia , diferente do formato brasileiro, que é dia/mês/ano .
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';

-- 4. Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6 . Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;

-- 5. Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13 . Os resultados devem estar ordenados por título.
SELECT title, rating FROM sakila.film
WHERE rating IN('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;