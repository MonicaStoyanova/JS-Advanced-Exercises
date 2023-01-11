function mathOperations(numOne, numTwo, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = numOne + numTwo;
            break;
        case '-':
            result = numOne - numTwo;
            break;
        case '*':
            result = numOne * numTwo;
            break;
        case '/':
            result = numOne / numTwo;
            break;
        case '%':
            result = numOne % numTwo;
            break;
        case '**':
            result = numOne ** numTwo;
            break;


    }
    console.log(result);
}
mathOperations(5, 6, '+')