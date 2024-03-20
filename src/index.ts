// https://stackoverflow.com/questions/27676884/explicitly-specifying-types-for-express-application-request-response
import express = require('express');
import http = require('http');

const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const credentialRoutes = require('./routes/api/credentialRoutes');

dotenv.config();

const app: express.Application = express();
app.use(bodyParser.json());
app.use(credentialRoutes);
app.use(cors());

const PORT = process.env.PORT;
const URL = process.env.APP_URL;

let server: http.Server | null = null;

app.use('/', credentialRoutes);

app.listen(PORT, async () => {
  console.log(`[SERVER]: Listening at ${URL}:${PORT}`);
});

module.exports = app;
