const
    ob = {
        name: "Shisui",
        age: true,
    },
    ob2 = Object.create({
        createdAt: Date.now(),
        name: "Unknown",
        job: "none"
    }),
    ar = ["Zero", "One", "Two", "Three", "Four"];
    const a = ob;

// console.log(Object.fromEntries(ar.entries()));

// console.log(Object.entries(ob));
// console.log(Object.keys(ob), Object.values(ob));

// console.log(Object.getOwnPropertyDescriptors(ob));
// Object.getOwnPropertyDescriptor(ob, "name")

Object.defineProperty(ob, "mail", {
    writable: false,
    configurable: false,
    enumerable: true,
    value: "shisui@gmail.com",
})

Object.defineProperties(ob, {
    "new1": {
        writable: false,
        configurable: false,
        enumerable: true,
        value: Math.floor(Math.random() * 132),
    }, "new2": {
        writable: false,
        configurable: false,
        enumerable: true,
        value: Math.floor(Math.random() * 132),
    },
})

class aa {
    constructor() {
        this[Symbol()] = "hello";
        this[Symbol("")] = "hello";
        this.a = "heee"
    }
}
const ob3 = new aa();

Object.getOwnPropertyNames
// console.log(ob3[Object.getOwnPropertySymbols(ob3)[0]]);

Object.getOwnPropertySymbols

Object.setPrototypeOf(ob, {
    name: "Shisui",
    surname: "sweeiqojimska",
    age: 7687
})
// console.log(Object.getPrototypeOf(ob));

Object.preventExtensions
Object.freeze
Object.seal

// console.log(Object.is(ob,a));
Object.isExtensible
Object.isFrozen
Object.isSealed

console.log(
    Object.toString(),
    JSON.stringify(ob));