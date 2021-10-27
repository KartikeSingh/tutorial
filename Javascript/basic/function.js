function add(a, b, callback) {
    const c = a + b;
    if (typeof (callback) === "function") callback(c);

    return c;
}