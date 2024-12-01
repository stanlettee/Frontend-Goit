function sumNum(a, b, c){
    const result = a + b + c;
    return result
}

function makeMessage(sumNum, a, b, c){
    const sum = sumNum(a, b, c);
    const message = 'Cумма чисел дорівнює ' + sum;
    return message;
}

console.log(makeMessage(sumNum, 37, 65, 89))
console.log(makeMessage(sumNum, 34, 56, 78))