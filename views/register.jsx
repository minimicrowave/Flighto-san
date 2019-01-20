var React = require("react");

class SignUp extends React.Component {
    render() {
        
        return (
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
            <link href="https://fonts.googleapis.com/css?family=Unica+One|Zilla+Slab|Open+Sans+Condensed:300" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <meta charset="UTF-8"/>
        </head>
        <body>
    
        <div className="d-flex justify-content-center">
        <form name="login" method="POST" action="/login">
            <div className="row">
                <img className="header" src="https://media1.tenor.com/images/828db7fa083be1d3689fc8ea0935a8cb/tenor.gif?itemid=9148185"/>
            </div>
            <div className="row">
                <h1 className="mx-auto header">Flighto-san</h1>
            </div>
             <div className="row">
                <div className="col register">
                    <input name="name" type="text" className="form-control register" placeholder="Name"/>
                    <input name="username" type="text" className="form-control register" placeholder="Username"/>
                    <input name="password" type="password" className="form-control register" placeholder="Password"/>                
                </div>
            </div>
            <div className="row">
                <a href="/login" className="text-info link">
                Have an account? Login here!
                </a>
            </div>
            <div className="row">
                <button className="btn btn-info logoutbtn mx-auto">Submit</button>
            </div>
   
        </form>
        </div>                        

        </body>
        </html>
        );
    }
}

module.exports = SignUp;