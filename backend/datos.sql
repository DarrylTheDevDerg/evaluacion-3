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
INSERT INTO `bloques` VALUES (1,'Air','Non-Solid'),(2,'Stone','Solid'),(3,'Grass','Solid'),(4,'Dirt','Solid'),(5,'Cobblestone','Solid'),(6,'Wood Planks','Solid'),(7,'Sapling','Non-Solid'),(8,'Bedrock','Solid'),(9,'Flowing Water','Liquid'),(10,'Still Water','Liquid'),(11,'Flowing Lava','Liquid'),(12,'Still Lava','Liquid'),(13,'Sand','Solid'),(14,'Gravel','Solid'),(15,'Gold Ore','Solid'),(16,'Iron Ore','Solid'),(17,'Coal Ore','Solid'),(18,'Wood','Solid'),(19,'Leaves','Solid'),(20,'Sponge','Solid'),(21,'Glass','Solid'),(22,'Lapis Lazuli Ore','Solid'),(23,'Lapis Lazuli Block','Solid'),(24,'Dispenser','Solid'),(25,'Sandstone','Solid'),(26,'Noteblock','Solid'),(27,'Bed','Solid'),(28,'Powered Rail','Non-Solid'),(29,'Detector Rail','Non-Solid'),(30,'Sticky Piston','Solid'),(31,'Cobweb','Solid'),(32,'Dead Shrub','Non-Solid'),(33,'Dead Bush','Non-Solid'),(34,'Piston','Solid'),(35,'Piston Head','Solid'),(36,'Wool','Solid'),(37,'Moving Piston','Solid'),(38,'Dandelion','Non-Solid'),(39,'Poppy','Non-Solid'),(40,'Brown Mushroom','Non-Solid'),(41,'Red Mushroom','Non-Solid'),(42,'Gold Block','Solid'),(43,'Iron Block','Solid'),(44,'Double Stone Slab','Solid'),(45,'Stone Slab','Solid'),(46,'Bricks','Solid'),(47,'TNT','Solid'),(48,'Bookshelf','Solid'),(49,'Moss Stone','Solid'),(50,'Obsidian','Solid'),(51,'Torch','Non-Solid'),(256,'Iron Shovel','Item'),(257,'Iron Pickaxe','Item'),(258,'Iron Axe','Item'),(259,'Flint and Steel','Item'),(298,'Leather Helmet','Item'),(299,'Leather Tunic','Item'),(300,'Leather Pants','Item'),(301,'Leather Boots','Item');
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
