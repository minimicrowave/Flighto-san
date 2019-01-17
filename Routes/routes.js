module.exports = (app, db) => {
    const users = require('../Controllers/users.js')(db);
    const flights = require('../Controllers/flights.js')(db);
    
    app.get('/', users.redirect);
    app.get('/home', users.home);

    app.post('/home', flights.form);

}
