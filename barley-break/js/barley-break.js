var useCheat = false;
var scoreCount = 0;

$(document).ready(function () {
    $(document).on("click", ".cell", move);
    $(document).on("click", ".cheat span", cheat);
    render();
});

function render() {
    var arr = [];
    var i = 0;
    var uuid = 1;
    while ( i < 15) {
        var a = Math.random()*15 + 1 | 0;
        if ($.inArray(a, arr) === -1) {
            arr.push(a);
            $(".content").append('<div class="cell" id="' + uuid + '">' + a + '</div>');
            i++;
            uuid++;
        }
    }
    $(".content").append('<div class="cell none-number" id="16"></div>');
}

function move(event) {
    var a = $.text(event.target);
    var uuid = parseInt(event.target.id, 10);
    var resolution = parseInt($(".none-number")[0].id, 10);

    function moveCell() {
        $(".none-number").text(a).removeClass("none-number");
        $("#" + uuid).text("").addClass("none-number");

    }

    function score() {
        scoreCount++;
        $("#score-id").text(scoreCount);
    }

    if (useCheat) {
        moveCell();
        score();
    } else {
        if   ( (uuid - 4) === resolution
            || (uuid - 1) === resolution
            || ((uuid + 1) === resolution && uuid != 4 && uuid != 8 && uuid != 12)
            || (uuid + 4) === resolution) {
            moveCell();
            score();
        }
    }git
    sequence();
}

function sequence() {
    var arrSeq = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15";
    var arrTest = [];
    for (var i = 1; i < 16; i++){
        arrTest.push($("#" + i).text())
    }
    if (arrSeq === arrTest.toString()){
        $(".win").css("height", "192px");
        $(document).off("click", ".cell", move);
    }
}

function newGame(){
    scoreCount = 0;
    $("#score-id").text(scoreCount);
    $(".content").empty();
    $(".win").css("height", "0px");
    $(document).on("click", ".cell", move);
    render();
}

//---------------- cheat mode :))) -------------------//
function cheat(event) {
    var className = event.target.className;
    if (className === "cheat-off"){
        $(".cheat-off").removeClass("cheat-off").addClass("cheat-on");
        $(".content").css("background-color", "#ffc4ba");
        $(".cheat").css("background-color", "#ff2800");
        $(".cheat").css("color", "#ffffff");
        useCheat = true;
    } else {
        $(".cheat-on").removeClass("cheat-on").addClass("cheat-off");
        $(".content").css("background-color", "rgba(0,0,0,.1)");
        $(".cheat").css("background-color", "#FDFEFE");
        $(".cheat").css("color", "#000000");
        useCheat = false;
    }
}