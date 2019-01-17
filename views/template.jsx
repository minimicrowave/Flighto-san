var React = require("react");

class Template extends React.Component {
render() {
    return (
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <meta charset="UTF-8"/>
        </head>
        <body>
        <nav className="navbar fixed-top navbar-light bg-light">
          <a className="navbar-brand" href="#!">Flighto-San</a>
        </nav>
        <main>
            <div id="mySidebar" className="sidebar">
                <form name="flight" className="form-inline my-2 my-lg-0" method="POST" action="/home">
                    <h4>Flighto-san, where's my flight?</h4>
                    <input name="flightNo" className="form-control flight" type="search" placeholder="Flight No."/>
                    <button id="submitbutton" className="btn btn-small btn-block btn-outline-light my-2 my-sm-0" type="submit"><img className="openbtnimg" src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png"/>  Search</button>
                </form>
            <table class="table table-light table-hover">
                <tbody>
           
                    {this.props.results}
            
                </tbody>
            </table>
            </div>

            <div id="mainContent">
                <button className="openbtn">
                ⇌
                </button>
            {this.props.children}
                <p>sup ma bitches</p>
            </div>
        </main>
            <script type="text/javascript" src="/script.js"/>
        </body>
        </html>
    );
}
}

module.exports = Template;