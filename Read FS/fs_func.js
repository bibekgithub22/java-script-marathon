const fs = require("fs");

function print(err, data) {
  if (err) {
    console.log("File not found 404!");
  } else {
    console.log(data);
  }
}
//async
fs.readFile("a.txt", "utf-8", print);
fs.readFile("b.txt", "utf-8", print);
fs.readFile("x.txt", "utf-8", print); //file doesnt exist
