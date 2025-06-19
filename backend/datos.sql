-- DROP DATABASE IF EXISTS datos;
CREATE DATABASE datos;
USE datos;

CREATE TABLE bloques (
	id INT auto_increment primary key,
    nombre varchar(255),
    tipo varchar(255)
);

INSERT INTO bloques (id, nombre, tipo) VALUES
(1, "Air", "No solido"),
(2, "Stone", "Solido"),
(3, "Grass", "Solido"),
(4, "Dirt", "Solido"),
(5, "Cobblestone", "Solido"),
(6, "Wood Planks", "Solido"),
(7, "Sapling", "No solido"),
(8, "Bedrock", "Solido"),
(9, "Flowing Water", "Liquido"),
(10, "Still Water", "Liquido"),
(11, "Flowing Lava", "Liquido");

select * from bloques;