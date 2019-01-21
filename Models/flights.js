module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
    return {
        checkFlights: (userid, callback) => {
            // set up query
            const queryString = 'SELECT * FROM flights WHERE userid = $1';
            const values = userid;
            console.log(queryString, values);

            // execute query
            dbPoolInstance.query(queryString, values, (error, queryResult) => {
                // invoke callback function with results after query has executed
                callback(error, queryResult.rows);
            });
        },

        delFlights: (icao, id, callback) => {
            const queryString = `DELETE FROM flights WHERE flightno=$1 AND userid=$2;`;
            const values = [icao, id];

            dbPoolInstance.query(queryString, values, (error, queryResult) => {
                callback(error, null);
            });
        }
    };
};