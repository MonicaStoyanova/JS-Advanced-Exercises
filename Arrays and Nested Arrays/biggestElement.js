function biggestElement(matrix) {
  // it is working but there should be a better solution
  let l = matrix.length;

  let biggestInEach = [];

  for (let i = 0; i < l; i++) {
    let currentArray = matrix[i];
    let ordered = currentArray.sort((a, b) => b - a);

    biggestInEach.push(ordered[0]);
  }
  let result = biggestInEach.sort((a, b) => b - a);

  return result[0];
}
biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);
