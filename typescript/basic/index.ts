let varr: number;
let Varr;

type str = string | number;

let a: str;

function sum(a: number, b: number): number {
    return a + b;
}

function whyNot(kekw: any): any {

}

const user = {
    id: "1",
    name: "shiusi",
    age: 69,
}

interface User {
    id: string
    name: string
    age: number,

    hobby?: Array<string>
}

interface database {
    users: [User]
}

function deleteUser(theUser: User): User {
    return theUser;
}

deleteUser(user);

class shisui {
    id: string;
    name: string;
    age: number;

    constructor() {
        this.id = "1";
        this.name = "shisui"
        this.age = 69;
    }
}

deleteUser(new shisui())

interface hello<a, b = string> {
    first: a,
    second: b,
}

let vr: hello<number, number> = {
    first: 2,
    second: 1
}

function get<rt = string>(key: string): rt {
    let something: rt;


    //@ts-ignore
    return something;
}

let AA: number = 2 + get<number>("number");