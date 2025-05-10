CREATE TABLE books (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    CONSTRAINT title_size CHECK (CHAR_LENGTH(title) BETWEEN 3 AND 100),
    author VARCHAR(50),
    status ENUM('Want to read', 'Reading', 'Have read') NOT NULL,
	rating INT,
    CONSTRAINT valid_rating_range CHECK (rating BETWEEN 1 AND 5),
    CONSTRAINT read_to_rate CHECK ((status != 'Have read' AND rating is NULL) OR (status = 'Have read')),
    conclusion_time DATETIME,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

SELECT * FROM books;

DROP TABLE books;