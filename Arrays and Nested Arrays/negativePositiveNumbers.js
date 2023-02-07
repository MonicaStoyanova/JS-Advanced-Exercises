function negativePositiveNumbers(array) {

    let result = [];

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (current < 0) {
            result.unshift(current);
        } else {
            result.push(current);
        }
    }
    for (const number of result) {
        console.log(number);
    }

}
negativePositiveNumbers([7, -2, 8, 9])