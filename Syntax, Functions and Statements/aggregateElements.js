function aggregateElements(array) {

    let sum = 0;
    let sumInverse = 0;
    let string = '';

    for (const number of array) {
        sum += number;
        sumInverse += 1 / number;
        string += number.toString();
    }

    console.log(sum);
    console.log(sumInverse);
    console.log(string);

}
aggregateElements([2, 4, 8, 16])