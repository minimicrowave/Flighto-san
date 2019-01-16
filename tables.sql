CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR (20),
    password VARCHAR (15)
);

CREATE TABLE IF NOT EXISTS flights (
    id SERIAL PRIMARY KEY,
    flightNo VARCHAR,
    userId INTEGER REFERENCES user (id)
)