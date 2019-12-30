CREATE DATABASE "notes";
\c notes;
CREATE TABLE IF NOT EXISTS record
(
    id     SERIAL PRIMARY KEY,
    guess  INTEGER,
    actual INTEGER,
    time   TIMESTAMP DEFAULT NOW()
);
INSERT INTO record (guess, actual)
values (12, 13);
