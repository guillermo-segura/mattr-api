import axios from "axios";

const instance = axios.create({
  baseURL: 'https://guillermo-segura-nztybx.vii.au01.mattr.global',
});

let accessToken: string | null = null;

const createApiAuthToken = async (clientId?: string, clientSecret?: string, clientAudience?: string) => {
  const url = `${process.env.AUTH_URL}/oauth/token`;
  const headers = { 'Content-Type': 'application/json' };
  const body = {
    client_id: clientId,
    client_secret: clientSecret,
    audience: clientAudience,
    grant_type: 'client_credentials'
  };

  try {
    const response = await axios.post(url, body, { headers });
    accessToken =  response.data.access_token;
    return accessToken;
  } catch (err) {
    console.error(err);
  }
};

instance.interceptors.request.use(
  async (config) => {
    if (!accessToken) {
      console.log('Creating API Auth Token. -$0.02');
      try {
        await createApiAuthToken(
          process.env.AUTH_CLIENT_ID,
          process.env.AUTH_CLIENT_SECRET,
          process.env.AUTH_AUDIENCE,
        );
      } catch (err) {
        return Promise.reject(err);
      }
    }
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (err) => { return Promise.reject(err); },
);

export default instance;
