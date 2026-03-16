const https = require("https");
const fs = require("fs");

console.log("Start API test");

https.get("https://jsonplaceholder.typicode.com/posts/1", (res) => {

  const result = `
API TEST RESULT
status: ${res.statusCode}
time: ${new Date()}
`;

  fs.writeFileSync("reports/api-report.txt", result);

  console.log(result);

  if (res.statusCode === 200) {
    console.log("TEST PASS");
    process.exit(0);
  } else {
    console.log("TEST FAIL");
    process.exit(1);
  }

});