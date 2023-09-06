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
let http = require("http");

let server = http.createServer((req, res) => {
  req.url;
  res.write("<h1>Hellow World 20</h1>");
  res.write("<h1>404</h1>");
  res.write("<h1>Hi</h1>");
  res.end();
});

server.listen(8081, () => {
  console.log("create localhost 3000");
});
