/**
 * Return the number of vowels in each line, separated by spaces
 */
// const fs = require("fs");
import fs from "fs";
const data = (source) => {
  let input = "src/javascript/code-abbey/vowels/";
  source === "test"
    ? (input = `${input}test-data.txt`)
    : (input = `${input}input.txt`);
  return fs.readFileSync(`${input}`, {
    encoding: "utf-8",
    flag: "r",
  });
};

function returnVowels(inp) {
  return inp
    .split("\n")
    .map((str) => str.split("").filter((x) => /[a|e|i|o|u|y]/.test(x)).length)
    .filter((y) => y > 0)
    .join(" ");
}

console.log(returnVowels(data()));
