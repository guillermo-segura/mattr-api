export const createApiAuthToken = async () => {
  console.log('[mattrVIIService] createApiAuthToken called');

  // AXIOS POST {{auth_url}}/oauth/token

  // BODY
  // const echoPostRequest = {
  //   url: tokenUrl,
  //   method: 'POST',
  //   header: 'Content-Type:application/json',
  //   body: {
  //     mode: 'application/json',
  //     raw: JSON.stringify(
  //         {
  //         	client_id: clientId,
  //         	client_secret: clientSecret,
  //         	audience: clientAudience,
  //         	grant_type: 'client_credentials'
  //         })
  //   }
  // };
  return true;  
};

export const createDid = async () => {
  console.log('[mattrVIIService] createDid called');

  // AXIOS POST {{baseUrl}}/core/v1/dids

  // BODY
  // {
  //   "method": "web",
  //   "options": {
  //     "url": "mattr.global"
  //   }
  // }
  return true;  
};

export const signWebSemanticCredential = async () => {
  console.log('[mattrVIIService] signWebSemanticCredential called');

  // AXIOS POST {{baseUrl}}/v2/credentials/web-semantic/sign

  // BODY
  // {
  //   "payload": {
  //     "name": "Course credential",
  //     "description": "Diploma in Management",
  //     "type": [
  //       "EducationalOccupationalCredential",
  //       "AlumniCredential"
  //     ],
  //     "credentialSubject": {
  //       "id": "did:key:z6MkqW5J8VadfM7bYWKAtMrVrZ1JnsuEnPvPiTqmFV3ecVz7",
  //       "givenName": "Emma",
  //       "familyName": "Tasma",
  //       "alumniOf": "Zealopia University"
  //     },
  //     "credentialBranding": {
  //       "backgroundColor": "#860012",
  //       "watermarkImageUrl": "https://static.mattr.global/credential-assets/zealopia/web/watermark.svg"
  //     },
  //     "issuer": {
  //       "id": "did:web:mattr.global",
  //       "name": "Zealopia Business Institute",
  //       "iconUrl": "https://static.mattr.global/credential-assets/zealopia/web/logo.svg",
  //       "logoUrl": "https://static.mattr.global/credential-assets/zealopia/web/icon.svg"
  //     },
  //     "expirationDate": "2025-02-01T08:12:38.156Z"
  //   },
  //   "proofType":"Ed25519Signature2018",
  //   "tag": "external-identifier",
  //   "persist": false,
  //   "revocable": true
  // }
  return true;  
};

export const encryptMessage = async () => {
  console.log('[mattrVIIService] encryptMessage called');

  // AXIOS POST {{baseUrl}}/core/v1/messaging/encrypt

  // BODY
  // {
  //   "senderDidUrl": "did:key:z6Mko4PvuwKzmjtaKTEV6ZhMSYqX5myTSe3L3Md4feiwCoua#z6LSkKk8HK73jYfUQRBHX3Qeb1Agv39qVNFn7n2PjRvjpPcy",
  //   "recipientDidUrls": [
  //     "did:key:z6MkgmEkNM32vyFeMXcQA7AfQDznu47qHCZpy2AYH2Dtdu1d",
  //     "did:key:z6MkgxxdrThaRd7HbeAA4pYEwAgKT6ZXy2aNTcPkmeF1yWHN"
  //   ],
  //   "payload": {
  //     "id": "731961f2-bdc3-4f1e-8d59-cc308fd60ec8",
  //     "type": "https://mattr.global/schemas/verifiable-credential/offer/OidcCredentialProvider",
  //     "from": "did:key:z6MkndAHigYrXNpape7jgaC7jHiWwxzB3chuKUGXJg2b5RSj",
  //     "created_time": "1616466734",
  //     "body": {
  //       "uri": "openid://discovery?issuer=https://tenant.vii.mattr.global/ext/oidc/v1/issuers/0dceeddd-f717-4bf2-b520-b3ddcd104a60"
  //     }
  //   }
  // }
  return true;  
};

export const sendMessage = async () => {
  console.log('[mattrVIIService] sendMessage called');

  // AXIOS POST {{baseUrl}}/core/v1/messaging/send

  // BODY
  // {
  //   "to": "did:key:z6MkgmEkNM32vyFeMXcQA7AfQDznu47qHCZpy2AYH2Dtdu1d",
  //   "message": {
  //     "protected": "eyJhbGciOiJYQzIwUCJ9",
  //     "recipients": [
  //       {
  //         "header": {
  //           "alg": "ECDH-1PU+A256KW",
  //           "kid": "did:key:z6MkgmEkNM32vyFeMXcQA7AfQDznu47qHCZpy2AYH2Dtdu1d#z6LSsvqSJkBvVEsDC8cxMHuQ3sKoLRMXB1MdtoLrMUq6A8Rg",
  //           "epk": {
  //             "kty": "OKP",
  //             "crv": "x25519",
  //             "x": "kYsO02jWHATTJel6OpePqlkdDmKlE5VOr18UblgL8W0"
  //           },
  //           "skid": "did:key:z6Mko4PvuwKzmjtaKTEV6ZhMSYqX5myTSe3L3Md4feiwCoua#z6LSkKk8HK73jYfUQRBHX3Qeb1Agv39qVNFn7n2PjRvjpPcy"
  //         },
  //         "encryption_key": "n1VUf5SQdSFNtb8DHzYfJJ_lFhJcGDAPJWG8Y1W3d2qYyPzyxMhyaA"
  //       },
  //       {
  //         "header": {
  //           "alg": "ECDH-1PU+A256KW",
  //           "kid": "did:key:z6MkgxxdrThaRd7HbeAA4pYEwAgKT6ZXy2aNTcPkmeF1yWHN#z6LSgDiT1CkducmcSPaq9E1Uj1qdSXBjsUNqqLQLrUu8EHWd",
  //           "epk": {
  //             "kty": "OKP",
  //             "crv": "x25519",
  //             "x": "P3jcIMPGK8thxyHxUsWB5fEsLnltJqRDWMNywtexk24"
  //           },
  //           "skid": "did:key:z6Mko4PvuwKzmjtaKTEV6ZhMSYqX5myTSe3L3Md4feiwCoua#z6LSkKk8HK73jYfUQRBHX3Qeb1Agv39qVNFn7n2PjRvjpPcy"
  //         },
  //         "encryption_key": "5ZOTqwj8NredkXEOp4ZDLL1ohRQqNTS508BTkLlUVCkDoYvizCIdrg"
  //       }
  //     ],
  //     "ciphertext": "Dl4zBqMeEDwcnyyc17nYvSQ048fcsha_Lm0dfer1nqfo5y8oHvD2VGNTp_lawNJMWCzQF3NDZxxKFz__wTUeHCqisCE_DWbjo_W-R3avzW9S-JFajv9NRtjlfd5yp-1TtD2N5d-8oTtMGdAxq3dftN2Od1xRe4stubJBebl3nf8-lG99DIVGdL8Y-D98kFDxnMxgCKn4RXyHnMowFWlhQCooLeYqo8aWjqVFkzuJzn-p47W7rV9BCuoVThhVuNkjQm_dhBrqu0QMpjJucz7OvOHp0mojdYNKwvWT6dfOVNXetMlKjWCGtCTNFaDTGLc4agdcTjAlaF1iedcVXDOLqVvEugXWGlusE3a68y6gmPnqHjXR6CsEfPwkb5hKKtsyrh1eHu_9UUang5o6N76mummVw4UZkDF6tP1PVGPvyctz82tthnOcjO5mZQG41xfMEMNxWtF8P8wCh4LotpdexXtYigzBgkI1Qoa_FK1czYWAUovysAJCTOZtmg==",
  //     "iv": "jSd3E-ElCHE-QhSDxrQ-Jv4eQhkxOj0s",
  //     "tag": "dbDolGVDdvYsYdn-vVrICw=="
  //   }
  // }
  return true;  
};
