// const os = require("os");

// console.log(os.homedir());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.platform());

// ================================================

// let path = require("path");
// let fs = require("fs");

// fs.writeFile(
//   path.join(__dirname, "node", "text.txt"),
//   "New text file",
//   (err) => {
//     if (err) throw new Error();

//     console.log("create new file");
//   }
// );

// fs.appendFile(
//   path.join(__dirname, "node", "text.txt"),
//   " and new info",
//   (err) => {
//     if (err) throw new Error();

//     console.log("add new info");
//   }
// );

// fs.readFile(path.join(__dirname, "node", "text.txt"), "utf-8", (err, data) => {
//   if (err) throw new Error();

//   console.log(data);
// });

//======================================================

// fs.mkdir(path.join(__dirname, "template"), (err) => {
//   if (err) throw new Error();

//   console.log("Create new file");
// });
// fs.mkdir(path.join(__dirname, "node"), (err) => {
//   if (err) throw new Error();

//   console.log("Create file");
// });

//===========================================
// let http = require("http");

// let server = http.createServer((req, res) => {
//   req.url;
//   res.write("<h1>Hellow World 20</h1>");
//   res.write("<h1>404</h1>");
//   res.write("<h1>Hi</h1>");
//   res.end();
// });

// server.listen(8081, () => {
//   console.log("create localhost 3000");
// });

//=========================================
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.method === "GET") {
//     res.writeHead(200, { "content-type": "text/html" });

//     res.end(`
//         <h2>Tayping Name:</h2>
//         <form method="post" action="/">
//             <input name="text" type="text" placeholder="name"/>
//             <button type="submit">Push</button>
//         </form>
//         `);
//   } else if (req.method === "POST") {
//     res.writeHead(200, { "content-type": "text/html ; charset=utf-8" });

//     let info = [];

//     req.on("data", (data) => {
//       info.push(Buffer.from(data));
//     });

//     req.on("end", () => {
//       let message = info.toString().split("=")[1];

//       res.end(`User name: ${message}`);
//     });
//   }
// });

// server.listen(3000, () => {
//   console.log("localehost:3000");
// });

//=========================================================
const http = require("http");
const fs = require("fs");
const path = require("path");

// const server = http.createServer((req, res) => {
//   if (req.method === "GET") {
//     if (req.url === "/") {
//       fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
//         if (err) throw err;

//         res.end(data);
//       });
//     } else if (req.url === "/api/admin") {
//       res.writeHead(200, { "Content-Type": "text/json" });
//       let obj = {
//         name: "Jaloliddin",
//         surname: "Bosimov",
//         job: "Fullstace dev",
//       };
//       res.end(JSON.stringify(obj));
//     }
//   }
// });

// server.listen(3000, () => {
//   console.log("Create server : 30000");
// });

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    // res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    if (req.url === "/") {
      fs.readFile(path.join(__dirname, "index.html"), "utf-8", (err, data) => {
        if (err) throw Error();

        res.end(data);
      });
    } else if (req.url === "/about") {
      fs.readFile(path.join(__dirname, "about.html"), (err, data) => {
        if (err) throw Error();

        res.end(data);
      });
    } else if (req.url === "/contact") {
      fs.readFile(path.join(__dirname, "contact.html"), (err, data) => {
        if (err) throw err;

        res.end(data);
      });
    } else if (req.url === "/api/admin") {
      res.writeHead(200, { "content-type": "text/json" });
      let admin = {
        name: "Jaloliddin",
        surname: "Bosimov",
        job: "Fullstace dev",
      };

      res.end(JSON.stringify(admin));
    }
  } else if (req.method === "POST") {
    let info = [];

    req.on("data", (data) => {
      info.push(Buffer.from(data));
    });

    req.on("end", () => {
      let name = info.toString().split("=")[1];
      res.end(`User Name : ${name}`);
    });
  }
});

server.listen(3000, () => {
  console.log("LocaleHost Server : 1231");
});
