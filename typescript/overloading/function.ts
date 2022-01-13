function convertor(time: string): number;
function convertor(time: number): string;
function convertor(time: number, options: object): object;
function convertor(time: number, options: object): string;

function convertor(time: string | number, options: object = {}): any {
    // some stuff
}

let v = convertor("23");
let m = 18 * v;