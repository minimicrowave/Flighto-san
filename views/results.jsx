var React = require("react");
var Template = require("../views/template");

class Results extends React.Component {
    render() {
        console.log(this.props.flights);
        if (this.props.flights.length > 0){
            var flights = this.props.flights.map(eachFlight => {
                if (eachFlight.estDepartureAirport !== null &&  eachFlight.estArrivalAirport !== null && eachFlight.icao24 !== null) {
                    return (
                    <tr>
                        <td>
                        <form className="flightadd" method="POST" action="#">
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
            var flights = (
                <tr>
                    <td>
                    Oh no, no flights found. Please try again.
                </td>
            </tr>)

            }
        

        
        return (
            <React.Fragment>
                <script type="text/javascript" src="/scriptForm.js"/>
                <Template results={flights}>
                    <p>hi xD</p>
                </Template>
            </React.Fragment>
        );
    }
}

module.exports = Results;