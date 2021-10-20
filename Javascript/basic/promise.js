// Resolving promise
async function sum(a, b) {
    await new Promise(res => setTimeout(res, 1000));

    return a + b;
}

console.log(sum(23456,2))

sum(10, 12).then(async v => {
   
    console.log(`The awaited sum is ${await sum(69, 0)}`);
})