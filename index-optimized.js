import { readFile } from "node:fs/promises";

console.time("optmized 1");
for (let i = 0; i < 5000; i++) {
  const file = await readFile("./files/lorem-1.txt", "utf8");
  const firstWord = file.split(" ", 1)[0];
  // console.log(firstWord)
}
console.timeEnd("optmized 1");
console.time("optmized 50");
for (let i = 0; i < 5000; i++) {
  const file = await readFile("./files/lorem-50.txt", "utf8");
  const firstWord = file.split(" ", 1)[0];
  // console.log(firstWord)
}
console.timeEnd("optmized 50");
console.time("optmized 100");
for (let i = 0; i < 5000; i++) {
  const file = await readFile("./files/lorem-100.txt", "utf8");
  const firstWord = file.split(" ", 1)[0];
  // console.log(firstWord)
}
console.timeEnd("optmized 100");
