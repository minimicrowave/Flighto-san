var React = require("react");

class Template extends React.Component {
render() {
    return (
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Unica+One|Zilla+Slab|Open+Sans+Condensed:300" rel="stylesheet"></link>
            <meta charSet="UTF-8"/>
        </head>
        <body>
        <nav className="navbar fixed-top navbar-light bg-light topbar">
            <a className="navbar-brand header" href="/home">
            <img className="logo" src="https://static1.squarespace.com/static/5aec99592971146b8ee7df33/t/5aecbf89575d1f6cb17212eb/1525464980165/animat-paper-airplane-color.gif"/>
                Flighto-San
            </a>
            <span className="navbar-text">
                <h6 id="name"></h6>
                <a className="btn btn-outline-secondary btn-sm logoutbtn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Edit Profile</a>

                <a href="/logout" className="btn btn-outline-secondary btn-sm logoutbtn">Logout</a>
            </span>
        </nav>
        <main>
            <div id="mySidebar" className="sidebar">
                <form name="flight" className="form-inline my-2 my-lg-0" method="POST" action="/home/search">
                    <h4>Flighto-san, where's my flight?</h4>
                    <input name="flightNo" className="form-control flight" type="search" placeholder="Flight No."/>
                    <button id="submitbutton" className="btn btn-small btn-block btn-outline-light my-2 my-sm-0" type="submit"><img className="openbtnimg" src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png"/>  Search</button>
                </form>
            <table className="table table-light table-hover">
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
            <div id="mapdiv">
                {/* <div className="d-flex flex-column">
                    <div className="p-2 eachmap">QTR332 EGKK  OTHH</div>
                    <div className="p-2">Maps</div>
                </div> */}
            
            </div>

            </div>
        </main>
            <script type="text/javascript" src="/script.js"/>
            <script type="text/javascript" src="/scriptMaps.js"/>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossOrigin="anonymous"></script>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAaQfI1KG7e34IftdKC6ysqKP0zUKugaFc"></script>
        </body>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Change Name</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form action="/profile/edit?_method=PUT" method="POST"> 
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">New Name:</label>
                        <input name="newname" type="text" className="form-control" id="recipient-name"/>
                    </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-info">Save Changes</button>
                </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </html>
    );
}
}

module.exports = Template;