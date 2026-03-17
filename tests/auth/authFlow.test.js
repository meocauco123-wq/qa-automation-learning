const { login } = require("../../api/authAPI");

async function testAuthFlow() {
  console.log("🚀 Start Auth API Test");

  const start = Date.now();

  try {
    const response = await login("emilys", "emilyspass");

    const responseTime = Date.now() - start;

    console.log("📦 FULL RESPONSE:", response.data);

    // ✅ Validate status code
    if (response.status !== 200) {
      throw new Error("❌ Status code is not 200");
    }

    // ✅ Validate token
    const token = response.data.accessToken;

    if (!token) {
      throw new Error("❌ Token is missing");
    }

    console.log("🔑 TOKEN:", token);

    console.log("⏱ Response time:", responseTime);

    console.log("✅ TEST PASS");

  } catch (error) {
    console.log("❌ TEST FAIL");

    if (error.response) {
      console.log("STATUS:", error.response.status);
      console.log("BODY:", error.response.data);
    } else {
      console.log(error.message);
    }

    // ❗ Quan trọng: fail CI
    process.exit(1);
  }
}

testAuthFlow();