const { createDid, signWebSemanticCredential, encryptMessage, sendMessage, createApiAuthToken } = require('../services/mattrVIIService');

export const createIssuerDid = async () => {
  console.log('[credentialRepository] createIssuerDid called');
  return createDid(); 
};

export const createVerifiableCredential = async () => {
  console.log('[credentialRepository] createVerifiableCredential called');
  return signWebSemanticCredential(); 
};

export const sendMessageToWallet = async () => {
  console.log('[credentialRepository] sendMessageToWallet called');
  const encryptedMessage = encryptMessage();
  return sendMessage(encryptedMessage);  
};

export const getAuthToken = async (clientId: string, clientSecret: string, clientAudience: string) => {
  console.log('[credentialRepository] getAuthToken called');
  return await createApiAuthToken(clientId, clientSecret, clientAudience);  
};
