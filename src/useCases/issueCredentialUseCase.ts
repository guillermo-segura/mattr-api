const { createIssuerDid, createVerifiableCredential, sendMessageToWallet } = require('../repositories/credentialRepository');

interface CredentialClaims {
  givenName: string;
  email: string;
  countryOfResidence: string;
  dateOfBirth: string;
  photo: string;
};

module.exports = ({ givenName, email, countryOfResidence, dateOfBirth, photo }: CredentialClaims) => {
  console.log('[issueCredentialUseCase] called', { givenName, email, countryOfResidence, dateOfBirth, photo });

  // CALL REPOSITORY
  createIssuerDid();
  createVerifiableCredential();
  sendMessageToWallet();

  return true;
};
