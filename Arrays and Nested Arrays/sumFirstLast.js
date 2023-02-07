function sumFirstLast(array) {
    let first = Number(array[0]);
    let l = array.length;
    let last = Number(array[l - 1]);

    return first + last;
}
sumFirstLast(['20', '30', '40'])