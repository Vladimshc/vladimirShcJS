// var arr = [2,1,5,0,3,4,7,2,3,1,0]; //test = 10 ok
// var arr = [1,4,0,1,2,3,1,0]; //test = 6 ok
var arr = [0,1,5,3,1,2,4,3,4,2,5,2,1,3]; // =19 false
function watter(arr) {
    var arrSort = arr.slice();
    var arr2 = arr.slice();
    arrSort.sort();

    var min = arrSort[0];
    var max = arrSort[arrSort.length-1];

    var result = 0;
        for (var i = 0; i < arr.length; i++) {
            var q1 = (arr2[i] > arr2[i + 1]);
            if (q1) {
                var s = 0;
                var w = i;
                while (arr2[w + 1] < arr2[w + 2]){
                    s++;
                    w++;
                }
                var m = arr2[i];
                var n = arr2[i+s+1];


                if (arr2[i] > arr2[i+s+1]){
                    for (var r = i + 1; r <= i + s; r++) {
                        arr2[r] = arr2[i+s+1];
                    }
                } else {
                    for (var t = i + 1; t <= i + s; t++) {
                        arr2[t] = arr2[i];
                    }
                }
            }
        }
    for (var j = 0; j < arr.length; j++){
        result = result + arr2[j] - arr[j];
    }
console.log(result);
return result;
}

watter(arr);