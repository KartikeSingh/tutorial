// refer to this MDN article for further explanation on what symbols are
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// symbols are useful for enums.

const myEnum = {
    a: Symbol(),
    b: Symbol(),
    c: Symbol()
};

const input = myEnum.a;

if (input === myEnum.a) {
    console.log("this block will always run");
}

// other uses include messing with javascript's interpreter!
// simple example:

class Fibonacci {
    constructor(amount) {
        this.amount = amount;
    }
  
    * [Symbol.iterator]() {
        let current = 1, a = 1, b = 1, i = 1;
 
        yield 1;
      
        while (i++ < this.amount) {
             current = b;
             yield current;
             b += a;
             a = current;
        }
    }
};

const fib = new Fibonacci(10);

console.log([...fib]);
// outputs [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
