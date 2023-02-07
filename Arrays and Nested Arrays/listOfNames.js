function listOfNames(array) {
  /*
    let result = array.sort((a, b) => a.localeCompare(b));
    let count = 1;

    for (const name of result) {

        console.log(count + '.' + name);
        count++;
    }
    */

  array
    .sort((a, b) => a.localeCompare(b))
    .forEach((ele, i) => {
      console.log(`${i + 1}.${ele}`);
    });
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
