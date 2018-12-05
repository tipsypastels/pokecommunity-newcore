// ES6 syntax for require()
import express from 'express';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import './connection.js';

// import our database models
import User from './models/User.js';

// import our controllers
import UsersController from './controllers/UsersController.js';

// server setup
const app = express();
const port = process.env.PORT || 8080;

// app.use allows us to add middleware,
// in this case bodyParser which lets us handle POST requests
// that pass additional data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create a router do define the endpoints
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'hello world!' });
});

router.get('/users/:userid', UsersController.show);

// prefixes /api/v1 to all our routes, good practice
app.use('/api/v1/', router);
app.listen(port);
console.log(`Listening on PORT: ${port}! Try localhost:${port}/api/v1!`);