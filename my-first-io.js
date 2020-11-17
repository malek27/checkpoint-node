const fs = require("fs");

const string = fs.readFileSync(process.argv[2]);
const str = string.toString().split("\n").length - 1
console.log(str);
