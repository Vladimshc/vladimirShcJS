var countTasks = 0;

function add() {
    var input = $('#input').val();
    if (input != "") {
        var storage = window.localStorage;
        if (!storage.indexCount) {
            storage.indexCount = 0;
        }
        storage.indexCount = parseInt(storage.indexCount, 10) + 1;
        storage.setItem(storage.indexCount, input);
        $('#input').val("");
        printTasks(true, true);
    }
}

function printTasks(active, completed) {
    $('#list').empty();
    countTasks = 0;
    var storage = window.localStorage;
    var indexCount = parseInt(storage.indexCount, 10);
    for (var i = 1; i <= indexCount; i++){
        if (storage[i] != null) {
            var data = storage.getItem(i);
            var id = "id='" + i + "'";  // wtf same id in 3 elements!!! but its work :))))

            if((data.substring(0, 4)==="done") && completed){
                var dataPrint = data.substring(5);
                $('#list').append("<div class='task done' "+ id +"><span class='check-box' " + id + "></span>" + dataPrint +
                    "<span class='close' " + id + ">x</span>" + "</div>");
            }
            if((data.substring(0, 4)!=="done") && active){
                countTasks++;
                $('#list').append("<div class='task' "+ id +"><span class='check-box' " + id + "></span>" + data +
                    "<span class='close' " + id + ">x</span>" + "</div>");
            }
        }
    }
    $('#count-tasks').text(countTasks);
}

function clealList() {
    $('#list').empty();
}

function clearLocalStorage() {
    var question = confirm("Are you sure that you want to delete all tasks");
    if (question) {
        window.localStorage.clear();
        location.reload();
    }
}

$(document).ready(function () {
    $(document).on("click", ".close", delTask);
    // $(document).on("click", ".task", select);  // ------- dont used
    $('#input').keyup(function (event) {
        if(event.keyCode == 13) add();
    });
    $(document).on("dblclick", ".task", edit);
    $(document).on("click", ".check-box", toggle);
    $(document).on("click", ".task", drag);


});

function delTask(event) {
    var delId =  event.target.id;
    window.localStorage.removeItem(delId);
    printTasks(true, true);
}



function edit(event) {
    var id =  event.target.id;
    var oldData = window.localStorage.getItem(id);
    $("#" + id).html("")
        .html("<input type=\"text\" class=\"edit-box\" value=\"" + oldData + "\" />")
        .unbind('dblclick', edit);

    $(("#" + id)).keyup(function (event) {
        if(event.keyCode == 13) {
            window.localStorage.setItem(id, $(".edit-box")[0].value);
            printTasks(true, true);
        }
        if(event.keyCode == 27) {
            printTasks(true, true);
        }
    });
}

function toggle(event) {
    var id =  event.target.id;
    var data = window.localStorage.getItem(id);
    if(data.substring(0, 4)!=="done") {
        var dataSet = "done " + data;
        window.localStorage.setItem(id, dataSet);
        countTasks--;
    } else {
        var dataSet = data.substring(5);
        window.localStorage.setItem(id, dataSet);
    }
    printTasks(true, true);
}

function clearCompleted() {
    $('#list').empty();
    var storage = window.localStorage;
    var indexCount = parseInt(storage.indexCount, 10);
    for (var i = 1; i <= indexCount; i++){
        if (storage[i] != null) {
            var data = storage.getItem(i);
            var id = "id='" + i + "'";

            if(data.substring(0, 4)==="done"){
                window.localStorage.removeItem(i);
            } else {
                //do nothing
            }
        }
    }
    printTasks(true, false);
}

printTasks(true, true);

//-------------- dont used ------//
// function select(event) {
//     event.target.classList.add("select");
// }


var drag = $(function() {

    $('.task').draggable({
        axis: "y",
        containment: "parent",
        grid: [800,52],
        delay: 300,
        distance: 52,
    });

});
