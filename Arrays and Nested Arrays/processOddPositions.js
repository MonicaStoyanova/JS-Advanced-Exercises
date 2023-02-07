function processOddPositions(array) {

    let result = [];

    for (let i = 1; i < array.length; i += 2) {
        let current = array[i];
        result.push(current * 2);

    }
    result = result.reverse().join(' ').split(',');
    return result;
}
processOddPositions([10, 15, 20, 25])