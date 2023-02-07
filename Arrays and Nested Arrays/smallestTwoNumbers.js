function smallestTwoNumbers(array) {
    let fromSmallest = array.sort((a, b) => a - b);
    console.log(fromSmallest[0], fromSmallest[1]);
}
smallestTwoNumbers([30, 15, 50, 5])