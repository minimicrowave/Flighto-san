const jsonfile = require('jsonfile');
const file = 'airports.json'; //TODO:

const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'));
app.use(cookieParser());

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);


const db = require('./db');
require('./Routes/routes')(app, db);

const fs = require('fs');

const server = app.listen(process.env.PORT || 3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

let onClose = function(){

  server.close(() => {
    console.log('Process terminated')
    pool.end( () => console.log('Shut down db connection pool'));
  })
};



// read json and console.logs as queryTexts to be seeded into psql
fs.readFile('airports.json', (err, obj) => {

  let x = (JSON.parse(obj));

  // x.forEach(element => {
  //   console.log(`INSERT INTO airportcodes (code, lat, lon, name, city, state, country, icao) VALUES ('${element.code}', ${element.lat}, ${element.lon}, '${element.name}', '${element.city}', '${element.state}', '${element.country}', '${element.icao}');`)
  // })
  
});



process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);