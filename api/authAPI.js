const axios = require("axios");

async function login(username, password) {
  return axios.post(
    "https://dummyjson.com/auth/login",
    {
      username,
      password
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

module.exports = { login };