DROP TABLE flights;
DROP TABLE users;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR (20),
    username VARCHAR (20),
    password VARCHAR (15)
);

CREATE TABLE IF NOT EXISTS flights (
    id SERIAL PRIMARY KEY,
    flightNo VARCHAR,
    userId INTEGER REFERENCES users (id)
);

-- CREATE TABLE IF NOT EXISTS airportcodes (
--     code VARCHAR, 
--     lat INTEGER, 
--     lon INTEGER, 
--     name VARCHAR, 
--     city VARCHAR, 
--     state VARCHAR, 
--     country VARCHAR, 
--     icao VARCHAR
-- )