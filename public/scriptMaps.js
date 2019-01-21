// set up authorisation for API acquisition
let headers = new Headers();

const user = 'minimicrowave';
const pass = 'inyourdreams';

headers.set('Authorization', 'Basic ' + window.btoa(`${user}:${pass}`));

// gets value of map cookies
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

// get name cookies

var name = getCookie('username');
name = name.split('%20').join(' ');

var nametag = document.querySelector('#name');
nametag.textContent = `Welcome, ${name}!`



// get map cookies

var allMaps = (getCookie('maps')).split("%2C");

// removes all empty strings
for (var i = allMaps.length - 1; i >= 0; i--) {
    if (allMaps[i] === "") {
        allMaps.splice(i, 1);
    }
}

// array of failedCodes
let failedCodes = [];
let count = 0;

// throwing divs into HTML
if (allMaps.length === 0) {
    let mapdiv = document.querySelector('#mapdiv')
    let eachMap = document.createElement('div');
    eachMap.className = "d-flex flex-column mapcontainer";


    let maptitle = document.createElement('div');
    maptitle.className = "p-2";
    maptitle.innerHTML = `<img class="planeicon" src="/airplane_icon.png"> You have no flights yet! Search and add a flight to start!`;

    eachMap.appendChild(maptitle);


    mapdiv.appendChild(eachMap);
} else {
    retrieveMaps();
}


function drawMap(obj, count) {
    let mapdiv = document.querySelector('#mapdiv')
    let eachMap = document.createElement('div');
    eachMap.className = "d-flex flex-column mapcontainer";


    let maptitle = document.createElement('div');
    maptitle.className = "p-2 eachmap";
    maptitle.innerHTML = `<img class="planeicon" src="/airplane_icon.png"> ` + obj.callsign + `<form class="flightdel" method="POST" action="/home/maps/delete?_method=DELETE"><button href="#" name="flighticao" value="${obj.icao24}"type="submit" class="btn btn-outline-secondary btn-sm crossbutton">&times;</button></form>`;

    let googlemap = document.createElement('div');
    googlemap.className = "mapdiv";
    googlemap.id = `map` + count;

    eachMap.appendChild(maptitle);
    eachMap.appendChild(googlemap);
    mapdiv.appendChild(eachMap);

    let flightcoor = obj.path.map(coord => {
        return ({
            lat: coord[1],
            lng: coord[2]
        })
    })

    let lastlocalinfo = obj.path[obj.path.length - 1];
    let lastlocalcoor = {
        lat: lastlocalinfo[1],
        lng: lastlocalinfo[2]
    };
    console.log(lastlocalcoor);

    initMap(count, flightcoor, lastlocalcoor);

}

async function retrieveMaps() {
    for (let map of allMaps) {
        // retrieve API data
        let url = `https://opensky-network.org/api/tracks/all?icao24=${map}&time=0`


        await fetch(url, {
                headers
            }).then(function (response) {
                return response.json()
            })
            .then(function (data) {
                // console.log(data);
                count++;
                drawMap(data, count);

            })
            .catch(function (error) {
                console.log(map);
                failedCodes.push(map);
                // console.log('Request failed:', error);

            });
    }
    console.log(failedCodes)

}

function initMap(count, flightcoor, lastlocalcoor) {
    var map = new google.maps.Map(document.getElementById('map' + count), {
        zoom: 6,
        center: lastlocalcoor,
        mapTypeId: 'terrain'
    });

    var flightPlanCoordinates = flightcoor;

    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#80001C',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    var plane = {
        image: 'plane-icon-up.png',
        rotation: 130,
        id: 'hi'
    }
    
    var marker = new google.maps.Marker({
        position: lastlocalcoor,
        map: map,
        // rotation: 132,
        icon: plane,
        id: 'ho',
      });

   

    flightPath.setMap(map)
}