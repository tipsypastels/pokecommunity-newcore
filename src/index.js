import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'hello world!' });
});

app.use('/api', router);
app.listen(port);
console.log(`Listening on PORT: ${port}!`);