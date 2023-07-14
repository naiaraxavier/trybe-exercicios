-- Utilizando o banco pixar
-- Exercício 1: Encontre as vendas nacionais e internacionais de cada filme
SELECT 
    m.title Filme,
    b.domestic_sales 'Vendas nacionais',
    b.international_sales 'Vendas internacionais'
FROM
    pixar.box_office b
        INNER JOIN
    pixar.movies m ON m.id = b.movie_id;

-- Exercício 2: Faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais do que vendas nacionais
SELECT 
    title,
    (box_office.international_sales + box_office.domestic_sales) Vendas
FROM
    pixar.movies
        INNER JOIN
    pixar.box_office ON pixar.movies.id = box_office.movie_id
WHERE
    box_office.international_sales > box_office.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.

SELECT 
    m.title,
    b.rating
FROM
    pixar.movies m
        INNER JOIN
    pixar.box_office b ON m.id = b.movie_id
ORDER BY
	b.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
	*
FROM
    pixar.theater t
        LEFT JOIN
    pixar.movies m ON m.theater_id = t.name
ORDER BY
	t.name;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.