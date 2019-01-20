var React = require("react");

class Login extends React.Component {
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
        
        {(this.props.logintext) ? (<div class="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> Change a few things up and try again.
     </div>) : null
        }

        <div className="d-flex justify-content-center">
        <form name="login" method="POST" action="/home">
            <div className="row">
                <img className="header" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/133fe638228687.57599851b4546.gif"/>
            </div>
            <div className="row">
                <h1 className="mx-auto header">Flighto-san</h1>
            </div>
             <div className="row">
                <div className="col login">
                <   input name="username" type="text" className="form-control" placeholder="Username"/>
                </div>
                <div className="col login">
                    <input name="password" type="password" className="form-control" placeholder="Password"/>
                </div>
                <button className="btn btn-info logoutbtn">Submit</button>
            </div>
            <div className="row">
            <a href="/register" className="text-info link">
            No account yet? Click here to sign up with us today!
            </a>
            </div>
   
        </form>
        </div>                        

        </body>
        </html>
        );
    }
}

module.exports = Login;