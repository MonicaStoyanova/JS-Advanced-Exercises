function print(array, delimiter) {
  console.log(array.join(delimiter));

  /*
        let result = '';
        let l = array.length;

        for (let i = 0; i < l - 1; i++) {
            let word = array[i];
            result += word + delimiter;
        }
        result += array[l - 1];
        console.log(result);
        */
}
print(["One", "Two", "Three", "Four", "Five"], "-");
