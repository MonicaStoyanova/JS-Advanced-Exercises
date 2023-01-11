function fruit(fruit, grams, pricePerKilo) {
    let weight = grams / 1000;
    let money = weight * pricePerKilo;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
fruit('apple', 1563, 2.35)