const { login } = require("../../api/authAPI");

async function testLoginSuccess() {

  console.log("Start Auth API Test");

  const start = Date.now();

  const data = await login("emilys", "emilyspass");

  const duration = Date.now() - start;

  console.log("FULL RESPONSE:", data);
  console.log("Response time:", duration);

  // 1. Check token
  if (!data.accessToken) {
    throw new Error("Missing accessToken");
  }

  // 2. Check username đúng
  if (data.username !== "emilys") {
    throw new Error("Wrong username");
  }

  // 3. Check data type
  if (typeof data.id !== "number") {
    throw new Error("ID is not number");
  }

  // 4. Check performance
  if (duration > 2000) {
    throw new Error("API too slow");
  }

  console.log("TEST PASS");

}

testLoginSuccess();