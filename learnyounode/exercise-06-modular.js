var filteredLS = require("./node_modules/exercise-06-module");

filteredLS(process.argv[2], process.argv[3], function (err, files) {
  if (err) { return console.log(err); }
  files.forEach(function (f) { console.log(f); });
});