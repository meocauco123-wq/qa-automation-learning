const { login } = require("../../api/authAPI");

async function testLogin() {

  console.log("Start Auth API Test");

  const data = await login();

  console.log("TOKEN:", data.accessToken);

  if (data.accessToken) {
    console.log("TEST PASS");
  } else {
    console.log("TEST FAIL");
  }

}

testLogin();