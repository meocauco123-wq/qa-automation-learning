const https = require("https");

console.log("Start API test");

https.get("https://jsonplaceholder.typicode.com/posts/1", (res) => {

  console.log("STATUS:", res.statusCode);

  if (res.statusCode === 201) {
    console.log("TEST PASS");
    process.exit(0);
  } else {
    console.log("TEST FAIL");
    process.exit(1);
  }

}).on("error", (err) => {
  console.log("ERROR:", err.message);
  process.exit(1);
});