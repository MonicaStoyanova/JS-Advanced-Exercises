function sortingNumbers(array) {
  /*
    let copy = array.slice()
    let sortedFromSmallest = copy.sort((a, b) => a - b);
    let sortedFrombiggest = array.sort((a, b) => b - a);

    let l = array.length / 2;

    let result = [];

    for (let i = 0; i < l; i++) {
        const s = sortedFromSmallest[i];
        const b = sortedFrombiggest[i];
        result.push(s, b);

    }
    result.length = array.length;

    return result;
    */
  let result = [];
  array = array.sort((a, b) => a - b);

  while (array.length !== 0) {
    result.push(array.shift());
    result.push(array.pop());
  }

  return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
