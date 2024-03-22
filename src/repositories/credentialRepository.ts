const { createDid, signWebSemanticCredential, encryptMessage, sendMessage, retrieveDid } = require('../services/mattrVIIService');

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

export const createVerifiableCredential = async (subjectId: string, issuerId: string) => {
  console.log('[credentialRepository] createVerifiableCredential called');
  return await signWebSemanticCredential(subjectId, issuerId); 
};

export const sendMessageToWallet = async (senderDidUrl: string) => {
  console.log('[credentialRepository] sendMessageToWallet called');
  const encryptedMessage = await encryptMessage(senderDidUrl);
  const to = '';
  return await sendMessage(to);  
};
