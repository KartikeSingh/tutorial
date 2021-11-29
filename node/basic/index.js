// https://www.nodejs.org

const fs = require('fs');
const path = require('path')
const data = require('./data.json');

// console.log(__dirname,'\n', __filename);
// console.log(path.join(__dirname, "../../hi"));


// console.log(
//     fs.readFileSync(
//         path.join(__dirname, "./hiii"), { encoding: "utf-8" }
//     )
// )

// fs.writeFileSync("./hi.txt", "helllo")

// fs.appendFileSync('./hi',"\nHelllo!")
// fs.copyFileSync('./hi','./hi2')
// console.log(fs.unlinkSync('./hi'));
// console.log(fs.statSync('./hi2').isFile());
// console.log(fs.existsSync('./hi2'));

// process.abort()

// process.cwd() || __dirname || __filename
// console.log(process.cpuUsage());

let i = 0;

// setTimeout(() => {
//     console.log("hi" + i++);
// }, 2000);

// setInterval(() => {
//     console.log("hi" + i++);
// }, 1000)