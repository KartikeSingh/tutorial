const book = new Map();
const smallBook = new WeakMap();
const ob = { "0.1": "0.1" }

smallBook.set(ob, "ho23")

book.set(
    "1",
    "ackonew;qo"
)

book.set("2", "ou34")

// book.has("ou34")
// book.delete("1")
// book.clear()

// console.log([...book.values()]);
// console.log([...book.keys()]);

// console.log(book.entries());

// book.forEach((v, k) => console.log(v,k))

// console.log(book.size);

// console.log(smallBook.get(ob));