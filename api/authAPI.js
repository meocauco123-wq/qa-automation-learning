const axios = require("axios");

async function login() {

  const response = await axios.post(
    "https://dummyjson.com/auth/login",
    {
      username: "emilys",
      password: "emilyspass"
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