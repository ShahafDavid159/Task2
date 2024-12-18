const fs = require("fs");
const path = require("path");
let textOut = "";
const files = 10;

function textFromFile(textIn, index) {
  const arr = textIn.split("\r\n");

  if (arr.length <= index) {
    for (let i = 0; i < arr.length; i++) {
      textOut += arr[i] + "\n";
    }
  } else {
    for (let j = 0; j < index; j++) {
      textOut += arr[j] + "\n";
    }
  }
  textOut += "\n";
}

for (let y = 1; y <= files; y++) {
  const filepath = path.join(__dirname, "text", `${y}.txt`);
  const textIn = fs.readFileSync(filepath, "utf-8");
  textFromFile(textIn, y);
}

console.log(textOut);
fs.writeFileSync(path.join(__dirname, "output.txt"), textOut, "utf-8");
