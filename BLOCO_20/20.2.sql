USE sakila;
SELECT COUNT(DISTINCT first_name) FROM actor; /*Devolve a quantidade de first_name distintos um do outro*/
SELECT DISTINCT first_name FROM actor; /*Devolve todos os first_name sem repetições*/
SELECT CONCAT(first_name, ' ', last_name) AS 'Fullname' FROM actor;