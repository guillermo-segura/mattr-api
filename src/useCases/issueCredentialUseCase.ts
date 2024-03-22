const { getIssuerDid, createIssuerDid, createVerifiableCredential, sendMessageToWallet } = require('../repositories/credentialRepository');

interface CredentialClaims {
  givenName: string;
  email: string;
  countryOfResidence: string;
  dateOfBirth: string;
  photo: string;
  [key: string]: string;
};

// STEPS SOURCE: https://learn.mattr.global/tutorials/offer/direct/overview
module.exports = async (subjectDid: string, claims: CredentialClaims) => {
  // STEP 1 - GET THE CREDENTIAL ISSUER
  const issuerDid = await getIssuerDid('did:web:mattr.global');
  const issuerId = issuerDid?.didDocument?.id;

  if (issuerId) {
    const credentialReq = {
      payload: {
        name: 'MATTR Tech Challenge',
        description: 'Tech challenge',
        type: ['TechInterviewStage'],
        credentialSubject: {
          id: subjectDid,
          ...claims,
        },
        issuer: {
          id: issuerId,
          name: 'MATTR Learning Institute',
        },
        expirationDate: '2026-01-01T00:00:00.000Z'
      },
    };

    // STEP 2 - CREATE A VERIFIABLE CREDENTIAL
    // @ISSUE: { code: 'BadRequest', message: 'Failed to generate credential' }
    const credential = createVerifiableCredential(credentialReq);

    if(credential) {
      // REQUEST FROM https://learn.mattr.global/tutorials/offer/direct/encrypt
      const encryptionReq = {
        senderDidUrl: issuerDid?.didDocument?.keyAgreement?.id,
        recipientDidUrls: [subjectDid],
        payload: {
          id: credential.id,
          type: process.env.ENCRYPTION_PAYLOAD_TYPE,
          from: issuerId,
          created_time: Date.now(),
          body: {
            credentials: [credential.credential],
          }
        }
      };
  
      // STEP 3 & 4 - ENCRYPT AND SEND THE CREDENTIAL
      sendMessageToWallet(subjectDid, encryptionReq);

      return true;
    }
  }

  return false;
};
