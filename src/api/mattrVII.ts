import axios from "axios";

const instance = axios.create({
  baseURL: 'https://guillermo-segura-nztybx.vii.au01.mattr.global',
});

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
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

instance.interceptors.request.use(
  async (config) => {
    const response = await createApiAuthToken(
      process.env.AUTH_CLIENT_ID,
      process.env.AUTH_CLIENT_SECRET,
      process.env.AUTH_AUDIENCE,
    );
    if (response?.access_token) {
      config.headers.Authorization = `Bearer ${response?.access_token}`;
    }
    return config;
  },
  (err) => { return Promise.reject(err); },
);

export default instance;
