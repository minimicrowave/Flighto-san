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

CREATE TABLE IF NOT EXISTS airportcodes (
    code VARCHAR, 
    lat INTEGER, 
    lon INTEGER, 
    name VARCHAR, 
    city VARCHAR, 
    state VARCHAR, 
    country VARCHAR, 
    icao VARCHAR
)