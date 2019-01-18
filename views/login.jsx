var React = require("react");

class Results extends React.Component {
    render() {
        
        return (
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <meta charset="UTF-8"/>
        </head>
        <body>
    
        <div class="d-flex justify-content-center">
        <form name="login" method="POST" action="/home">
             <div class="row">
                <div class="col">
                <   input type="text" class="form-control" placeholder="Username"/>
                </div>
                <div class="col">
                    <input type="password" class="form-control" placeholder="Password"/>
                </div>
                <button class="btn btn-info logoutbtn">Submit</button>
            </div>
   
        </form>
        </div>                        

        </body>
        </html>
        );
    }
}

module.exports = Results;