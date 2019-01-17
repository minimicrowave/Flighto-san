const axios = require("axios");


module.exports = (db) => {

    const form = (request, response) => {
        var flightNo = request.body.flightNo;
        var results;
        
        if (flightNo === "") {
            //  get the all of the most recent flights available
            var timeNow =parseInt(((new Date).getTime())/1000);
            // round down to nearest hour for API data extraction
            timeNow = (timeNow - (timeNow % 3600)) - 3600;
            var timeTwoHAgo = timeNow - (120 * 60);
            axios.get(`https://minimicrowave:inyourdreams@opensky-network.org/api/flights/all?begin=${timeTwoHAgo}&end=${timeNow}`).then(result => {
                results = result.data.splice(0, 61);    
                console.log(results)}).then(() => {
                    response.render('../views/results.jsx', {flights: results});
                })
            }


        // var responseHandler = function () {
        //     // console.log("response text", this.responseText);
        //     var results = JSON.parse(this.responseText);
        //     results = results.splice(0,21);
        //     console.log(results);
        // };
        
        // var req = new XMLHttpRequest();
        // req.addEventListener("load", responseHandler);
        
        
        // if (flightNo === ""){
        //     // get the all of the most recent flights available
        //     var timeNow =parseInt(((new Date).getTime())/1000);
        //     // round down to nearest hour for API data extraction
        //     timeNow = (timeNow - (timeNow % 3600)) - 3600;
        //     var timeTwoHAgo = timeNow - (120 * 60);

        //     var ajaxUrl = `https://minimicrowave:inyourdreams@opensky-network.org/api/flights/all?begin=${timeTwoHAgo}&end=${timeNow}`;
            
        // } else {
            
            
        // }
        
        // req.open("GET", (ajaxUrl));
        // req.send();

        // if (loggedin === undefined) {

            // response.send(flightNo);
        // } else {
            // response.redirect("/user/profile");
        // }
    }


    // Export controller functions as a module
    return {
        form
    };

}