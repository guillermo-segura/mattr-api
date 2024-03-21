import express = require('express');

import { issueCredential } from '../../controllers/credentialController';
const automaticAuth = require('../../middlewares/automaticAuth');

const router = express.Router();

// curl -X POST -H "Content-Type: application/json" -d '{"givenName": "", "email": "", "countryOfResidence": "", "dateOfBirth": "", "photo": ""}' http://localhost:3000/api/issue-credential
router.post('/api/issue-credential', automaticAuth, issueCredential);

module.exports = router;
