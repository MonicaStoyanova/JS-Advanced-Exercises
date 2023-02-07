function biggerHalf(array) {

    let sorted = array.slice().sort((a, b) => a - b);
    let l = sorted.length;
    let result = sorted.slice(l / 2);

    return result;
}

biggerHalf([3, 19, 14, 7, 2, 19, 6])