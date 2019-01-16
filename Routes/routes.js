module.exports = (app, db) => {
    const users = require('../Controllers/users.js')(db);
    
    app.get('/home', users.home);

}
