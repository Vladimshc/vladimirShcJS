var useCheat = false;
$(".win").hide();

$(document).ready(function () {
    $(document).on("click", ".cell", move);
    $(document).on("click", ".cheat span", cheat);
    // $(document).on("click", ".cheat-on", cheat);
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
            $(".wrapper-content").append('<div class="cell" id="' + uuid + '">' + a + '</div>');
            i++;
            uuid++;
        }
    }
    $(".wrapper-content").append('<div class="cell none-number" id="16"></div>');
}

function move(event) {
    var a = $.text(event.target);
    var uuid = parseInt(event.target.id, 10);
    var resolution = parseInt($(".none-number")[0].id, 10);

    function moveCell() {
        $(".none-number").text(a).removeClass("none-number");
        $("#" + uuid).text("").addClass("none-number");
    }

    if (useCheat) {
        moveCell();
    } else {
        if   ( (uuid - 4) === resolution
            || (uuid - 1) === resolution
            || (uuid + 1) === resolution
            || (uuid + 4) === resolution) {
            moveCell();
        }
    }
    sequence();
}

function sequence() {
    var arrSeq = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15";
    var arrTest = [];
    for (var i = 1; i < 16; i++){
        arrTest.push($("#" + i).text())
    }
    if (arrSeq === arrTest.toString()){
        $(".win").show();
    }
}
//---------------- cheat mode :))) -------------------//
function cheat(event) {
    var className = event.target.className;
    if (className === "cheat-off"){
        $(".cheat-off").removeClass("cheat-off").addClass("cheat-on");
        $(".wrapper-content").css("background-color", "#ffc4ba");
        $(".cheat").css("background-color", "#ff2800");
        $(".cheat").css("color", "#ffffff");
        useCheat = true;
    } else {
        $(".cheat-on").removeClass("cheat-on").addClass("cheat-off");
        $(".wrapper-content").css("background-color", "rgba(0,0,0,.1)");
        $(".cheat").css("background-color", "#FDFEFE");
        $(".cheat").css("color", "#000000");
        useCheat = false;
    }
}