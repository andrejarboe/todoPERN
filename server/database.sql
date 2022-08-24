-- Create a new database called 'perntodo'
CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    DESCRIPTION VARCHAR(255)
);