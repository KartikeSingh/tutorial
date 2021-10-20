const name = "Sushi", age = 100;

// Scopes
if (age === 100) {
    const name = "shisui";
    var name2 = "hello";
    let name3 = "world";

    console.log("Inside");
    console.log(name, name2, name3);
}

console.log("Outside");
console.log(name, name2);