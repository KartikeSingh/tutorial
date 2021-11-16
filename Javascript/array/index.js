// Defining
const a = [10, 2, 4, 8, 0, 4], b = ['a', 'b', 'e', 'z', 'k', 'g', 'k'], c = [true, null, undefined, false, 2, 's', a, [a, b]],
    data = [
        { coins: 2 },
        { coins: 22 },
        { coins: 23 },
        { coins: 25 },
        { coins: 72 },
    ];
const aa = { a: 1, v: 2, c: 3 }
// Properties
b.length

// // Class Methods
// console.log(Array.from(Object.values(aa)));
// console.log(Array.from([...Object.entries(aa)]));

// console.log(Array.of(a, b, c));

// console.log(Array.isArray(a));
// console.log(Array.isArray(aa));

// Instance Methods
// console.log(a);
// console.log(a.sort((a, b) => a - b));
// console.log(b.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)));
// console.log(data.sort((a,b) => b.coins + a.coins));

// console.log(a[1]);
a.at(1) || a[1];

// console.log([...b.entries()]);

// console.log(a.every(v => v % 2 === 0));
// console.log(b.some(v => v === 'k'));

// console.log(b.includes('aa'));

// console.log(data.filter(v => v.coins > 40));

//  console.log(a.find(v => v > 4), a.findIndex(v => v > 4));
a.findIndex(v => v > 4);

// console.log(b.indexOf('k'));
b.lastIndexOf('d')

// console.log(b.reverse());
// console.log(a.concat(b, ["ade", "De"]));

// console.log(c.flat(2));

// console.log(b.join("  ,  "));

// console.log(b.reduce((p, c) => p + c + " | "));
// console.log(b.reduceRight((p, c) => p + c + " | "));

b.reduceRight((p, c) => p + c)

// console.log(...b.keys(),
//     ...b.values());

// console.log(b);
// b.pop()
// console.log(b);
// b.shift()
// console.log(b);

// console.log(b);
// b.push("he","w")
// console.log(b);
// b.unshift("ww")
// console.log(b);

// console.log(b);
// console.log(b.slice(0, 2));
// console.log(b);
// console.log(b.splice(0, 2));
// console.log(b);

// console.log([ 1, 2, 3, 4, 5, 6 ])
// console.log([ 1, 2, 3, 4, 5, 6 ].copyWithin(0,2))

// // [ 1, 2, 3, 4, 5, 6 ]
// // [ 3, 4, 5, 6, 5, 6 ]

// console.log(a.forEach((v) => v * v * v))
// console.log(a.map((v) => {
//     return v * v;
// }))


// console.log(JSON.stringify(data,null,2));