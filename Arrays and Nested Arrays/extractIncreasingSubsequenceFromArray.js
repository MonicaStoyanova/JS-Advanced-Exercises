function extract(array) {
    /*
      let result = [];
      let biggest = 0;

      for (let i = 0; i < array.length; i++) {
          let current = array[i];
          if (current >= biggest) {
              result.push(current);
              biggest = current;
          }

      }
      return result;
      */

    let finalResult = [];
    let biggestNumber = array[0];
    return array.reduce((acc, currEl) => {
        if (biggestNumber <= currEl) {
            acc.push(currEl);
            biggestNumber = currEl;
        }
        return acc;
    }, []);
}
extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extract([1, 2, 3, 4]);
extract([20, 3, 2, 15, 6, 1]);