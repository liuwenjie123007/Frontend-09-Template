let http = require("http");
let fs = require("fs");
let archiver = require("archiver");
let child_process = require("child_process");
let querystring = require("querystring");

// 1.打开 https://github.com/login/oauth/authorize
let client_id = "Iv1.1fa959a4e538c3ff";
child_process.exec(
  `open https://github.com/login/oauth/authorize?client_id=${client_id}`
);

// 3.创建server,接受token,后点击发布
http
  .createServer(function (req, res) {
    let query = querystring.parse(req.url.match(/^\/\?([\s\S]+)$/)[1]);
    publish(query.token);
  })
  .listen(8083);

function publish(token) {
  let request = http.request(
    {
      hostname: "127.0.0.1",
      port: 8082,
      method: "POST",
      path: "/publish?token=" + token,
      headers: {
        "Content-Type": "application/octet-stream",
      },
    },
    (response) => {
      // console.log(response);
    }
  );

  const archive = archiver("zip", {
    zlib: { level: 9 },
  });
  archive.directory("./sample/", false);
  archive.finalize();
  archive.pipe(request);
}
