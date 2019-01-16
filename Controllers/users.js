module.exports = (db) => {


    const home = (request, response) => {
        // let loggedin = request.cookies['loggedin'];
        // let user = request.cookies['user'];

        // if (loggedin === undefined) {
            response.render('../views/template.jsx');
            // response.send('hi!');
        // } else {
            // response.redirect("/user/profile");
        // }
    }


    // Export controller functions as a module
    return {
        home,
    };

}