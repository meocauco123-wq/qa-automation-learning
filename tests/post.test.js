const https = require("https");

console.log("Test posts API");

https.get("https://jsonplaceholder.typicode.com/posts", (res) => {

  console.log("STATUS:", res.statusCode);

  if (res.statusCode === 200) {
    console.log("POST API PASS");
    process.exit(0);
  } else {
    console.log("POST API FAIL");
    process.exit(1);
  }

});