const ms = require('ms-prettify').default;

let input = "2day 38 min 10 sec";
let time = ms(input);

const t = 34732289, t2 = ms("23325ms");

console.log(t2);