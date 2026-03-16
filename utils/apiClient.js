const https = require("https");

function request(method, path, data = null) {

  return new Promise((resolve, reject) => {

    const options = {
      hostname: "reqres.in",
      path: path,
      method: method,
      headers: {
        "Content-Type": "application/json"
      }
    };

    const req = https.request(options, (res) => {

      let body = "";

      res.on("data", chunk => body += chunk);

      res.on("end", () => {

        resolve({
          status: res.statusCode,
          body: body
        });

      });

    });

    req.on("error", reject);

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();

  });

}

module.exports = { request };