module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
    return {
        addFlights: (icao, user, callback) => {
            // set up query
            const queryString = 'SELECT id FROM users WHERE name=$1';
            // const values = [user];
            const values = ['hi'];

            // execute query
            dbPoolInstance.query(queryString, values, (error, idResult) => {
                // invoke callback function with results after query has executed
                const queryString1 = `INSERT INTO flights (flightNo, userId) VALUES ($1, $2) RETURNING *;`
                const values1 = [icao, idResult.rows[0].id];
            
                console.log(queryString1, values1)

                dbPoolInstance.query(queryString1, values1, (error, queryResult) => {
                    console.log(queryResult.rows);
                    callback(error, queryResult.rows);
                });
            });
        }
    };
};