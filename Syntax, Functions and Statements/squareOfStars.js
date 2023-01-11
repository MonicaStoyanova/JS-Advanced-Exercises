function squareOfStars(n) {

    if (n == undefined) {
        return '* '.repeat(5);
    }

    for (let i = 0; i < n; i++) {
        console.log('* '.repeat(n));

    }

}
squareOfStars(7)