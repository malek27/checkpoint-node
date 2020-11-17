const fs = require("fs");
const path = require("path");

module.exports = function (name, ext, callback) {
  var extension = "." + ext;
  fs.readdir(name, function (err, data) {
    if (err) {
      callback(err, null);
    } else {
      result = [];
      data.forEach(function (file) {
        if (path.extname(file) == extension) {
          result.push(file);
        }
      });
      callback(null, result);
    }
  });
};