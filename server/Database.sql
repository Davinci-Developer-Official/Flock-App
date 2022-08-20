CREATE DATABASE flockapp;
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    occupation VARCHAR(50),
    user_password VARCHAR(20)
);

SELECT*FROM users;