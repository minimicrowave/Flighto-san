module.exports = (app, db) => {
    const users = require('../Controllers/users.js')(db);
    const flights = require('../Controllers/flights.js')(db);
    
    app.get('/', users.redirect);
    app.get('/login', users.login);
    app.get('/register', users.register);
    app.get('/home', users.home);
    app.get('/logout', users.logout);

    app.put('/profile/edit', users.edit);

    app.post('/login', users.registerpost);
    app.post('/home', users.loginpost);
    app.post('/home/search', flights.form);
    app.post('/home/maps', flights.maps);

    app.delete('/home/maps/delete', flights.del);

}
