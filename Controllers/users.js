module.exports = (db) => {


    const redirect = (request, response) => {
        let loggedin = request.cookies['loggedin'];

        if (loggedin === undefined){
            response.redirect('/login');
        } else {
            response.redirect('/home');

        }
    }

    const login = (request, response) => {
        response.render('../views/login.jsx');
    }

    const home = (request, response) => {
        
        // let user = request.cookies['user'];

        // if (loggedin === undefined) {

            let userid = 1;
            let name = 'hi';
            let maps = "";
            let login = "true";
            response.cookie('userid', userid);
            response.cookie('name', name);
            response.cookie('maps', maps);
        
            response.render('../views/template.jsx');
            // response.send('hi!');
        // } else {
            // response.redirect("/user/profile");
        // }
    }

    // Export controller functions as a module
    return {
        redirect,
        login, 
        home
    };

}