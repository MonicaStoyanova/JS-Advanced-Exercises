function circleArea(arg) {
    if (arg === Number(arg)) {
        area = Math.PI * arg * arg;
        console.log(area.toFixed(2));
    } else {
        let type = typeof arg;
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }

}
circleArea(5)