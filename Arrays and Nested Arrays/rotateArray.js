function rotateArray(array, rotation) {
  for (let i = 0; i < rotation; i++) {
    let removed = array.pop();
    array.unshift(removed);
  }
  console.log(array.join(" "));
}

rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
rotateArray(["1", "2", "3", "4"], 2);
