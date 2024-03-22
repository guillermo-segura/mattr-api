import express = require('express');
const { body } = require('express-validator');

import { issueCredential } from '../../controllers/credentialController';

const router = express.Router();

const validations = [
  body("givenName").exists().isString().notEmpty(),
  body("email").exists().isString().notEmpty(),
  body("countryOfResidence").exists().isString().notEmpty(),
  body("photo").exists().isString(),
  body("walletDid").exists().isString().notEmpty(),
];

// curl -X POST -H "Content-Type: application/json" -d '{"givenName": "John Doe", "email": "john@doe.com", "countryOfResidence": "New Zealand", "dateOfBirth": "1990-01-01", "photo": "", "walletDid": "did:key:z6MkqW5J8VadfM7bYWKAtMrVrZ1JnsuEnPvPiTqmFV3ecVz7"}' http://localhost:3001/api/issue-credential
router.post('/api/issue-credential', validations, issueCredential);

module.exports = router;
