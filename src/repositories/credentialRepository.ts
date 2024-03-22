const { createDid, signWebSemanticCredential, encryptMessage, sendMessage, retrieveDid } = require('../services/mattrVIIService');
import { CredentialRequest, EncryptionRequest } from '../services/types';

export const getIssuerDid = async (didId: string) => {
  console.log('[credentialRepository] getIssuerDid called');
  return await retrieveDid(didId); 
};

export const createIssuerDid = async () => {
  console.log('[credentialRepository] createIssuerDid called');
  const options = {
    url: 'mattr.global',
  };
  return await createDid('web', options); 
};

export const createVerifiableCredential = async (request: CredentialRequest) => {
  console.log('[credentialRepository] createVerifiableCredential called');
  return await signWebSemanticCredential(request); 
};

export const sendMessageToWallet = async (subjectDid: string, encryptionReq: EncryptionRequest) => {
  console.log('[credentialRepository] sendMessageToWallet called');
  const encryptedJWE = await encryptMessage(encryptionReq);
  return await sendMessage(subjectDid, encryptedJWE.jwe);  
};
