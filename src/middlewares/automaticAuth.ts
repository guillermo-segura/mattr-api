import express = require('express');

const { getAuthToken } = require('../repositories/credentialRepository');

module.exports = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const response = await getAuthToken(
    process.env.AUTH_CLIENT_ID,
    process.env.AUTH_CLIENT_SECRET,
    process.env.AUTH_AUDIENCE,
  );

  if (response?.access_token) {
    req.headers.authorization = `Bearer ${response.access_token}`
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
