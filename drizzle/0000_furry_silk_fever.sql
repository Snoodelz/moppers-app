CREATE TABLE `songs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(256) NOT NULL,
	`melody` varchar(256),
	`lyrics` text NOT NULL,
	CONSTRAINT `songs_id` PRIMARY KEY(`id`)
);
