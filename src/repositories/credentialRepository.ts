const { createDid, signWebSemanticCredential, encryptMessage, sendMessage, retrieveDid } = require('../services/mattrVIIService');
import { CredentialRequest, EncryptionRequest } from '../services/types';

export const getOrCreateKeyDid = async (didId?: string) => {
  console.log('[credentialRepository] getKeyDid called');
  if (didId) {
    return await retrieveDid(didId); 
  }
  return await createDid('key', { keyType: "ed25519" });
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
