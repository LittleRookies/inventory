# ************************************************************
# Sequel Pro SQL dump
# Version 5446
#
# https://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 8.0.13)
# Database: demo
# Generation Time: 2020-01-14 09:44:38 +0000
# ************************************************************

show variables like '%time_zone%';
# 可以看到时区是CST,所以需修改
set global time_zone='+8:00';
set time_zone='+8:00';
flush privileges;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table client
# ------------------------------------------------------------

DROP TABLE IF EXISTS `client`;

CREATE TABLE `client` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '交易对象名称',
  `telephone` varchar(18) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '电话号码',
  `people` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '联系人',
  `phone` varchar(18) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '手机号',
  `adress` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '地址',
  `remarks` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '备注',
  `time` datetime DEFAULT NULL COMMENT '修改时间',
  `founder` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '创建人',
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Y' COMMENT '状态',
  `status_people` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='交易对象';

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;

INSERT INTO `client` (`id`, `name`, `telephone`, `people`, `phone`, `adress`, `remarks`, `time`, `founder`, `timestamp`, `status`, `status_people`)
VALUES
	(17,'示例','','','','','','2019-08-13 04:05:26','lisi','2019-08-13 04:05:26','Y',NULL),
	(18,'交易对象2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2019-08-14 16:00:21','Y',NULL),
	(19,'交易对象3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2019-08-14 16:00:28','Y',NULL),
	(20,'测试',NULL,NULL,NULL,NULL,NULL,'2019-08-26 03:25:39','lisi','2019-08-22 02:52:27','Y','lisi');

/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table commodity
# ------------------------------------------------------------

DROP TABLE IF EXISTS `commodity`;

CREATE TABLE `commodity` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `model` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '' COMMENT '型号',
  `color` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '颜色',
  `size_type` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '尺寸',
  `client_id` int(11) DEFAULT NULL COMMENT '供应商',
  `founder` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '创建者',
  `remarks` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '备注',
  `time` datetime DEFAULT NULL COMMENT '修改时间',
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `pic_url` varchar(128) DEFAULT NULL COMMENT '照片路径',
  `type` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '标签',
  `status` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Y' COMMENT '状态',
  `status_people` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='商品类型';

LOCK TABLES `commodity` WRITE;
/*!40000 ALTER TABLE `commodity` DISABLE KEYS */;

INSERT INTO `commodity` (`id`, `model`, `color`, `size_type`, `client_id`, `founder`, `remarks`, `time`, `timestamp`, `pic_url`, `type`, `status`, `status_people`)
VALUES
	(12,'A186','白色|黑色','常规尺寸',18,'lisi','','2019-08-14 04:29:48','2019-08-14 04:29:48','/Users/apple/Downloads/学习/Java/github/inventory/src/main/resources/static/img/commdoity/20190814172944_13.jpg','秋,冬,','Y',NULL),
	(13,'A187','黑色','常规尺寸',19,'lisi','','2019-08-14 04:30:43','2019-08-14 04:30:43','/Users/apple/Downloads/学习/Java/github/inventory/src/main/resources/static/img/commdoity/20190814173039_31.jpg','热,春,','Y',NULL);

/*!40000 ALTER TABLE `commodity` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table hibernate_sequence
# ------------------------------------------------------------

DROP TABLE IF EXISTS `hibernate_sequence`;

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;

INSERT INTO `hibernate_sequence` (`next_val`)
VALUES
	(30);

/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table label
# ------------------------------------------------------------

DROP TABLE IF EXISTS `label`;

CREATE TABLE `label` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `label_name` varchar(32) DEFAULT NULL COMMENT '标签名称',
  `num` int(11) DEFAULT '0' COMMENT '使用次数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='热门标签';

LOCK TABLES `label` WRITE;
/*!40000 ALTER TABLE `label` DISABLE KEYS */;

INSERT INTO `label` (`id`, `label_name`, `num`)
VALUES
	(1,'春',2),
	(2,'秋',10),
	(3,'夏',4),
	(4,'冬',4),
	(5,'热',2);

/*!40000 ALTER TABLE `label` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table order_content
# ------------------------------------------------------------

DROP TABLE IF EXISTS `order_content`;

CREATE TABLE `order_content` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `orderNumber` varchar(18) DEFAULT NULL COMMENT '订单编号',
  `commodity` int(11) DEFAULT NULL COMMENT '商品',
  `color` varchar(11) DEFAULT NULL COMMENT '颜色',
  `size` varchar(11) DEFAULT NULL COMMENT '尺寸',
  `num` int(11) DEFAULT NULL COMMENT '数量',
  `price` decimal(18,3) DEFAULT NULL COMMENT '单价',
  `total_price` decimal(18,3) DEFAULT NULL COMMENT '总价',
  PRIMARY KEY (`id`),
  KEY `orderNumberByContent` (`orderNumber`),
  CONSTRAINT `orderNumberByContent` FOREIGN KEY (`orderNumber`) REFERENCES `orders` (`ordernumber`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='订单内容';

LOCK TABLES `order_content` WRITE;
/*!40000 ALTER TABLE `order_content` DISABLE KEYS */;

INSERT INTO `order_content` (`id`, `orderNumber`, `commodity`, `color`, `size`, `num`, `price`, `total_price`)
VALUES
	(1,'DDBH20190912001',12,'黑色','M',2,100.172,200.345),
	(2,'DDBH20190912001',13,'黑色','XL',100,1.003,100.333),
	(16,'DDBH20191008003',13,'黑色','L',333,4.000,1332.000),
	(17,'DDBH20191008004',13,'黑色','M',555,6.000,3330.000),
	(18,'DDBH20191008004',12,'黑色','L',333,2.000,666.000),
	(25,'DDBH20191008002',12,'白色','XL',1111,3.000,3333.000),
	(26,'DDBH20191009001',13,'黑色','M',111,2.000,222.000),
	(27,'DDBH20191008001',13,'黑色','L',100,5.000,500.000),
	(28,'DDBH20191008001',12,'白色','XL',66,3.000,198.000),
	(29,'DDBH20191008001',12,'黑色','M',100,20.030,2003.000);

/*!40000 ALTER TABLE `order_content` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table orders
# ------------------------------------------------------------

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `orderNumber` varchar(18) NOT NULL DEFAULT '' COMMENT '订单编号',
  `client` int(11) DEFAULT NULL COMMENT '交易对象',
  `pay_direction` varchar(1) DEFAULT NULL COMMENT '支付方向',
  `remarks` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '备注',
  `time` datetime DEFAULT NULL COMMENT '修改时间',
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `status` varchar(1) DEFAULT NULL COMMENT '当前状态',
  `status_people` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '修改人',
  `founder` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '创建人',
  `price` decimal(18,3) DEFAULT NULL COMMENT '总价',
  `pay_price` decimal(18,3) DEFAULT '0.000' COMMENT '以结算金额',
  PRIMARY KEY (`orderNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='订单';

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;

INSERT INTO `orders` (`orderNumber`, `client`, `pay_direction`, `remarks`, `time`, `timestamp`, `status`, `status_people`, `founder`, `price`, `pay_price`)
VALUES
	('DDBH20190912001',18,'P','','2020-01-13 01:19:00','2019-09-12 04:19:56','Z','lisi',NULL,300.678,NULL),
	('DDBH20191008001',18,'P','','2020-01-14 03:41:01',NULL,'R',NULL,'lisi',0.000,NULL),
	('DDBH20191008002',17,'R','131231111111111','2020-01-14 03:37:12',NULL,'R',NULL,'lisi',3333.000,NULL),
	('DDBH20191008003',19,'P','','2019-10-15 01:59:23','2019-10-08 03:07:35','N','lisi','lisi',1332.000,NULL),
	('DDBH20191008004',18,'R','','2019-10-15 01:46:53','2019-10-08 03:22:59','N','lisi','lisi',3996.000,NULL),
	('DDBH20191009001',18,'R','','2019-10-08 22:33:28','2019-10-08 22:33:28','N',NULL,'lisi',222.000,NULL);

/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table size
# ------------------------------------------------------------

DROP TABLE IF EXISTS `size`;

CREATE TABLE `size` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '种类名称',
  `size` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '尺寸',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='尺寸';

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;

INSERT INTO `size` (`id`, `name`, `size`)
VALUES
	(19,'常规尺寸','S'),
	(20,'常规尺寸','M'),
	(21,'常规尺寸','L'),
	(22,'常规尺寸','XL'),
	(23,'常规尺寸','XXL'),
	(24,'常规尺寸','XXXL');

/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table transaction
# ------------------------------------------------------------

DROP TABLE IF EXISTS `transaction`;

CREATE TABLE `transaction` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `orderNumber` varchar(18) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '订单编号',
  `commodity` int(11) DEFAULT NULL COMMENT '商品',
  `color` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '颜色',
  `size` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '尺寸',
  `num` int(11) DEFAULT NULL COMMENT '实收数量',
  `price` decimal(18,3) DEFAULT NULL COMMENT '单价',
  `total_price` decimal(18,3) DEFAULT NULL COMMENT '总价',
  PRIMARY KEY (`id`),
  KEY `orderNumber` (`orderNumber`),
  CONSTRAINT `orderNumber` FOREIGN KEY (`orderNumber`) REFERENCES `orders` (`ordernumber`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='交易';

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;

INSERT INTO `transaction` (`id`, `orderNumber`, `commodity`, `color`, `size`, `num`, `price`, `total_price`)
VALUES
	(25,'DDBH20191008002',12,'白色','XL',1111,3.000,3333.000);

/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '账号',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '名称',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '密码',
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '角色',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '邮箱',
  `last_time` datetime DEFAULT NULL COMMENT '最后登陆时间',
  `telephone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '手机号',
  `founder` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '创建人',
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `status` varchar(1) DEFAULT 'Y' COMMENT '状态',
  `status_people` varchar(255) DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户信息';

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`username`, `name`, `password`, `role`, `email`, `last_time`, `telephone`, `founder`, `timestamp`, `status`, `status_people`)
VALUES
	('admin','管理员','$2a$10$PdntCkca8xCno/HU12.mK.wD1dP4tXLGb4FUgonN2D6fNKsX8HW9y','admin','1@1.com','2019-08-26 15:32:58','11111111114','admin',NULL,'Y',NULL),
	('lisi','老员工','$2a$10$oA7pvJKBxWUu6CiolxpXoeX0kaHZmEzFZrToPnSv2MS.cpWe4Phxq','root','lisi@163.com','2020-01-14 17:43:18','12345678902','zhangsan',NULL,'Y',NULL),
	('new','新人','$2a$10$G782c/VA7apYcfWuBMEYwuZDVJHaQuc/RDwOuWJTR1cqI2gbUub6K','role','1@1.com','2019-10-15 14:20:21','11111111111','admin','2019-08-13 01:46:23','Y',NULL);

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
