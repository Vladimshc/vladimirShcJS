// var arr = [2,1,5,0,3,4,7,2,3,1,0]; //test = 10 ok
// var arr = [1,4,0,1,2,3,1,0]; //test = 6 ok
// var arr = [0,1,5,3,1,2,2,3,3,4,5,2,1,3]; // =20
// var arr = [0,1,5,3,1,2,4,3,4,2,5,2,1,3]; // =19

function doIt() {
    var arr = input();
    var arrayWatter = [];
    for (var i = 0; i < arr.length; i++) {
        arrayWatter[i] = 0;
    }
    var watter = 0;
    //---------------------------get watter alhorithm---------------------------//
    (function getWatter() {
        var leftMax = 0;
        var rightMax = 0;
        var leftIndex = 0;
        var rightIndex = arr.length - 1;

        while (leftIndex < rightIndex) {
            if (arr[leftIndex] > leftMax) {
                leftMax = arr[leftIndex];
            }
            if (arr[rightIndex] > rightMax) {
                rightMax = arr[rightIndex];
            }
            if (leftMax >= rightMax) {
                watter += rightMax - arr[rightIndex];
                arrayWatter[rightIndex] = rightMax - arr[rightIndex];
                rightIndex--;
            } else {
                watter += leftMax - arr[leftIndex];
                arrayWatter[leftIndex] = leftMax - arr[leftIndex];
                leftIndex++;
            }
        }
        return watter;
    })();

    print(arr, arrayWatter, watter);
}

function input() {
    var input = document.getElementById("input");
    var res = input.value.toString().split(",");
    input.value = "";
    return res;
}

function print(arr, arrWatter, watter) {
    var string1 = document.getElementById("arrWatter");
    var string2 = document.getElementById("amountWatter");
    string1.innerText = "In array = " + arr;
    string2.innerText = "Amount of watter = " + watter;

    var x1 = 0;
    var y1 = 0;
    var table = document.getElementById("table");
    for (var h = 0; h < arr.length; h++) {
        var createDivX = document.createElement("div");
        createDivX.classList.add("class-x");
        createDivX.id = "x" + x1;
        x1 = x1 + 1;
        table.appendChild(createDivX);
        while (arr[h] > 0) {
            var createDivY = document.createElement("div");
            createDivY.classList.add("brown");
            createDivY.innerText = "X";
            createDivY.id = "y" + y1;
            y1 = y1 + 1;
            createDivX.appendChild(createDivY);
            arr[h] = arr[h] - 1;
        }
    }
    for (var k = 0; k < arrWatter.length; k++) {
        var findDivX = document.getElementById("x" + k);
        while (arrWatter[k] > 0) {
            var createWatterDivY = document.createElement("div");
            createWatterDivY.classList.add("blue");
            createWatterDivY.innerText = "W";
            createWatterDivY.id = "y" + y1;
            y1 = y1 + 1;
            findDivX.appendChild(createWatterDivY);
            arrWatter[k] = arrWatter[k] - 1;
        }
    }
}

