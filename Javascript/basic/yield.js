// yield is like return, but it does not exit the function once it is invoked.
// the function that yields must have a * after the function keyword.

// any yield function returns a generator object, with a single method called next().
// next() method returns an object containing the value yielded and a boolean if it's done yielding or not.

function * range(start, end) {
    let i = start;
  
    while (i <= end) {
        yield i;
        i++;
    }
}


const generator = range(5, 10);

while (true) {
    const yielded = generator.next();

    // done yielding. break out of loop
    if (yielded.done) {
        break;
    }
  
    // print out yielded value
    console.log(yielded.value);
}

// this example should output 5 6 7 8 9 10
