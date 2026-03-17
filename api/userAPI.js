const axios = require("axios");

async function getMe(token) {
  return axios.get(
    "https://dummyjson.com/auth/me",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

module.exports = { getMe };