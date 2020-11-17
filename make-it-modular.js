const MyModule = require("./MyModule.js");
const name = process.argv[2];
const ext = process.argv[3];

MyModule(name, ext, function (err, files) {
  if (err) {
    console.log("error", err);
  } else {
    for (i = 0; i < files.length; i++) {
      console.log(files[i]);
    }
  }
});