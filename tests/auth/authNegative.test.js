const { login } = require("../../api/authAPI");

async function testLoginFail() {
  console.log("🚀 Start Negative Auth test");

  try {
    await login("emilys", null);

    console.log("❌ TEST FAIL - API should not allow login");
    process.exit(1);

  } catch (error) {
    const status = error.response?.status;
    const data = error.response?.data;

    console.log("STATUS:", status);
    console.log("BODY:", data);

    if (status === 400) {
      console.log("✅ TEST PASS");
    } else {
      console.log("❌ TEST FAIL");
      process.exit(1);
    }
  }
}

testLoginFail();