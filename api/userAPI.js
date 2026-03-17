const axios = require("axios");
const { baseURL } = require("../config/env");

async function getMe(token) {
  const response = await axios.get(
    `${baseURL}/auth/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response;
}

module.exports = { getMe };