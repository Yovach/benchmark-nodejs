import { readFile } from "node:fs/promises";

console.time("normal 1");
for (let i = 0; i < 5000; i++) {
  const file = await readFile("./files/lorem-1.txt", "utf8");
  const firstWord = file.split(" ")[0];
  // console.log(firstWord)
}
console.timeEnd("normal 1");
console.time("normal 50");
for (let i = 0; i < 5000; i++) {
  const file = await readFile("./files/lorem-50.txt", "utf8");
  const firstWord = file.split(" ")[0];
  // console.log(firstWord)
}
console.timeEnd("normal 50");
console.time("normal 100");
for (let i = 0; i < 5000; i++) {
  const file = await readFile("./files/lorem-100.txt", "utf8");
  const firstWord = file.split(" ")[0];
  // console.log(firstWord)
}
console.timeEnd("normal 100");
