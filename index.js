
var fs = require("fs");

fs.copyFileSync("f.txt", "f1.txt");

var s = require("superheroes");

var name = s.random();

console.log(name);