-- STRINGS

-- 1. Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('trybe');

-- 2. Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

-- 3. Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer'.
SELECT LENGTH('Uma frase qualquer');

-- 4. Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

-- 5. Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');


-- CONDICIONAIS

-- 1. Usando o IF na tabela sakila.film , exiba o id do filme , o título e uma coluna extra chamada 'conheço o filme?' 
-- , em que deve-se avaliar se o nome do filme é ' ACE GOLDFINGER '. Caso seja, exiba "Já assisti a esse filme". 
-- Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.
SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme')
AS 'conheço o filme?'
FROM sakila.film;
-- 2. Usando o CASE na tabela sakila.film , exiba o título , a classificação indicativa ( rating ) e uma coluna extra que vamos 
-- chamar de 'público-alvo' , em que classificaremos o filme de acordo com as seguintes siglas:
	-- G: "Livre para todos";
	-- PG: "Não recomendado para menores de 10 anos";
	-- PG-13: "Não recomendado para menores de 13 anos";
	-- R: "Não recomendado para menores de 17 anos";
	-- Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".
SELECT title, rating,
CASE
	WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
    ELSE 'Proibido para menores de idade'
END AS 'público-alvo?'
FROM sakila.film;

-- FUNÇÕES MATEMÁTICAS

-- 1. Monte uma query que gere um valor entre 15 e 20.
-- 2. Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
-- 3. Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
-- 4. Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?


-- DATAS

-- 1. Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
-- 2. Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00' .


-- FUNÇÕES DE AGREGAÇÃO

-- 1. Monte um query que exiba:
	-- A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
	-- A duração mínima dos filmes como 'Duração Mínima';
	-- A duração máxima dos filmes como 'Duração Máxima';
	-- A soma de todas as durações como 'Tempo de Exibição Total';
	-- E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.

-- GROUP BY E HAVING

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;


-- 1. Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.

-- 2. Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja.
--  Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes por status .

-- 3. Monte uma query que exiba a média de duração por classificação indicativa ( rating ) dos filmes cadastrados na tabela sakila.film.
-- Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.

-- 4. Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.