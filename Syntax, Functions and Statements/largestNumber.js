function largestNumber(a, b, c) {
    let result = 0;
    if (a > b && a > c) {
        result = a;
    } else if (b > a && b > c) {
        result = b;
    } else if (c > a && c > b) {
        result = c;
    }

    console.log(`The largest number is ${result}.`);
}
largestNumber(5, -3, 16)