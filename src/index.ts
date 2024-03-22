// https://stackoverflow.com/questions/27676884/explicitly-specifying-types-for-express-application-request-response
import express = require('express');

const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const credentialRoutes = require('./routes/api/credentialRoutes');

dotenv.config();

const app: express.Application = express();
app.use(bodyParser.json());
app.use(cors());
app.use(credentialRoutes);

const PORT = process.env.PORT;
const URL = process.env.APP_URL;

app.use('/', credentialRoutes);

app.listen(PORT, async () => {
  console.log(`[SERVER]: Listening at ${URL}:${PORT}`);
});

module.exports = app;
