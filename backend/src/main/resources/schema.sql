CREATE TABLE IF NOT EXISTS events (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    titleEn VARCHAR(255) NOT NULL,
    descriptionEn VARCHAR(1000) NOT NULL,

    titleRu VARCHAR(255) NOT NULL,
    descriptionRu VARCHAR(1000) NOT NULL,

    eventStart BIGINT NOT NULL,
    eventEnd BIGINT NOT NULL,
    applicationStart BIGINT NOT NULL,
    applicationEnd BIGINT NOT NULL,
    price INT DEFAULT 0,
    memberPrice INT DEFAULT 0,
    location VARCHAR(255),
    peopleLimit INT,
    contacts VARCHAR(50) NOT NULL
);
