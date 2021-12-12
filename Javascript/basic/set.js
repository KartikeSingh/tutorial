const a = [1, 2, 3, 4, 5, 4, 5, 3], set = new Set(a);
const wSet = new WeakSet();

wSet.add({ 22: 2 })
wSet.add({ a: "12" })


// console.log(wSet);

set.add(2)
set.add(6)
set.add(69)

// set.delete(6)

// set.clear()

// console.log(set.entries());
// console.log(set.values(), set.keys());

// console.log(set.size);

// set.forEach(e=>{
//     console.log(e);
// })

// console.log(set.has(2));

// console.log(set);