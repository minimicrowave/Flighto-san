var React = require("react");

class Template extends React.Component {
render() {
    return (
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        </head>
        <body>
        <nav class="navbar fixed-top navbar-light bg-light">
          <a class="navbar-brand" href="#!">Flighto-San</a>
        </nav>
        <main>
            <div id="mySidebar" className="sidebar">
                <form className="form-inline my-2 my-lg-0">
                    <h4>Flighto-san, where's my flight?</h4>
                    <input className="form-control" type="search" placeholder="Flight No."/>
                    <button id="submitbutton" className="btn btn-small btn-block btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>

            <div id="mainContent">
                <button className="openbtn"><img className="openbtnimg" src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png"/></button>
                <p>sup ma bitches</p>
            </div>
            {this.props.children}
        </main>
            <script type="text/javascript" src="/script.js"/>
        </body>
        </html>
    );
}
}

module.exports = Template;