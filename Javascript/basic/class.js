class aClass {
    constructor(a) {
        this.a = a;
        this.hi()
    }

    hi() {
        console.log("Hi and a is " + this.a);
    }

    log(string) {
        console.log(string);
    }
}

const aObject = new aClass(59);

aObject.log("Hello there youtube & a is " + aObject.a);

// inheriting a class by 'extending it'

class bClass extends aClass {
    constructor(a, b) {
        // call aClass's constructor
        super(a);
        this.b = b;
    }
}

const bObject = new bClass(69, 420);
console.log(bObject.a); // 69
console.log(bObject.b); // 420
