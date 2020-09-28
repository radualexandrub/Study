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
  * [JOIN Multiple Tables](#INNERJOIN_MULTIPLE)
  * [COMPOUND JOIN](#INNERJOIN_COMPOUND)
* [OUTTER JOIN](#OUTTERJOIN)
  * [USING](#USING)
* [UNIONS](#UNIONS)
* [INSERT INTO](#INSERT)
  * [INSERT MULTIPLE VALUES INTO A TABLE](#INSERT_MULTIPLE)
  * [INSERT DATA INTO MULTIPLE TABLES](#INSERT_MULTIPLE2)
* [UPDATE](#UPDATE)
  * [UPDATE using **subqueries** in WHERE](#UPDATE2)
* [Create a copy of a table](#CreateCopyTable)
* [DELETE FROM](#DELETE)
* [GROUP BY](#GROUPBY)
  * [HAVING](#HAVING)
* [CREATE TABLE](#CREATETABLE)
  * [CREATE TABLE with Foreign Key](#CREATETABLE_FK)
* [More on subqueries](#moresubqueries)


## Pentru a vedea schema ca model in MySQL WorkBench (EER Diagram):
Meniul *File, Edit, ... -> Database -> Reverse Engineer(CTRL+B) -> next,next,selectezi schema, next, next, execute.*

## <a name="SELECT"></a>SELECT
```SQL
SELECT * FROM Customers WHERE Name = 'Andrew';
```

```SQL
SELECT
  last_name,
  first_name,
  points,
  points*10+100 AS discount_factor
FROM Customers;
```

If we have duplicates in a column (eg city: New York for more than 2 people) and we don't want to display them, we use DISTINCT:
```SQL
SELECT DISTINCT City
FROM People;
```

**Dates** are written within quotes: 'year-month-day'
```SQL
SELECT *
FROM Customers
WHERE (birth_date > '1990-01-01' AND points > 1000) OR state = 'LA';
```

### <a name="SELECT_IN"></a>SELECT: IN, BETWEEN
```SQL
SELECT *
FROM Customers
WHERE state IN ('VA','GA','LA');

/* is the same as:
WHERE state = 'VA' OR STATE = 'GA' OR STATE = 'LA;
*/
```
```SQL
SELECT *
FROM Customers
WHERE points BETWEEN 1000 AND 3000;

/* is the same as (while includings the ends of range):
WHERE points >= 1000 OR points <= 3000;
*/
```

### <a name="SELECT_LIKE"></a>SELECT: LIKE
Eg.: For a person whose last name starts with 'b'/'B' (it doesn't matter if it's lower or upper case):
```SQL
SELECT * FROM Customers WHERE last_name LIKE 'b%';
```
Eg.: Person whose name ends with '%eanu'
Eg.: Person whose name contains letter '%z%' (it doesn't matter if letter 'z' is at first, middle or end)
Eg.: Person whose name is composed from 3 letters and the second letter is 'n': '\_n\_' (eg Ana)
```SQL
SELECT Prenume, Nume FROM Pacienti WHERE Prenume LIKE '_n_';
```

### <a name="SELECT_REGEXP"></a>SELECT: REGEXP
```SQL
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
```SQL
SELECT * FROM Pacienti
WHERE IdSectie IS NULL;
```

### <a name="SELECT_ORDERBY"></a>SELECT: ORDER BY
By default, liniile sunt ordonate dupa id (Dacă selectezi meniul ALTER TABLE din MySQL al unei tabele, IdPacient va avea langa o cheie aurie - anume PRIMARY KEY)
```SQL
SELECT * FROM Pacienti ORDER BY Nume;
```
Sorteaza descrescator dupa judet apoi dupa nume crescator:
```SQL
SELECT * FROM Pacienti
ORDER BY Judet DESC Nume;
```
```SQL
SELECT first_name, last_name
FROM Customers
ORDER BY 1,2; --- sorteaza pirmele doua coloane precizate in ordine imediat dupa SELECT (de evitat)
```
```SQL
SELECT *, quantity*unit_price AS 'total price'
FROM Order_items
WHERE order_id=2
ORDER BY 'total price' DESC;
```

### <a name="SELECT_LIMIT"></a>SELECT: LIMIT
Get only the first 3/4/7/n customers (rows)
```SQL
SELECT * FROM Customers LIMIT 3;
```
Useful to limit customers per page (eg page1:1-3, page2:4-6 etc)
```SQL
SELECT * FROM Customers
LIMIT 6,3; --- afiseaza maxim 3 persoane si adauga un offset de 6 persoane (skip la primii 6)
```

---

## <a name="INNERJOIN"></a>INNER JOIN
```SQL
SELECT order_id, orders.customer_id, first_name, last_name
FROM orders
JOIN customers ON orders.customer_id = customers.customer_id;
```
```SQL
SELECT * FROM Sectii
JOIN Pacienti ON Sectii.IdSectie = Paciennti.IdSectie;

/* or */

SELECT * FROM Pacienti
JOIN Sectii ON Pacienti.IdSectie = Sectii.IdSectie;
```
| IdPacient | Nume        | Prenume | IdSectie | IdSectie | Nume | Buget |
| --------- | ----------- | ------- | -------- | -------- | --- | ----- |
| 1   | Popescu    | Ana | **1** | **1** | s1 | 5500
| 2   | Munteanu    | Alex | **3** | **3** | s3 | 6000
| 3   |     Dobre   | Cosmin | **2** | **2** | s2 | 5200 |
| 4   |     Freeman | John | **1** | **1** | s1 | 4000 |

If we use ALIAS (Obs: Daca o coloana are acelasi nume in cealalta tabelă, trebuie specificata din care tabela faci SELECT (ce coloană afisezi):
```SQL
SELECT p.Nume, Prenume, p.IdSectie, s.Nume, Buget
FROM pacienti p
JOIN Sectii s on p.IdSectie = s.IdSectie;
```
**OBS:** Putem face JOIN si la tabele care se afla in _alte baze de date_ (different database)
```SQL
SELECT * FROM order_items oi
JOIN another_database.products p ON oi.product_id = p.product_id;
```

### <a name="INNERJOIN_MULTIPLE"></a>INNER JOIN: Multiple Tables
```SQL
SELECT * ---o.order_id, o.order_date, c.name, os.name AS status
FROM orders o
JOIN customers c
  ON o.customer_id = c.customer_id
JOIN order_statuses os
  ON o.status = OS.order_status_id;
```

### <a name="INNERJOIN_COMPOUND"></a>COMPOUND JOIN
**INNER JOIN for COMPOSITE PRIMARY KEY --- chei primare compuse, care conțin cel puțin 2 atribute**
| order_items |
| ---------- |
| (PK) order_id |
| (PK) product_id |
| quantity |
| unit_price |
```SQL
SELECT * FROM order_items oi
JOIN order_items_notes oin
  ON oi.order_id = oin.order_id
  AND oi.product_id = oin.product_id;
```

## <a name="OUTTERJOIN"></a>OUTTER JOIN
Util pentru a afișa datele care au NULL la atributul cheie străină (in al doilea tabel)
```SQL
SELECT *
FROM Customers c
LEFT JOIN Orders o
  ON c.customers_id = o.customers_id
ORDER BY c.customers_id;
```
| id | name     | order_id |
|----|----------|----------|
| 1  | Innes    | 7        |
| 2  | Freddy   | NULL     |
| 3  | Carolina | 2        |
| 4  | Elka     | NULL     |

```SQL
SELECT
  c.customer_id
  c.first_name
  o.order_id
FROM customers c
LEFT JOIN orders o
  ON c.customer_id = o.customer_id;
  
/* este echivalent cu */

SELECT
  c.customer_id
  c.first_name
  o.order_id
FROM orders o
RIGHT JOIN customers c
  ON c.customer_id = o.customer_id;
```
OBS: Este de evitat folosirea RIGHT JOIN in special pentru mai mult de 2 tabele deoarece creeaza confuzie.

## <a name="USING"></a>USING
Folosit pentru 2 coloane cu exact acelasi nume (eg: customer_id) - coloane din 2 tabele diferite
```SQL
SELECT * FROM Customers c
LEFT JOIN Orders o
  USING(customer_id);
```

```SQL
SELECT p.Nume, Prenume, P.IdSectie, s.Nume AS Nume_Sectie, Buget
FROM pacienti p
JOIN sectii s
  USING(IdSectie);
```
OBS: USING functioneaza si pentru chei compuse:
```SQL
SELECT *
FROM order_items oi
JOIN order_items_notes oin
  USING(order_id, product_id);
```
| order_items     |                  | order_items_notes |
|-----------------|------------------|-------------------|
| (PK) order_id   |                  | (PK) oin_id       |
| (PK) product_id |                  | attr_etc          |
| price           |                  | (FK) order_id     |
|                 |                  | (FK) product_id   |

---

## <a name="UNIONS"></a>UNIONS
Combine rows from multiple tables
```SQL
SELECT Nume, Prenume
FROM Pacienti
UNION
SELECT Nume, Buget
FROM Sectii;
```
OBS 1: Numarul de coloane returnate din prima tabela trebuie sa fie egal cu numarul de coloane din a doua tabela
```SQL
SELECT Nume as Full_Name
FROM Shippers
UNION
SELECT Name
FROM Customers;
```
OBS 2: Numele coloanei afisate va aparea ca numele coloanei primei tabele

---

## <a name="INSERT"></a>INSERT INTO
OBS: Ordinea contează (The order of attributes matters)
```SQL
INSERT INTO Customers(first_name, last_name, birth_date, address, city)
  VALUES('John', 'Smith', '1990-01-01', 'address1', 'city2');
```
```SQL
INSERT INTO Pacienti(Nume, Prenume, Judet, IdSectie)
  VALUES('Popescu', 'Ion', 'Bacau', 3);
```

### <a name="INSERT_MULTIPLE"></a>INSERT MULTIPLE VALUES INTO A TABLE
```SQL
INSERT INTO pacienti(Nume, Prenume, Judet)
VALUES('Horia', 'Alex', 'Timisoara'),
      ('Popa', 'Raluca', 'Olt');
```

### <a name="INSERT_MULTIPLE2"></a>INSERT DATAINTO MULTIPLE TABLES
| orders           |   | order_items     |
|------------------|---|-----------------|
| (PK) order_id    |   | (PK) order_id   |
| (FK) customer_id |   | (PK) product_id |
| status           |   | quantity        |
| comments         |   | unit_price      |

```SQL
INSERT INTO orders(customer_id, status)
VALUES(1, 1);

INSERT INTO order_items
VALUES(LAST_INSERT_ID(), 1, 11, 2.95),
      (LAST_INSERT_ID(), 2, 3, 0.50);
```
**LAST_INSERT_ID()** = Functie care returneaza ultimul id al randului ultimei tabele in care am introdus
| ###      | orders table | ###    | ===>> | ###      | order_items table | ###      | ###   |
|----------|--------------|--------|-------|----------|-------------------|----------|-------|
| order_id | customer_id  | status |       | order_id | product_id        | quantity | price |
| 1        | 1            | 1      |       | 13       | 1                 | 1        | 2.95  |
|          |              |        |       | 13       | 2                 | 3        | 0.50  |

Cele 2 tabele sunt in relatie parent-child.

---

## <a name="UPDATE"></a>UPDATE
```SQL
UPDATE pacienti
SET Nume='Enache', Prenume='Constatin', IdSectie=4
WHERE IdPacient=20;
```
> Dacă nu scriem WHERE, se va modifica totul! (If we don't include WHERE clause, all the data will be modified!)
```SQL
UPDATE invoices
SET
  payment = invoice*0.5
  payment_date = due_date
WHERE client_id IN(3,4);
```

### <a name="UPDATE2"></a>UPDATE using subqueries in WHERE
Exemplu pentru un tabel care contine numele, orasul, etc ale persoanelor in alt tabel:
```SQL
UPDATE invoices
SET
   payment = invoices_total * 0.5,
   payment_date = due_date
WHERE client_id IN
  (SELECT client_id
  FROM clients
  WHERE city IN ('New York', 'Bucharest'));
```
Exemplu2:
```SQL
UPDATE orders
SET comments = 'Gold Customer'
WHERE customer_id IN
  (SELECT customer_id
  FROM customers
  WHERE points > 3000);
```

---

## <a name="CreateCopyTable"></a>Create a copy of a table
```SQL
CREATE TABLE Orders_archive AS
SELECT * 
FROM orders;
```
Practic (toata partea dupa AS/ALIAS) este un subquery.
OBS: Copia tabelei create (arhiva) nu va avea id ca fiind "primary key" (nici AutoIncrement sau NotNull) => va trebui sa le modificam noi apoi.

```SQL
CREATE TABLE orders_archive AS
SELECT *
FROM orders
WHERE order_date >= '2019-01-01';
```

```SQL
TRUNCATE orders_archive; /* Sterge toate randurile din tabela !!! */
INSERT INTO orders_archive
SELECT *
FROM orders
WHERE date >= '2018-01-01';
```
OBS: In MySQL Workbench, don't forget to refresh the navigator.

```SQL
CREATE TABLE invoices_archive AS
SELECT
  i.invoice_id
  i.number
  c.name AS client_name
FROM invoices i
JOIN clients c
  USING(cliend_id)
WHERE payment_date IS NOT NULL;
```

---

## <a name="DELETE"></a>**DELETE FROM**
```SQL
DELETE FROM invoices
WHERE invoices_id = 1;
```
> OBS: Daca nu adaugăm clauza WHERE, se vor **șterge** toate rândurile din tabelă.

Pentru cazul (in MySQL WorkBench):
```SQL
DELETE FROM pacienti
WHERE judet = 'Bacau';
```
Este foarte probabil să nu funcționeze deoarece MySQL execută update/delete în funcție de cheia primară.
Vom avea eroare: *You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column*.
Pentru a trece de această eroare putem schimba în setări MySQL WorkBench: _Edit -> Preferences -> Safe UPDATE (check)_

Exemple DELETE folosind *subqueries*:
```SQL
DELETE FROM invoices-table1
WHERE client_id IN (
  SELECT client_id
  FROM clients-table2
  WHERE name = 'Clint');
```

---

## <a name="GROUPBY"></a>**GROUP BY**
By default, GROUP BY lucrează cu *DISTINCT* (Nu se afișează dubluri)
```SQL
SELECT * FROM Payment
GROUP BY customer_id;
```
| customer_id | amount | payment_date |
|-------------|--------|--------------|
| 1           | 8.00   | 2011-07-22   |
| 1           | 4.00   | 2011-07-23   |
| 1           | 6.00   | 2011-07-26   |
| 3           | 3.00   | 2011-08-24   |
| 3           | 2.00   | 2011-08-25   |
| 3           | 1.00   | 2011-08-25   |

Exemplu care va grupa toate rândurile (clienții cu același ID) și va face suma pentru "amount"-ul fiecărui client:
```SQL
SELECT customer_id, SUM(amount)
FROM payment
GROUP BY customer_id;
```
Va returna:
| customer_id | sum(amount) |
|-------------|--------|
| 1           | 18.00   |
| 3           | 6.00   |

Alte exemple:
```SQL
SELECT rating, COUNT(rating), FROM film
GROUP BY rating;
```

```SQL
SELECT rating, AVG(rental_rate) FROM film
GROUP BY rating;
```

> Aggregate functions: COUNT(), SUM(), AVG(), MIN(), MAX(), etc...


**Alt exemplu:** Să se afișeze câți pacienți sunt la fiecare secție, precum și numele secției și bugetul secției:
```SQL
SELECT S.Nume, S.Buget, COUNT(IdSectie) NumarPacienti
FROM Pacienti P /*Deoarece lista cu pacienti contine repartizarea fiecaruia la o sectie; doar din tabela pacienti putem numara de cate ori se repeta o sectie anume*/
JOIN Sectii S /*vrem sa afisam numele si bugetul sectiei*/
  USING(IdSectie)
GROUP BY IdSectie;
```
^^Aici: GROUP BY grupează și numără de câte ori apare IdSectie=4 apoi IdSectie=3, etc (pentru fiecare secție)
| Nume | Buget | NumarPacienti |
|------|-------|-------|
| s1  | 5400   | 5   |
| s2  | 6000   | 6   |
| s3  | 5700   | 3   |
| s4  | 4000   | 4   |

### <a name="HAVING"></a>GROUP BY: HAVING
Se folosește mereu cu GROUP BY: Este un fel de WHERE dar doar pentru GROUP BY statemets.
```SQL
SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1
HAVING condition;
```

```SQL
SELECT customer_id, SUM(amount)
FROM payment
GROUP BY customer_id
HAVING SUM(amount) > 200;
```

OBS: WHERE se aplică înainte de GROUP BY (se aplică pentru linii). HAVING se aplică/scrie doar dupa GROUP BY
```SQL
SELECT rating, ROUND(AVG(rental_rate), 2)
FROM film
WHERE rating IN ('R', 'PG', 'G')
GROUP BY rating
HAVING AVG(rental_rate) < 3;
```

---
---

## <a name="CREATETABLE"></a>CREATE TABLE
```SQL
CREATE TABLE `schema1`.`angajati` (
  `IdAngajat` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Nume` VARCHAR(45) NULL,
  `Prenume` VARCHAR(45) NULL,
  `Adresa` VARCHAR(45) NULL,
  `CNP` VARCHAR(45) NULL,
  `IdSectie` BIGINT(20) NULL,
PRIMARY KEY(`IdAngajat`));
```
| angajati                             |
|--------------------------------------|
| IdAngajat BIGINT(20), PK, NN, UN, AI |
| Nume                                 |
| Prenume                              |
| Adresa                               |
| CNP                                  |
| IdSectie BIGINT(20), UN              |

> Tipul de apostrof contează !!! Trebuie cel de la tasta tilda (\~), anume \` (backtick), nu ' de langa enter aka single quote.
Reguli: 
* Quotes (single or double) are used around **STRINGS**!
* Backticks are used around **TABLE** and **COLUMN** identifiers!

```SQL
CREATE TABLE `sectii`(
  `IdSectie` BIGINT(20) NOT NULL UNSIGNED AUTO_INCREMENT,
  `Nume` VARCHAR(45) NULL,
  `Buget` INT NULL,
PRIMARY KEY(`IdSectie`));
```
OBS: INT e fără (), BIGINT() e cu ().
| sectiii                             |
|--------------------------------------|
| IdSectie BIGINT(20), PK, NN, UN, AI |
| Nume  VARCHAR(45)                    |
| Buget INT                           |

OBS pentru **Foreign Key (FK)**: Trebuie sa fie acelasti tip de date (BIGINT(20)) si acelasi domeniu de definitie (UNSIGNED) !!

## <a name="CREATETABLE_FK"></a>CREATE TABLE with Foreign Key
Pentru a crea o tabelă ce conține FK, avem două metode:
#### Metoda 1: Fie Modificăm tabela (in interiorul MySQL Workbench):
1. Alter table `Angajati` (tabela care are FK)
2. Selectezi Foreign Key
3. Foreign Key name: fk_angajati_1
   Referenced table: sectii
4. 
|         | Column   | Referenced Column |
|---------|----------|-------------------|
| (check) | IdSectie | IdSectie          |
5. On Update: CASCADE, On delete: CASCADE

#### Metoda 2:
(optional?)
```SQL
ALTER TABLE `angajati`
ADD INDEX `fk_angajati_1_idx`(`IdSectie` ASC);
```

apoi:
```SQL
ALTER TABLE `angajati`
ADD CONSTRAINT `fk_angajati_1`
  FOREIGN KEY(`IdSectie`)
  REFERENCES `sectii`(`IdSectie`)
  ON DELETE CASCADE -- RESTRICT / SET NULL
  ON UPDATE CASCADE;
```

---

## <a name="moresubqueries"></a>More on subqueries
```SQL
SELECT * FROM File
WHERE rental_rate > (
  SELECT AVG(rental_rate) FROM Film);
```

```SQL
SELECT nume, prenume, salariu
FROM angajatiWHERE salariu >= (
  SELECT AVG(salariu) FROM angajati);
```

```SQL
SELECT film_id, title
FROM film
film_id IN (
  SELECT inventory.film_id
  FROM rental_rate
  JOIN inventory ON
    inventory.inventory_id = rental.inventory_id
  WHERE
    rental.return_date BETWEEN '2005-05-29' AND '2005-05-30');
```


## Find me on my Social's
***My portfolio:*** [radubulai.com](https://radualexandrub.github.io/)<br>
***My blog:*** [CodingTranquillity](https://codingtranquillity.herokuapp.com/)

<a href="https://github.com/radualexandrub" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="radualexandrub" height="28" width="28" /></a>&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/radu-alexandru-bulai/" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="radu-alexandru-bulai" height="28" width="28" /></a>&nbsp;&nbsp;
<a href="https://dev.to/radualexandrub" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg" alt="radualexandrub" height="28" width="28" /></a>&nbsp;&nbsp;
<a href="https://www.hackerrank.com/RaduAlexandruB" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/hackerrank.svg" alt="RaduAlexandruB" height="28" width="28" /></a>&nbsp;&nbsp;
<a href="https://www.flickr.com/photos/radualexandru" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/flickr.svg" alt="RaduAlexandruB" height="28" width="28" /></a>&nbsp;&nbsp;
<a href="https://www.mixcloud.com/radu-alexandru7" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/mixcloud.svg" alt="RaduAlexandru" height="28" width="28" /></a>&nbsp;&nbsp;
