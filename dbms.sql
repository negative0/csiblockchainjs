mysql> show tables;
+-----------------+
| Tables_in_books |
+-----------------+
| b_order         |
| b_order_detail  |
| costumer        |
| products        |
+-----------------+
4 rows in set (0.00 sec)

mysql> select * from b_order;
+------+------+------------+-------+
| o_id | c_id | dt         | total |
+------+------+------------+-------+
| 1001 |    1 | 2018-08-09 |  1400 |
| 1002 |    2 | 2018-09-09 |  1200 |
| 1003 |    3 | 2018-07-07 |   500 |
+------+------+------------+-------+
3 rows in set (0.00 sec)

mysql> select * from b_order_detail;
+------+------+----------+------+
| o_id | b_id | quantity | amt  |
+------+------+----------+------+
| 1001 |  100 |        1 |  500 |
| 1001 |  101 |        1 |  600 |
| 1001 |  103 |        1 |  300 |
| 1002 |  104 |        2 |  400 |
| 1002 |  102 |        1 |  800 |
| 1003 |  100 |        1 |  500 |
+------+------+----------+------+
6 rows in set (0.00 sec)

mysql> select * from costumer;
+---------+------+------------+
| c_name  | c_id | address    |
+---------+------+------------+
| ajay    |    1 | akola      |
| vango   |    2 | ahmednagar |
| vardhan |    3 | kolhapur   |
| evleen  |    4 | nanded     |
| warhade |    5 | buldhana   |
+---------+------+------------+
5 rows in set (0.00 sec)

mysql> select * from products;
+-----------+------+---------+
| b_name    | b_id | b_price |
+-----------+------+---------+
| shades    |  100 |     500 |
| wings     |  101 |     600 |
| got       |  102 |     800 |
| 3mistakes |  103 |     300 |
| malgudy   |  104 |     400 |
+-----------+------+---------+
