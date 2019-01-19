module.exports = (db) => {

    
    const redirect = (request, response) => {
        let loggedin = request.cookies['loggedin'];
        
        if (loggedin === undefined || loggedin === false){
            response.redirect('/login');
        } else {
            response.redirect('/home');

        }
    }

    const register = (request, response) => {
        response.render('../views/register.jsx');
    }
    
    const registerpost = (request, response) => {
        let name = request.body.name;
        let username = request.body.username;
        let password = request.body.password;
        let values = [name, username, password];

        db.users.addUsers(values, (error, queryResult) => {
            console.log(queryResult);
            response.redirect('/login')
        })
    }

    

    const login = (request, response) => {
        let loggedin = request.cookies['loggedin'];
        if (loggedin === 'false') {
            console.log(loggedin);
            response.render('../views/login.jsx', {logintext: true});
        } else if (loggedin === 'true') {
            response.redirect('/home')
        } else {
            response.render('../views/login.jsx', {logintext: false});
        }
    }


    const loginpost = (request, response) => {
        let username = request.body.username;
        let password = request.body.password;
        let values = [username, password];
        
        db.users.checkUser(values, (error, queryResult) => {
            console.log(queryResult);
            if (queryResult.length === 0) {
                response.cookie('loggedin', false);
                response.redirect('/login');
            } else {
                let userid = queryResult[0].id;
                response.cookie('loggedin', true);
                response.cookie('userid', userid);
                response.redirect('/home');
            }
        })
    }

    const home = (request, response) => {
        let userid = request.cookies['user'];

        if (loggedin === true) {
        
            response.render('../views/template.jsx');
            // response.send('hi!');
        } else {
            response.redirect("/login");
        }
    }

    // Export controller functions as a module
    return {
        redirect,
        register,
        registerpost,
        login,
        loginpost, 
        home
    };

}