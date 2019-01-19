module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
    return {
        checkFlights: (userid, callback) => {
            // set up query
            const queryString = 'SELECT * FROM flights WHERE userID = $1';
            const values = userid;
            console.log(queryString, values);

            // execute query
            dbPoolInstance.query(queryString, values, (error, queryResult) => {
                // invoke callback function with results after query has executed
                callback(error, queryResult.rows);
            });
        }
    };
};