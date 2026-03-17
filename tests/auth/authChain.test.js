const { login } = require("../../api/authAPI");
const { getMe } = require("../../api/userAPI");

async function testAuthChain() {
  console.log("🚀 Start Auth Chain Test");

  try {
    // 🔥 Step 1: Login
    const loginRes = await login("emilys", "emilyspass");
    const token = loginRes.data.accessToken;

    console.log("🔑 TOKEN:", token);

    // 🔥 Step 2: Call /me
    const meRes = await getMe(token);

    console.log("📦 USER:", meRes.data);

    // ✅ Validate
    if (meRes.status === 200 && meRes.data.username === "emilys") {
      console.log("✅ TEST PASS");
    } else {
      console.log("❌ TEST FAIL");
      process.exit(1);
    }

  } catch (error) {
    console.log("❌ TEST FAIL");

    if (error.response) {
      console.log("STATUS:", error.response.status);
      console.log("BODY:", error.response.data);
    } else {
      console.log(error.message);
    }

    process.exit(1);
  }
}

testAuthChain();