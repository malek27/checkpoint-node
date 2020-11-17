const fs = require("fs");
const ext = process.argv[3];
const patern = RegExp("\\." + ext + "$");

file = fs.readdir(process.argv[2], function (err, list) {
  if (err) {
    console.log("error", err);
  } else {
    for (let i = 0; i < list.length; i++) {
      if (patern.test(list[i])) {
        console.log(list[i]);
      }
    }
  }
});
