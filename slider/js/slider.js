/**
 * Created by Wallee on 20.12.2016.
 */

var amount = 5; //init amount images
var timer = 2000; //time to muve slides

var timeoutIdLeft;
var timeoutIdRight;

$(document).ready(function () {
    init();
    leftMove(); // default move
    }
);


function init() {
    for (var i = 0; i < amount; i++ ){
        $(".slides-container").append('<div class="slide">'+
            '<img src="img/' + i + '.jpg">'+
            '</div>');

        $(".dot-container").append('<div class="dot"></div>');

    }

    document.getElementsByClassName("slide")[0].style.display = "block";
    document.getElementsByClassName("slide")[1].style.display = "block";
    document.getElementsByClassName("slide")[2].style.display = "block";

    document.getElementsByClassName("dot")[1].className = 'dot dot-activ';
}


function right() {
    if (timeoutIdLeft || !timeoutIdRight){
        window.clearTimeout(timeoutIdLeft);
        timeoutIdLeft = null;
        setTimeout(rightMove, timer);
    } else {
        //do nothing
    }
}

function rightMove() {
    var leftPosition = 0;
    $(".slides-container").animate(
        {
            "left": leftPosition + "px"
        },
        {
            duration: timer,
            complete: nextSlide
        });

    function nextSlide() {
        $(".slides-container").css({"left": "-400px"});
        document.getElementsByClassName("slide")[2].style.display = "none";
        $(".slides-container").prepend($(".slide")[ $(".slide").length - 1]);
        document.getElementsByClassName("slide")[0].style.display = "block";

        moveRightDot();
    }

    function moveRightDot() {
        $('.dot-activ').removeClass('dot-activ').prev('.dot').addClass('dot-activ');
        var isDotActiv = document.getElementsByClassName("dot-activ").length;
        if (isDotActiv === 0){
            console.log('isDotActiv');
            var number = document.getElementsByClassName("dot").length - 1;
            document.getElementsByClassName("dot")[number].className = 'dot dot-activ';
        } else {
            //do nothing
        }
    }

    timeoutIdRight = setTimeout(rightMove, timer);
}

function left() {
    if (timeoutIdRight || !timeoutIdLeft) {
        window.clearTimeout(timeoutIdRight);
        timeoutIdRight = null;
        setTimeout(leftMove, timer);
    } else {
        //do nothing
    }
}

function leftMove() {
    var leftPosition = -800;

    $(".slides-container").animate(
        {
            "left": leftPosition + "px"
        },
        {
            duration: timer,
            complete: nextSlide
        });

    function nextSlide() {
        $(".slides-container").css({"left": "-400px"});
        document.getElementsByClassName("slide")[0].style.display = "none";
        $(".slides-container").append($(".slide")[0]);
        document.getElementsByClassName("slide")[2].style.display = "block";
        moveLeftDot();
    }

    function moveLeftDot() {
        $('.dot-activ').removeClass('dot-activ').next().addClass('dot-activ');
        var isDotActiv = document.getElementsByClassName("dot-activ").length;
        if (isDotActiv === 0) {
            document.getElementsByClassName("dot")[0].className = 'dot dot-activ';
        } else {
            //do nothing
        }
    }
    timeoutIdLeft = setTimeout(leftMove, timer);
}

//------test code--------------//