DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE Products(
  item_id AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

SELECT * FROM Products;

INSERT INTO Products(product_name, department_name, price, stock_quantity)
VALUES ("Protien", "health", 31.94, 10),
("Milk Frother", "kitchen", 13.99, 20),
("VitaFusion", "health", 9.99, 15),
("Glasses", "accessories", 21.94, 35),
("Dog Toy", "pet", 11.99, 25),
("Dish Pads", "kitchen", 11.24, 50),
("Slippers", "accessories", 31.94, 10),
("Bacon Bone", "pet", 5.94, 70),
("Eyelash Primer", "beauty", 14.99, 5),
("Facial Brush", "beauty", 19.99, 20);




