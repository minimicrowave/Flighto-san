var React = require("react");
var Template = require("../views/template");
// var GoogleMaps = require("../views/map");

class Results extends React.Component {
    render() {
        var flights; 
        if (this.props.flights[0] !== undefined){
            flights = this.props.flights.map(eachFlight => {
                console.log(eachFlight.callsign);
                if (eachFlight.estDepartureAirport !== null &&  eachFlight.estArrivalAirport !== null && eachFlight.icao24 !== null && eachFlight.callsign !==null) {
                    return (
                    <tr>
                        <td>
                        <form className="flightadd" method="POST" action="/home/maps">
                            <button name="flight" className="addButton" type="submit" value={eachFlight.icao24}>+</button>
                            <div className="flightNo">{eachFlight.callsign}</div>
                            <div className="flightDest">
                                {eachFlight.estDepartureAirport} <img className="planeicon" src="/airplane_icon.png"/> {eachFlight.estArrivalAirport}
                            </div>  
                        </form>
                        </td>
                    </tr>)

                } 
            });
        } else {
            flights = (
                <tr>
                    <td>
    
                    Oh no, no result for this flight found. Please try again.
                </td>
            </tr>)

        }

        console.log("yoohoo", flights);
        if (flights.filter(word => word !== undefined).length ===0) {
            flights = (
                <tr>
                    <td>
    
                    Oh no, no result for this flight found. Please try again.
                </td>
            </tr>)
        }
        

        
        return (
            <React.Fragment>
                <Template results={flights}>
                </Template>
            </React.Fragment>
        );
    }
}

module.exports = Results;