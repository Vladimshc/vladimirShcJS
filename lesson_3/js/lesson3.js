// // ---------Faktorial-----------
// var testFaktorial_2 = factorial(-2);
// var testFaktorial_1 = factorial(-1);
// var testFaktorial0 = factorial(0);
// var testFaktorial1 = factorial(1);
// var testFaktorial2 = factorial(2);
// var testFaktorial3 = factorial(3);
// var testFaktorial4 = factorial(4);
// var testFaktorial5 = factorial(5);
// var testFaktorial6 = factorial(6);
// console.log(testFaktorial_2);
// console.log(testFaktorial_1);
// console.log(testFaktorial0);
// console.log(testFaktorial1);
// console.log(testFaktorial2);
// console.log(testFaktorial3);
// console.log(testFaktorial4);
// console.log(testFaktorial5);
// console.log(testFaktorial6);
//
// //----------Degree-------------
// var testDegree_0 = extent(0, -8);
// var testDegree_8 = extent(2, -8);
// var testDegree0 = extent(2, 0);
// var testDegree8 = extent(2, 8);
// console.log(testDegree_0);
// console.log(testDegree_8);
// console.log(testDegree0);
// console.log(testDegree8);


function factorial(number) {
    var result;
    if (number < 0) {
        result = undefined;
    }
    else if (number > 1) {
        result = number * factorial(number - 1);
    }
    else if (number = 1) {
        result = number;
    }
    else {
        result = 1;
    }
    return result;
}

function extent(number, deg) {
    var res;
    if (number === 0 && deg <= 0) {
        res = undefined;
    }
    else if (deg === 0) {
        res = 1;
    }
    else if (deg < 0) {
        deg = deg * (-1);
        res = 1 / (number * extent(number, deg - 1));
    }
    else if (deg > 1) {
        res = number * extent(number, deg - 1);
    } else res = number;
    return res;
}

function sumNumbers(number) {
    var res = 0;

    if (number > 0){
        res = number % 10;
        res = res + sumNumbers((number/10)^0);
    }
    return res;

}

// var testNumber1 = sumNumbers(3742);
var testNumber2 = sumNumbers(123456789123);
// var testNumber3 = sumNumbers(0);
// var testNumber4 = sumNumbers(-1);
// var testNumber5 = sumNumbers(4476748946544644611468743547869966343456789);
// var testNumber6 = sumNumbers(44767489465446446);
// console.log(testNumber1);
console.log(testNumber2);
// console.log(testNumber3);
// console.log(testNumber4);
// console.log(testNumber5);
// console.log(testNumber6);
// console.log(3+7+4+2);
console.log(1+2+3+4+5+6+7+8+9+1+2+3);
// console.log(0);
// console.log(-1);
// console.log(4+4+7+6+7+4+8+9+4+6+5+4+4+6+4+4+6+1+1+4+6+8+7+4+3+5+4+7+8+6+9+9+6+6+3+4+3+4+5+6+7+8+9);
// console.log(4+4+7+6+7+4+8+9+4+6+5+4+4+6+4+4+6);



