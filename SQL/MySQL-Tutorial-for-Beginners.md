Most of these notes are taken from online tutorial [MySQL Tutorial for Beginners (3h10m) - March 2019](https://www.youtube.com/watch?v=7S_tz1z_5bA) by **Programming with Mosh**.

# Contents:
* [SELECT](#SELECT)
  * [IN, BETWEEN](#SELECT_IN)
  * [LIKE](#SELECT_LIKE)
  * [REGEXP](#SELECT_REGEXP)
  * [IS NULL](#SELECT_IS_NULL)
  * [ORDER BY](#SELECT_ORDERBY)
  * [LIMIT](#SELECT_LIMIT)
* [INNER JOIN](#INNERJOIN)


## <a name="SELECT"></a>SELECT
```
SELECT * FROM Customers WHERE Name = 'Andrew';
```

```
SELECT
  last_name,
  first_name,
  points,
  points*10+100 AS discount_factor
FROM Customers;
```

If we have duplicates in a column (eg city: New York for more than 2 people) and we don't want to display them, we use DISTINCT:
```
SELECT DISTINCT City
FROM People;
```

**Dates** are written within quotes: 'year-month-day'
```
SELECT *
FROM Customers
WHERE (birth_date > '1990-01-01' AND points > 1000) OR state = 'LA';
```

### <a name="SELECT_IN"></a>SELECT: IN, BETWEEN
```
SELECT *
FROM Customers
WHERE state IN ('VA','GA','LA');

/* is the same as:
WHERE state = 'VA' OR STATE = 'GA' OR STATE = 'LA;
*/
```
```
SELECT *
FROM Customers
WHERE points BETWEEN 1000 AND 3000;

/* is the same as (while includings the ends of range):
WHERE points >= 1000 OR points <= 3000;
*/
```

### <a name="SELECT_LIKE"></a>SELECT: LIKE
Eg.: For a person whose last name starts with 'b'/'B' (it doesn't matter if it's lower or upper case):
```
SELECT * FROM Customers WHERE last_name LIKE 'b%';
```
Eg.: Person whose name ends with '%eanu'
Eg.: Person whose name contains letter '%z%' (it doesn't matter if letter 'z' is at first, middle or end)
Eg.: Person whose name is composed from 3 letters and the second letter is 'n': '\_n\_' (eg Ana)
```
SELECT Prenume, Nume FROM Pacienti WHERE Prenume LIKE '_n_';
```

### <a name="SELECT_REGEXP"></a>SELECT: REGEXP
```
SELECT * FROM Pacienti
WHERE Nume REGEXP 'escu';

/* is the same as WHERE Nume LIKE '%escu%';*/
```
Alte exemple:
* REGEXP '^Munte' --- string-ul trebuie sa inceapa cu 'Munte..."
* REGEXP 'escu$' --- string-ul se termina cu '...escu'
* REGEXP 'eanu|escu' --- string care contine 'eanu' sau 'escu'
* REGEXP '[gim]e' --- orice persoana care contine 'ge' OR 'ie' OR 'me' (echivalent cu REGEXP 'ge|ie|me')
* REGEXP '[a-h]e' --- 'a' to 'h', deci fiecare combinatie 'ae' 'be' ... 'he'

### <a name="SELECT_IS_NULL"></a>SELECT: IS NULL
Get all the records with **missing values**:
```
SELECT * FROM Pacienti
WHERE IdSectie IS NULL;
```

### <a name="SELECT_ORDERBY"></a>SELECT: ORDER BY
By default, liniile sunt ordonate dupa id (Dacă selectezi meniul ALTER TABLE din MySQL al unei tabele, IdPacient va avea langa o cheie aurie - anume PRIMARY KEY)
```
SELECT * FROM Pacienti ORDER BY Nume;
```
Sorteaza descrescator dupa judet apoi dupa nume crescator:
```
SELECT * FROM Pacienti
ORDER BY Judet DESC Nume;
```
```
SELECT first_name, last_name
FROM Customers
ORDER BY 1,2; --- sorteaza pirmele doua coloane precizate in ordine imediat dupa SELECT (de evitat)
```
```
SELECT *, quantity*unit_price AS 'total price'
FROM Order_items
WHERE order_id=2
ORDER BY 'total price' DESC;
```

### <a name="SELECT_LIMIT"></a>SELECT: LIMIT
Get only the first 3/4/7/n customers (rows)
```
SELECT * FROM Customers LIMIT 3;
```
Useful to limit customers per page (eg page1:1-3, page2:4-6 etc)
```
SELECT * FROM Customers
LIMIT 6,3; --- afiseaza maxim 3 persoane si adauga un offset de 6 persoane (skip la primii 6)
```

---

## <a name="INNERJOIN"></a>INNER JOIN
```
SELECT order_id, orders.customer_id, first_name, last_name
FROM orders
JOIN customers ON orders.customer_id = customers.customer_id;
```
```
SELECT * FROM Sectii
JOIN Pacienti ON Sectii.IdSectie = Paciennti.IdSectie;

/* or */

SELECT * FROM Pacienti
JOIN Sectii ON Pacienti.IdSectie = Sectii.IdSectie;

```
| IdPacient | Nume        | Prenume | IdSectie | IdSectie | Nume | Buget |
| --------- | ----------- | ------- | -------- | -------- | --- | ----- |
| 1   | Popescu    | Ana | 1 | 1 | s1 | 5500
| 2   | Munteanu    | Alex | 3 | 3 | s3 | 6000
| 3   |        | | 2 | 2 | s2 | 5200 |
| 4   |         | | 1 | 1 | s1 | 4000 |
