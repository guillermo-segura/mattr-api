import mattrVIIApi from '../api/mattrVII';
import { CredentialRequest, EncryptionRequest, JWE } from '../services/types';

export const retrieveDid = async (didId: string) => {
  try {
    const response = await mattrVIIApi.get(`/core/v1/dids/${didId}`);
    console.log('[mattrVIIService] retrieveDid called', response.data);
    return response.data;  
  } catch (err) {
    console.error(err);
  }
};

export const createDid = async (method: 'web' | 'key', options: any) => {
  try {
    const response = await mattrVIIApi.post('/core/v1/dids', { method, options });
    console.log('[mattrVIIService] createDid called', response.data);
    return response.data;  
  } catch (err) {
    console.error(err);
  }
};

export const signWebSemanticCredential = async (request: CredentialRequest) => {
  try {
    const response = await mattrVIIApi.post('/v2/credentials/web-semantic/sign', request);
    console.log('[mattrVIIService] signWebSemanticCredential called', response.data);
    return response.data;  
  } catch (err) {
    console.error(err);
  }
};

export const encryptMessage = async (encryptionReq: EncryptionRequest) => {
  try {
    const response = await mattrVIIApi.post('/core/v1/messaging/encrypt', encryptionReq);
    console.log('[mattrVIIService] encryptMessage called', response.data);
    return response.data;  
  } catch (err) {
    console.error(err);
  }
};

export const sendMessage = async (subjectDid: string, message: JWE) => {
  try {
    const response = await mattrVIIApi.post('/core/v1/messaging/send', { subjectDid, message });
    console.log('[mattrVIIService] sendMessage called', response.data);
    return response.data;  
  } catch (err) {
    console.error(err);
  } 
};
