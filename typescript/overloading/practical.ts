/**
 * Make a function to perform following actions
 * 1. one digit => square
 * 2. two digits => sum
 * 3. zero digit => random string
 */

const s = ["swe", "de3reeedrfc", "Ed3"];

function xd(): string;
function xd(a: number): number;
function xd(a: number, b: number): number;

function xd(a?: number, b?: number): number | string {
    if (a && b) return a + b;
    else if (a && !b) return a * a;
    else return s[Math.floor(Math.random() * s.length)];
}

let u = 6 * xd(3);

xd()