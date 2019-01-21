const axios = require("axios");


module.exports = (db) => {

    const form = (request, response) => {
        var flightNo = request.body.flightNo;
        var results;

        // round down to nearest hour for API data extraction
        var timeNow = parseInt(((new Date).getTime()) / 1000);
        // get current epoch time
        timeNow = (timeNow - (timeNow % 3600)) - 3600;
        var timeTwoHAgo = timeNow - (120 * 60);
        
        //  get all of the most recent flights available
        if (flightNo === "") {
            axios.get(`https://minimicrowave:inyourdreams@opensky-network.org/api/flights/all?begin=${timeTwoHAgo}&end=${timeNow}`).then(result => {
                results = result.data.splice(0, 61);
                // console.log(results)
            }).then(() => {
                response.render('../views/results.jsx', {
                    flights: results
                });
            })
        } else {
            axios.get(`https://minimicrowave:inyourdreams@opensky-network.org/api/flights/all?begin=${timeTwoHAgo}&end=${timeNow}`).then(result => {
    
                    results = result.data.filter(element => {
                        if (element.callsign !== null){
                            var callsign;
                            // deletes all spaces
                            callsign = element.callsign.replace(/\s+/g, '');
                            if (callsign.includes(flightNo.toUpperCase())) {
                                return element;
                            }
                        } else {
                            return [null];
                        }
                    });
    
                console.log(results);
            }).then(() => {
                response.render('../views/results.jsx', {
                    flights: results
                });
            })

        }        
    }

    const maps = (request, response) => {   
        var icaoNo = (request.body.flight).replace(/\s+/g, '');
        var userid = request.cookies['userid'];
        console.log(icaoNo, userid);

        db.users.addFlights(icaoNo, userid, (error, queryResult) => {
            console.log("hi", queryResult)
            let result = queryResult.map(eachResult => {
                return eachResult.flightno;
            })
            
            let allmaps = result.toString();
            console.log(allmaps);

            response.cookie('maps', maps);
            response.redirect('/home');
        })

            
        
    }

    // Export controller functions as a module
    return {
        form,
        maps
    };
}