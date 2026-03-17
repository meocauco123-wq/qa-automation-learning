const { getMe } = require("../../api/userAPI");

async function testInvalidToken() {
  console.log("🚀 Start Invalid Token Test");

  try {
    await getMe("invalid_token_123");

    console.log("❌ TEST FAIL - should not allow invalid token");
    process.exit(1);

  } catch (error) {
    const status = error.response?.status;
    const data = error.response?.data;

    console.log("STATUS:", status);
    console.log("BODY:", data);

    if (status === 401) {
      console.log("✅ TEST PASS");
    } else {
      console.log("❌ TEST FAIL");
      process.exit(1);
    }
  }
}

testInvalidToken();