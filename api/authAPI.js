const axios = require("axios");
const { baseURL } = require("../config/env");

async function login(username, password) {
  const response = await axios.post(
    `${baseURL}/auth/login`,
    {
      username: username,
      password: password
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  return response;
}

module.exports = { login };