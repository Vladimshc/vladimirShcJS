// ----------Console Output---------------
// ---------Faktorial-----------
// console.log("Faktorial, calculated by recursive");
// var testFaktorial_2 = factorialRecursion(-2);
// var testFaktorial_1 = factorialRecursion(-1);
// var testFaktorial0 = factorialRecursion(0);
// var testFaktorial1 = factorialRecursion(1);
// var testFaktorial2 = factorialRecursion(2);
// var testFaktorial3 = factorialRecursion(3);
// var testFaktorial4 = factorialRecursion(4);
// var testFaktorial5 = factorialRecursion(5);
// var testFaktorial6 = factorialRecursion(6);
// console.log("Number -2! : " + testFaktorial_2);
// console.log("Number -1! : " + testFaktorial_1);
// console.log("Number 0! : " + testFaktorial0);
// console.log("Number 1! : " + testFaktorial1);
// console.log("Number 2! : " + testFaktorial2);
// console.log("Number 3! : " + testFaktorial3);
// console.log("Number 4! : " + testFaktorial4);
// console.log("Number 5! : " + testFaktorial5);
// console.log("Number 6! : " + testFaktorial6);
//
// console.log("Faktorial, calculated by cycle");
// var testFaktorialCycle_2 = factorialCycle(-2);
// var testFaktorialCycle_1 = factorialCycle(-1);
// var testFaktorialCycle0 = factorialCycle(0);
// var testFaktorialCycle1 = factorialCycle(1);
// var testFaktorialCycle2 = factorialCycle(2);
// var testFaktorialCycle3 = factorialCycle(3);
// var testFaktorialCycle4 = factorialCycle(4);
// var testFaktorialCycle5 = factorialCycle(5);
// var testFaktorialCycle6 = factorialCycle(6);
// console.log("Number -2! : " + testFaktorialCycle_2);
// console.log("Number -1! : " + testFaktorialCycle_1);
// console.log("Number 0! : " + testFaktorialCycle0);
// console.log("Number 1! : " + testFaktorialCycle1);
// console.log("Number 2! : " + testFaktorialCycle2);
// console.log("Number 3! : " + testFaktorialCycle3);
// console.log("Number 4! : " + testFaktorialCycle4);
// console.log("Number 5! : " + testFaktorialCycle5);
// console.log("Number 6! : " + testFaktorialCycle6);
//
// //----------Degree-------------
console.log("Degree, calculated by recursive");
var testDegree_0 = extentRecursion(0, -8);
var testDegree_8 = extentRecursion(2, -8);
var testDegree0 = extentRecursion(2, 0);
var testDegree8 = extentRecursion(2, 8);
console.log("0 to -8 degrees = " + testDegree_0);
console.log("2 to -8 degrees = " + testDegree_8);
console.log("2 to 0 degrees = " + testDegree0);
console.log("2 to 8 degrees = " + testDegree8);

console.log("Degree, calculated by cycle");
var testDegreeCycle_0 = extentCycle(0, -8);
var testDegreeCycle_8 = extentCycle(2, -8);
var testDegreeCycle0 = extentCycle(2, 0);
var testDegreeCycle8 = extentCycle(2, 8);
console.log("0 to -8 degrees = " + testDegreeCycle_0);
console.log("2 to -8 degrees = " + testDegreeCycle_8);
console.log("2 to 0 degrees = " + testDegreeCycle0);
console.log("2 to 8 degrees = " + testDegreeCycle8);

//
// // ----------Sum Numbers-------------
// console.log("Sum Numbers, calculated by recursive");
// var testNumber1 = sumNumbersRecursion(3742);
// var testNumber2 = sumNumbersRecursion(12345678912);
// var testNumber3 = sumNumbersRecursion(0);
// var testNumber4 = sumNumbersRecursion(-1);
// console.log("Number 3742, 3+7+4+2 = " + testNumber1);
// console.log("Number 12345678912, 1+2+3+4+5+6+7+8+9+1+2 = " + testNumber2);
// console.log("Number 0, = " + testNumber3);
// console.log("Number -1 = " + testNumber4);
//
// // ----------Sum To-------------
// console.log("Sum Numbers, 1 to N");
//
// var t0SumToRec = performance.now();
// var testSumToRec = sumToRecursion(10000);
// var t1SumToRec = performance.now();
// console.log("Sum (recursion method)  1 to 10000 = " + testSumToRec);
// console.log("\t calculated by recursive took " +
//     (t1SumToRec - t0SumToRec).toFixed(5) + " milliseconds.");
//
//
// var t0SumToCycle = performance.now();
// var testSumToCycle = sumToCycle(10000);
// var t1SumToCycle = performance.now();
// console.log("Sum (cycle method)  1 to 10000 = " + testSumToCycle);
// console.log("\t calculated by cycle took " +
//     (t1SumToCycle - t0SumToCycle).toFixed(5) + " milliseconds.");
//
// var t0SumToArithProgression = performance.now();
// var testSumToArithProgression = sumToArithProgression(10000);
// var t1SumToArithProgression = performance.now();
// console.log("Sum (arithmetical progression)  1 to 10000 = " + testSumToArithProgression);
// console.log("\t calculated by arithmetical progression took " +
//     (t1SumToArithProgression - t0SumToArithProgression).toFixed(5) + " milliseconds.");
//
// // // ----------Fibonacci Numbers-------------
// console.log("Fibonacci number, calculated by recursive");
// var testFib0 = fibRecursion(0);
// var testFib1 = fibRecursion(1);
// var testFib2 = fibRecursion(2);
// var testFib3 = fibRecursion(3);
// var testFib4 = fibRecursion(4);
// var testFib5 = fibRecursion(5);
// var testFib6 = fibRecursion(6);
// console.log("Number 0 : " + testFib0);
// console.log("Number 1 : " + testFib1);
// console.log("Number 2 : " + testFib2);
// console.log("Number 3 : " + testFib3);
// console.log("Number 4 : " + testFib4);
// console.log("Number 5 : " + testFib5);
// console.log("Number 6 : " + testFib6);
// var t0FibRecursion = performance.now();
// var fib20Rec = fibRecursion(20);
// var t1FibRecursion = performance.now();
// console.log("Call to Fibonacci number 20 = " + fib20Rec + ", calculated by recursive took " +
//     (t1FibRecursion - t0FibRecursion).toFixed(5) + " milliseconds.");
//
// console.log("Fibonacci number, calculated by cycle");
// var testFibCycle0 = fibCycle(0);
// var testFibCycle1 = fibCycle(1);
// var testFibCycle2 = fibCycle(2);
// var testFibCycle3 = fibCycle(3);
// var testFibCycle4 = fibCycle(4);
// var testFibCycle5 = fibCycle(5);
// var testFibCycle6 = fibCycle(6);
// console.log("Number 0 : " + testFibCycle0);
// console.log("Number 1 : " + testFibCycle1);
// console.log("Number 2 : " + testFibCycle2);
// console.log("Number 3 : " + testFibCycle3);
// console.log("Number 4 : " + testFibCycle4);
// console.log("Number 5 : " + testFibCycle5);
// console.log("Number 6 : " + testFibCycle6);
// var t0FibCycle = performance.now();
// var fib20Cycle = fibCycle(20);
// var t1FibCycle = performance.now();
// console.log("Call to Fibonacci number 20 = " + fib20Cycle + ", calculated by cycle took " +
//     (t1FibCycle - t0FibCycle).toFixed(5) + " milliseconds.");


//-----------function --------------------------
function factorialRecursion(number) {
    var result;
    if (number < 0) {
        result = undefined;
    }
    else if (number > 1) {
        result = number * factorialRecursion(number - 1);
    }
    else {
        result = 1;
    }
    return result;
}

function factorialCycle(number) {
    var result = number;
    if (number < 0) {
        result = undefined;
    }
    else if (number === 0) {
        result = 1;
    }
    else if (number > 0) {
        for (var i = number - 1; i > 1; i--) {
            result = result * i;
        }
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

function extentCycle(number, deg) {
    var result = number;
    if (number === 0 && deg <= 0) {
        result = undefined;
    }
    else if (deg === 0) {
        result = 1;
    }
    else if (deg < 0) {
        deg = deg * (-1);
        for (i = 1; i < deg; i++) {
            result = result * number;
        }
        result = 1 / result;
    }
    else {
        for (i = 1; i < deg; i++) {
            result = result * number;
        }
    }
    return result;
}

function sumNumbersRecursion(number) {
    var res = 0;
    if (number > 0) {
        res = (number % 10) + sumNumbersRecursion((number / 10) ^ 0);
    }
    return res;
}

function sumNunbersCycle() {

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
    for (var i = n; n > 0; n--) {
        res = res + n;
    }
    return res;
}

function sumToArithProgression(n) {
    return (n + 1) / 2 * n;
}

function fibRecursion(n) {
    var res;
    if (n > 1) {
        res = fibRecursion(n - 1) + fibRecursion(n - 2);
    } else {
        res = n;
    }
    return res;
}

function fibCycle(n) {
    var num1 = 0;
    var num2 = 1;
    var num3;
    for (var i = 0; i < n; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num1;
}



