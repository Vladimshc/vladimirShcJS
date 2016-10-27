// ---------Faktorial-----------
var testFaktorial_2 = factorial(-2);
var testFaktorial_1 = factorial(-1);
var testFaktorial0 = factorial(0);
var testFaktorial1 = factorial(1);
var testFaktorial2 = factorial(2);
var testFaktorial3 = factorial(3);
var testFaktorial4 = factorial(4);
var testFaktorial5 = factorial(5);
var testFaktorial6 = factorial(6);
console.log(testFaktorial_2);
console.log(testFaktorial_1);
console.log(testFaktorial0);
console.log(testFaktorial1);
console.log(testFaktorial2);
console.log(testFaktorial3);
console.log(testFaktorial4);
console.log(testFaktorial5);
console.log(testFaktorial6);

//----------Degree-------------
var testDegree_0 = extent(0, -8);
var testDegree_8 = extent(2, -8);
var testDegree0 = extent(2, 0);
var testDegree8 = extent(2, 8);
console.log(testDegree_0);
console.log(testDegree_8);
console.log(testDegree0);
console.log(testDegree8);


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



