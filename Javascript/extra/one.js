// console.log(encodeURI("https://www.google .com/somerouter?query=hell oshit sjoeinded-=#"));

// console.log(escape("Hello, &2 3@--="));

// ternary => ? :
const salary = 1000;

// switch
let a = 639;

// switch (a) {
//     case 68:
//         console.log("yoo it is 69 -1");
//         // other code
//         break;

//     case 69:
//         console.log("699");
//     case 70:
//         console.log("eee");
//          break;

//     default:
//         console.log("you are cancelled");
// }

// Type conversion
let ss = " 699 xd";
const a_but_string = a.toString(),
    a_but_float = parseFloat(a),
    string_but_integer = parseInt(ss),
    string_but_float = parseFloat(ss);

const ob = { shisui: "name" }, ob2 = '{ "name": "Shisui sama" ';
JSON.stringify(ob)
JSON.parse(ob2);
// Documentation

// Documenting a variable

/**
 *  An master piece
 */
let aaa = 2;

// DOcumenting functions

/**
 * A function to mathmatically add the two parameters provided by some nerd programmer instead of literally using the + opertator, then immediately returning that value to make their life easier and make their code look more weird
 * @param {Number} a the first number which you want to add to another number, here called the second number because it is in the second position btw their position have no relation to their value the first one can be smaller than the second one and vice versa 
 * @param {Number} b it is obvisouly neither the first number nor the third number, yep you got it it is the second number, to add to the first number btw do you know the meaning of vice versa 
 * @returns {Number} dude why will you need to read that isn't that obvious too, YES we will return the SUM of the numbers kekw, cringy boi
 * @example A small example of running this cool ass function for nerds like YOU!
 *  ```js
 * sum(10, 20); // a comment to see how comments looks in a example
 * ```
*/
function sum(a, b) {
    return "a + b";
}

/**
 * @typedef {Object} Options The options
 * @property {String} a gyuebwn
 * @property {String} c gyuebwn
 * @property {String} d gyuebwn
 * @property {String} e gyuebwn
 */

/**
 * @typedef {String | Boolean} nn some cokdencskmla
 */

class human {
    /**
     * The name of the person
     */
    name;

    /**
     * The age of the person
     */
    age;

    /**
     * 
     * @param {String} name The name of the human
     * @param {Number} age The age of the human
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    /**
     * Displays the stats of a human
     */
    display() {
        console.log(this.name + " is " + this.age + " old");
    }
}