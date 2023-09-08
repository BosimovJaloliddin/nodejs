const logger = () => {
  let res = {};

  for (let i = 2; i < process.argv.length; i++) {
    let arr = process.argv[i].split("=");
    res[arr[0]] = arr[1] ? arr[1] : true;
  }
  return res;
};

console.log(logger());
