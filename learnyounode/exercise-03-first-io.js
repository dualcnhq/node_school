var fs = require('fs')

var fileName = process.argv[2];
var fileBuffer = fs.readFileSync(fileName);
var fileString = fileBuffer.toString();
var splitString = fileString.split("\n");
var numLines = splitString.length - 1;
console.log(numLines);
