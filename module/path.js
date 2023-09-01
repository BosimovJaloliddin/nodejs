let path = require("path");
let fs = require("fs");

fs.mkdir(path.join(__filename, "template"), (err) => {
  if (err) throw new Error();

  console.log("Create new file");
});
