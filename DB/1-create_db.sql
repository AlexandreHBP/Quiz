CREATE DATABASE IF NOT EXISTS quiz_db;

USE quiz_db;

CREATE TABLE IF NOT EXISTS quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT NOT NULL,
    option_1 TEXT NOT NULL,
    option_2 TEXT NOT NULL,
    option_3 TEXT NOT NULL,
    option_4 TEXT NOT NULL,
    correct_number INT NOT NULL,
    user_id VARCHAR(20) NOT NULL
);
