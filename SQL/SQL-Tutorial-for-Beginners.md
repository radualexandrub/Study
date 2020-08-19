Most of these notes are taken from online tutorial [MySQL Tutorial for Beginners (3h10m) - March 2019](https://www.youtube.com/watch?v=7S_tz1z_5bA) by **Programming with Mosh**.

## SELECT
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
### IN, BETWEEN
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
### LIKE
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
