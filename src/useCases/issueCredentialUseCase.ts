const { createIssuerDid, createVerifiableCredential, sendMessageToWallet } = require('../repositories/credentialRepository');

interface CredentialClaims {
  givenName: string;
  email: string;
  countryOfResidence: string;
  dateOfBirth: string;
  photo: string;
  walletDid: string;
};

module.exports = ({ givenName, email, countryOfResidence, dateOfBirth, photo, walletDid }: CredentialClaims) => {
  console.log('[issueCredentialUseCase] called');

  // CALL REPOSITORY
  const issuerDid = createIssuerDid();
  // const credential = createVerifiableCredential(walletDid, issuerDid);
  // const message = sendMessageToWallet();

  return true;
};
