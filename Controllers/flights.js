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
                console.log(results)
            }).then(() => {
                response.render('../views/results.jsx', {
                    flights: results
                });
            })
        } else {
            axios.get(`https://minimicrowave:inyourdreams@opensky-network.org/api/flights/all?begin=${timeTwoHAgo}&end=${timeNow}`).then(result => {
                results = result.data.find(element => {
                    // deletes all spaces
                    var callsign = element.callsign.replace(/\s+/g, '')
                    if (callsign=== flightNo.toUpperCase()) {
                        return element;
                    }
                });
                console.log(results);
            }).then(() => {
                response.render('../views/results.jsx', {
                    flights: [results]
                });
            })



        }


        // Export controller functions as a module

    }
    return {
        form
    };
}