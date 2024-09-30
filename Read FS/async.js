const fs = require("fs");
const path = require("path");

function print(err, data) {
  console.log(data);
}

fs.readFile("a.txt", "utf-8", print); //async
fs.readFile("b.txt", "utf-8", print); //async

console.log("Done!");

//Might give any of the two as output

// Done!
// hi there Im txt A
// yo yo yo Im B

// Done!
// yo yo yo Im B
// hi there Im txt A
