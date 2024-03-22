export interface CredentialClaims {
  givenName: string;
  email: string;
  countryOfResidence: string;
  dateOfBirth: string;
  photo: string;
  [key: string]: string;
};

export interface CredentialSubject {
  id: string;
  [key: string]: string;
}
export interface CredentialBranding {
  backgroundColor?: string;
  watermarkImageUrl?: string;
}
export interface CredentialIssuer {
  id: string
  name?: string;
  iconUrl?: string;
  logoUrl?: string;
}

export interface CredentialPayload {
  name?: string;
  description?: string;
  type: string[];
  credentialSubject: CredentialSubject;
  credentialBranding?: CredentialBranding;
  issuer: CredentialIssuer;
  expirationDate?: string;
}

export interface CredentialRequest {
  payload: CredentialPayload,
  proofType?: string,
  tag?: string,
  persist?: boolean,
  revocable?: boolean,
};

export interface CredentialProof {
  type: string;
  created: string;
  jws: string;
  proofPurpos: string;
  verificationMethod: string;
};

export interface Credential {
  ['@context']: string;
  type: string[];
  issuer: CredentialIssuer;
  issuanceDate: string;
  credentialSubject: CredentialSubject;
  proof: CredentialProof;
};

export interface EncryptionRequest {
  senderDidUrl: string,
  recipientDidUrls: string[],
  payload: {
    id: string,
    type: string,
    from: string,
    created_time: string,
    body: {
      credentials: Credential[],
    }
  }
};

export interface RecipientHeader {
  alg: string;
  kid: string;
  epk: {
    kty: string;
    crv: string;
    x: string;
  },
  skid: string;
}

export interface JWERecipient {
  header: RecipientHeader;
  encrypted_key: string;
};

export interface JWE {
  protected: string;
  recipients: JWERecipient[],
  ciphertext: string;
  iv: string;
  tag: string;
};
