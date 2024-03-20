require('reflect-metadata');
// https://stackoverflow.com/questions/27676884/explicitly-specifying-types-for-express-application-request-response
import express = require('express');
import http = require('http');

const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app: express.Application = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT;
const url = process.env.APP_URL;
let server: http.Server | null = null;

app.use('/', (req: express.Request, res: express.Response) => {
  return res.status(200).json({ message: 'Hello World!' });
});

server = app.listen(port, async () => {
  console.log(`[server]: Server is running at ${url}:${port}`);
});

export { server };

export default app;
