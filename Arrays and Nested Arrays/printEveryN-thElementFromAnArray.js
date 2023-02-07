function print(array, step) {
  /*
    let result = [];
    for (let i = 0; i < array.length; i += step) {
        result.push(array[i]);
    }
    return result;
    */
  return array.filter((_, index) => index % step === 0);
}
print(["5", "20", "31", "4", "20"], 2);
print(["1", "2", "3", "4", "5"], 6);
