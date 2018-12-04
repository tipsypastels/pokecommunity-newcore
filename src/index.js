// ES6 syntax for require()
import express from 'express';
import bodyParser from 'body-parser';

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

// prefixes /api to all our routes, good practice
app.use('/api/v1/', router);
app.listen(port);
console.log(`Listening on PORT: ${port}! Try localhost:${port}/api/v1!`);