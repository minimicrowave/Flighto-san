var React = require("react");

class Template extends React.Component {
render() {
    return (
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Unica+One|Zilla+Slab|Open+Sans+Condensed:300" rel="stylesheet"></link>
            <meta charset="UTF-8"/>
        </head>
        <body>
        <nav className="navbar fixed-top navbar-light bg-light topbar">
            <a className="navbar-brand header" href="/home">
            <img className="logo" src="https://static1.squarespace.com/static/5aec99592971146b8ee7df33/t/5aecbf89575d1f6cb17212eb/1525464980165/animat-paper-airplane-color.gif"/>
                Flighto-San
            </a>
            <span class="navbar-text">
                <a href="/logout" class="btn btn-outline-secondary btn-sm logoutbtn">Logout</a>
            </span>
        </nav>
        <main>
            <div id="mySidebar" className="sidebar">
                <form name="flight" className="form-inline my-2 my-lg-0" method="POST" action="/home/search">
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
            <div className="maps">
                <div className="d-flex flex-column">
                    <div className="p-2 eachmap">QTR332 EGKK  OTHH</div>
                    <div className="p-2">Maps</div>
                </div>
            
                </div>

            </div>
        </main>
            <script type="text/javascript" src="/script.js"/>
        </body>
        </html>
    );
}
}

module.exports = Template;