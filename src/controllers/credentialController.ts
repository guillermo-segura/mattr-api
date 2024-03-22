import express = require('express');

const issueCredentialUseCase = require('../useCases/issueCredentialUseCase');

export const issueCredential = async (req: express.Request, res: express.Response) => {
  const { givenName, email, countryOfResidence, dateOfBirth, photo, walletDid } = req.body;
  try {
    if (await issueCredentialUseCase(walletDid, { givenName, email, countryOfResidence, dateOfBirth, photo })) {
      res
        .status(201)
        .json({ message: 'Credential Issued' });
    } else {
      res
        .status(400)
        .json({ message: 'Bad Request' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }  
};
