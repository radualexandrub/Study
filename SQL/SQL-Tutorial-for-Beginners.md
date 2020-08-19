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
