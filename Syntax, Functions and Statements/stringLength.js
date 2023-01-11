function stringLength(one, two, three) {
    let sum = one.length + two.length + three.length;
    let avg = Math.floor(sum / 3);
    console.log(sum);
    console.log(avg);
}
stringLength('chocolate', 'ice cream', 'cake')