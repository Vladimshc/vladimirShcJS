var countTasks = 0;
var windowData = [];

var taskList = {
    stor: function (name, data) {
        if (arguments.length > 1) {
            return window.localStorage.setItem(name, JSON.stringify(data));
        } else {
            var stor = window.localStorage.getItem(name);
            return (JSON.parse(stor)) || [];
        }
    }
};

function add() {
    var input = $('#input').val();
    if (input != "") {
        var data = {};
        data.value = input;
        data.completed = false;
        windowData.push(data);
        taskList.stor("tasksJson", windowData);

        $('#input').val("");
        printTasks(true, true);
    }
}

function printTasks(active, complet) {
    $('#list').empty();

    windowData = taskList.stor("tasksJson");
    countTasks = 0;
    for (var i = 0; i < windowData.length; i++){
        if (windowData[i].value != null) {
            var id = "id='" + i + "'";  // wtf same id in 3 elements!!! but its work :))))
            if((windowData[i].completed) && complet){
                $('#list').append("<div class='task done' "+ id +"><span class='check-box' " + id + "></span>" + windowData[i].value +
                    "<span class='close' " + id + ">x</span>" + "</div>");
            }
            if((!windowData[i].completed) && active){
                countTasks++;
                $('#list').append("<div class='task' "+ id +"><span class='check-box' " + id + "></span>" + windowData[i].value +
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
    // $(document).on("click", ".task", drag);
});

function delTask(event) {
    var delId =  parseInt(event.target.id, 10);
    windowData.splice(delId, 1);
    taskList.stor("tasksJson", windowData);
    printTasks(true, true);
}


function edit(event) {
    var id =  event.target.id;
    $("#" + id).html("")
        .html("<input type=\"text\" class=\"edit-box\" value=\"" + windowData[id].value + "\" />")
        .unbind('dblclick', edit);

    $(("#" + id)).keyup(function (event) {
        if(event.keyCode == 13) {
            windowData[id].value = $(".edit-box")[0].value;
            taskList.stor("tasksJson", windowData);
            printTasks(true, true);
        }
        if(event.keyCode == 27) {
            printTasks(true, true);
        }
    });
}

function toggle(event) {
    var id =  event.target.id;
    if(!windowData[id].completed) {
        windowData[id].completed = true;
        countTasks--;
    } else {
        windowData[id].completed = false;
        countTasks++;
    }
    taskList.stor("tasksJson", windowData);
    printTasks(true, true);
}

function clearCompleted() {
    $('#list').empty();
    var i = 0;
    while ( i < windowData.length){
        if (windowData[i].completed) {
            windowData.splice(i, 1);
        } else {
            i++;
        }
    }
    taskList.stor("tasksJson", windowData);
    printTasks(true, true);
}

printTasks(true, true);

//-------------- dont used ------//
// function select(event) {
//     event.target.classList.add("select");
// }


// var drag = $(function() {
//
//     $('.task').draggable({
//         axis: "y",
//         containment: "parent",
//         grid: [800,52],
//         delay: 300,
//         distance: 52,
//     });
//
// });
