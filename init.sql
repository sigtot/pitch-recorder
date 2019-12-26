CREATE DATABASE "notes";
\c notes;
CREATE TABLE IF NOT EXISTS record (
    guess integer,
    actual integer,
    time time);
INSERT INTO record (guess, actual, time) values (12, 13, NOW());
