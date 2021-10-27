// // refer to this MDN article for further explanation on what symbols are
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// // symbols are useful for preventing name clashes & we can make private properties with these
// const nameSymbol = Symbol("name");
// const nameSymbol2 = Symbol("name");

// class Pet {
//     constructor(name) {
//         this[nameSymbol] = name;
//     }

//     getName = () => this[nameSymbol];

//     get name() {
//         return this[nameSymbol]
//     }
// }

// const dog = new Pet('dog');

// console.log(dog.getName());

// // nothing will change the name
// dog.name = "not dog";
// dog.nameSymbol = "not dog";
// dog[nameSymbol2] = "not dog";

// console.log(dog.name)

// other uses include messing with javascript's interpreter!
// simple example:

class Fibonacci {
    constructor(amount) {
        this.amount = amount;
    }

    *[Symbol.iterator]() {
        let current = 1, a = 1, b = 1, i = 1;

        yield 0;
        yield 1;

        while (i++ < this.amount) {
            current = b;
            yield current;
            b += a;
            a = current;
        }
    }
};

const fib = new Fibonacci(8);

console.log([...fib]);