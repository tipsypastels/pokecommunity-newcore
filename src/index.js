// ES6 syntax for require()
import express from 'express';
import bodyParser from 'body-parser';
import ormConnect from './connection.js';

let connection;

// import our route builder
import PCRouteBuilder from './PCRouteBuilder';

// server setup
const app  = express();
const port = process.env.PORT || 8080;

// app.use allows us to add middleware,
// in this case bodyParser which lets us handle POST requests
// that pass additional data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create a router do define the endpoints
const router = express.Router();

// connect to the ORM amd build our routes
(async function() {
  connection = await ormConnect();
  PCRouteBuilder.buildRoutes(router, connection);
})();

// prefixes /api/v1 to all our routes, good practice
app.use('/api/v1/', router);
app.listen(port);
console.log(`Listening on PORT: ${port}! Try localhost:${port}/api/v1!`);