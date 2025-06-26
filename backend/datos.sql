CREATE DATABASE  IF NOT EXISTS `datos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `datos`;
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: datos
-- ------------------------------------------------------
-- Server version	8.4.5

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bloques`
--

DROP TABLE IF EXISTS `bloques`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bloques` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=302 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bloques`
--

LOCK TABLES `bloques` WRITE;
/*!40000 ALTER TABLE `bloques` DISABLE KEYS */;
INSERT INTO `bloques` VALUES (1,'Air','No solido'),(2,'Stone','Solido'),(3,'Grass','Solido'),(4,'Dirt','Solido'),(5,'Cobblestone','Solido'),(6,'Wood Planks','Solido'),(7,'Sapling','No solido'),(8,'Bedrock','Solido'),(9,'Flowing Water','Liquido'),(10,'Still Water','Liquido'),(11,'Flowing Lava','Liquido'),(12,'Still Lava','Liquido'),(13,'Sand','Solido'),(14,'Gravel','Solido'),(15,'Gold Ore','Solido'),(16,'Iron Ore','Solido'),(17,'Coal Ore','Solido'),(18,'Wood','Solido'),(19,'Leaves','Solido'),(20,'Sponge','Solido'),(21,'Glass','Solido'),(22,'Lapis Lazuli Ore','Solido'),(23,'Lapis Lazuli Block','Solido'),(24,'Dispenser','Solido'),(25,'Sandstone','Solido'),(26,'Noteblock','Solido'),(27,'Bed','Solido'),(28,'Powered Rail','No solido'),(29,'Detector Rail','No solido'),(30,'Sticky Piston','Solido'),(31,'Cobweb','Solido'),(32,'Dead Shrub','No solido'),(33,'Dead Bush','No solido'),(34,'Piston','Solido'),(35,'Piston Head','Solido'),(36,'Wool','Solido'),(37,'Moving Piston','Solido'),(38,'Dandelion','No solido'),(39,'Poppy','No solido'),(40,'Brown Mushroom','No solido'),(41,'Red Mushroom','No solido'),(42,'Gold Block','Solido'),(43,'Iron Block','Solido'),(44,'Double Stone Slab','Solido'),(45,'Stone Slab','Solido'),(46,'Bricks','Solido'),(47,'TNT','Solido'),(48,'Bookshelf','Solido'),(49,'Moss Stone','Solido'),(50,'Obsidian','Solido'),(51,'Torch','No solido'),(256,'Iron Shovel','Item'),(257,'Iron Pickaxe','Item'),(258,'Iron Axe','Item'),(259,'Flint and Steel','Item'),(298,'Leather Helmet','Item'),(299,'Leather Tunic','Item'),(300,'Leather Pants','Item'),(301,'Leather Boots','Item');
/*!40000 ALTER TABLE `bloques` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'datos'
--

--
-- Dumping routines for database 'datos'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-25 20:04:07
