CREATE DATABASE "notes";
\c notes;
CREATE TABLE IF NOT EXISTS record
(
    id     SERIAL PRIMARY KEY,
    guess  INTEGER,
    actual INTEGER,
    time   TIME
);
INSERT INTO record (guess, actual, time)
values (12, 13, NOW());
