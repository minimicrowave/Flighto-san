module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
    return {
        addUsers: (userInfo, callback) => {
            // set up query
            const queryString = 'INSERT INTO users (name, username, password) VALUES ($1, $2, $3) RETURNING *;';
            const values = userInfo;
            // console.log(queryString, values);

            // execute query
            dbPoolInstance.query(queryString, values, (error, queryResult) => {
                // invoke callback function with results after query has executed
                callback(error, queryResult.rows);
            });
        },
        checkUser: (userInfo, callback) => {
            const queryString = 'SELECT * FROM users WHERE username=$1 AND password=$2;';
            const values = userInfo;
            // console.log(queryString, values);

            dbPoolInstance.query(queryString, values, (error, queryResult) => {
                callback(error, queryResult.rows);
            })
        },

        addFlights: (icao, userid, callback) => {
            // set up query
            const values = [icao, userid];
        
            // invoke callback function with results after query has executed
            const queryString = `INSERT INTO flights (flightNo, userId) VALUES ($1, $2) RETURNING *;`

            dbPoolInstance.query(queryString, values, (error, queryResult) => {
                const queryString1 = `SELECT flightno FROM flights WHERE userid=$1;`
                const values1 = [userid];
    
                dbPoolInstance.query(queryString1, values1, (error, queryResult1) => {
                    callback(error, queryResult1.rows);

               });
            })
        },

        editName: (userinfo, callback) => {
            const values = userinfo;
            const queryString = `UPDATE users SET name=$1 WHERE id=$2 RETURNING *;`;

            dbPoolInstance.query(queryString, values, (error, queryResult) => {
                // console.log(queryResult);
                callback(error, queryResult.rows);
            })
        }
    };
};