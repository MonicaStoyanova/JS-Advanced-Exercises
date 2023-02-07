function pieceOfPie(flavoursArray, targerOne, targetTwo) {
  let startIndex = flavoursArray.indexOf(targerOne);
  let endIndex = flavoursArray.indexOf(targetTwo);

  let result = [];
  for (let i = startIndex; i <= endIndex; i++) {
    result.push(flavoursArray[i]);
  }

  return result;
}
pieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
