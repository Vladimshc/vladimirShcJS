// // // ---------Faktorial-----------
// console.log("Faktorial");
// var testFaktorial_2 = factorialRecursion(-2);
// var testFaktorial_1 = factorialRecursion(-1);
// var testFaktorial0 = factorialRecursion(0);
// var testFaktorial1 = factorialRecursion(1);
// var testFaktorial2 = factorialRecursion(2);
// var testFaktorial3 = factorialRecursion(3);
// var testFaktorial4 = factorialRecursion(4);
// var testFaktorial5 = factorialRecursion(5);
// var testFaktorial6 = factorialRecursion(6);
// console.log(testFaktorial_2);
// console.log(testFaktorial_1);
// console.log(testFaktorial0);
// console.log(testFaktorial1);
// console.log(testFaktorial2);
// console.log(testFaktorial3);
// console.log(testFaktorial4);
// console.log(testFaktorial5);
// console.log(testFaktorial6);
// //
// //----------Degree-------------
// console.log("Degree");
// var testDegree_0 = extentRecursion(0, -8);
// var testDegree_8 = extentRecursion(2, -8);
// var testDegree0 = extentRecursion(2, 0);
// var testDegree8 = extentRecursion(2, 8);
// console.log(testDegree_0);
// console.log(testDegree_8);
// console.log(testDegree0);
// console.log(testDegree8);
//
// // ----------Sum Numbers-------------
// console.log("Sum Numbers");
// var testNumber1 = sumNumbersRecursion(3742);
// var testNumber2 = sumNumbersRecursion(12345678912);
// var testNumber3 = sumNumbersRecursion(0);
// var testNumber4 = sumNumbersRecursion(-1);
// console.log(testNumber1);
// console.log(3+7+4+2);
// console.log(testNumber2);
// console.log(1+2+3+4+5+6+7+8+9+1+2);
// console.log(testNumber3);
// console.log(0);
// console.log(testNumber4);
// console.log(-1);

// // ----------Sum To-------------
// var testSumToRec = sumToRecursion(10000);
// console.log(testSumToRec);
// var testSumToCyc = sumToCycle(10000);
// console.log(testSumToCyc);
// var testSumToArithProgression = sumToArithProgression(10000);
// console.log(testSumToArithProgression);

// // ----------Fibonacci Numbers-------------
console.log("Fibonacci number, calculated by recursive");
var testFib0 = fibRecursion(0);
var testFib1 = fibRecursion(1);
var testFib2 = fibRecursion(2);
var testFib3 = fibRecursion(3);
var testFib4 = fibRecursion(4);
var testFib5 = fibRecursion(5);
var testFib6 = fibRecursion(6);
console.log("Number 0 : " + testFib0);
console.log("Number 1 : " + testFib1);
console.log("Number 2 : " + testFib2);
console.log("Number 3 : " + testFib3);
console.log("Number 4 : " + testFib4);
console.log("Number 5 : " + testFib5);
console.log("Number 6 : " + testFib6);

console.log("Fibonacci number, calculated by cycle");
var testFibCycle0 = fibCycle(0);
var testFibCycle1 = fibCycle(1);
var testFibCycle2 = fibCycle(2);
var testFibCycle3 = fibCycle(3);
var testFibCycle4 = fibCycle(4);
var testFibCycle5 = fibCycle(5);
var testFibCycle6 = fibCycle(6);
console.log("Number 0 : " + testFibCycle0);
console.log("Number 1 : " + testFibCycle1);
console.log("Number 2 : " + testFibCycle2);
console.log("Number 3 : " + testFibCycle3);
console.log("Number 4 : " + testFibCycle4);
console.log("Number 5 : " + testFibCycle5);
console.log("Number 6 : " + testFibCycle6);

function factorialRecursion(number) {
    var result;
    if (number < 0) {
        result = undefined;
    }
    else if (number > 1) {
        result = number * factorialRecursion(number - 1);
    }
    else if (number = 1) {
        result = number;
    }
    else {
        result = 1;
    }
    return result;
}

function extentRecursion(number, deg) {
    var res;
    if (number === 0 && deg <= 0) {
        res = undefined;
    }
    else if (deg === 0) {
        res = 1;
    }
    else if (deg < 0) {
        deg = deg * (-1);
        res = 1 / (number * extentRecursion(number, deg - 1));
    }
    else if (deg > 1) {
        res = number * extentRecursion(number, deg - 1);
    } else res = number;
    return res;
}

function sumNumbersRecursion(number) {
    var res = 0;
    if (number > 0){
        res = number % 10;
        res = res + sumNumbersRecursion((number/10)^0);
    }
    return res;
}

function sumToRecursion(n) {
    var res = 0;
    if (n >= 1) {
       res = n + sumToRecursion(n - 1);
    } else n = 0;
    return res;
}

function sumToCycle(n) {
    var res = 0;
    for (var i = n; n > 0; n--){
        res = res + n;
    }
    return res;
}

function sumToArithProgression(n) {
    var res;
    return res = (n + 1)/2*n;
    
}

function fibRecursion(n) {
    var res;
    if (n > 1){
        var n1 = n - 1;
        var n2 = n - 2;
        res = fibRecursion(n1)+fibRecursion(n2);
    } else {
        res = n;
    }
    return res;
}

function fibCycle(n) {
    var num1 = 0;
    var num2 = 1;
    var num3;
    for (var i = 0; i < n; i++){
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
     }
    return num1;
}



