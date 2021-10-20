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

aObject.log("Hello there youtube & a is " +aObject.a)