module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
    return {
        addUsers: (userInfo, callback) => {
            // set up query
            const queryString = 'INSERT INTO users (name, username, password) VALUES ($1, $2, $3) RETURNING *;';
            const values = userInfo;
            console.log(queryString, values);

            // execute query
            dbPoolInstance.query(queryString, values, (error, queryResult) => {
                // invoke callback function with results after query has executed
                callback(error, queryResult.rows);
            });
        }
    };
};