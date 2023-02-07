function addAndRemoveElements(array) {
  let result = [];
  let l = result.length;
  let counter = 0;
  for (const command of array) {
    counter++;
    if (command === "add") {
      result.push(counter);
    } else if (command === "remove") {
      result.pop();
    }
  }
  if (result.length > 0) {
    for (const n of result) {
      console.log(n);
    }
  } else {
    console.log("Empty");
  }
}
addAndRemoveElements(["add", "add", "add", "add"]);
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
addAndRemoveElements(["remove", "remove", "remove"]);
