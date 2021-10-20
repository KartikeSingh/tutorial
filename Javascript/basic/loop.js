// Loops
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(`Hello this loop's index is ` + i);
    if (i === 3) break;
}

let i = 0;
while (i === 0) {
    console.log(i);
    i++;
}

let j = 0;
do {
    console.log(j);
    j++
} while (j < 2);