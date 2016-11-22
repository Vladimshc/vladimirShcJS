var countDiv = 0;
var buttonMode = "Add";
var id;
var arrTask = [];
var arrDone = [];
var arrArchiv = [];

function buttonModToAdd() {
    buttonMode = "Add";
    document.getElementById("addButton").innerText = buttonMode;
}

function buttonModToEdit() {
    buttonMode = "Edit";
    document.getElementById("addButton").innerText = buttonMode;
}

function clearInput() {
    var input = document.getElementById("input");
    input.value = ""
}

function clearList () {
    var list = document.getElementById("list");
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function onclick(mouseEv) {
    id = mouseEv.toElement.id;
    if (id) {
        var data = mouseEv.toElement.innerText;
        var input = document.getElementById("input");
        input.value = data;
        buttonModToEdit();
    }
}


function addInput() {
    var input = document.getElementById("input");
    if (input.value) {
        if (buttonMode === "Add") {
            arrTask[countDiv]= input.value;
            countDiv++;
            taskList();
        }
        else if (buttonMode === "Edit") {
            var idNumberEdit;
            if(id.substring(0, 5) === "idDiv") {
                idNumberEdit = id.substring(5);
                arrTask[idNumberEdit]= input.value;
            }
            if(id.substring(0, 9) == "doneidDiv") {
                idNumberEdit = id.substring(9);
                arrDone[idNumberEdit]= input.value;
            }
            taskList();
        }
    } else {
        alert("Write task to input");
    }
}

function remove() {
    var input = document.getElementById("input");
    if (input.value) {
        var rem = document.getElementById(id);
        var idNumberRem;
        if(id.substring(0, 5) === "idDiv") {
            idNumberRem = id.substring(5);
            arrTask[idNumberRem]= null;
        }
        if(id.substring(0, 9) == "doneidDiv") {
            idNumberRem = id.substring(9);
            arrDone[idNumberRem]= null;
        }
        rem.remove();
        clearInput();
        buttonModToAdd();
    } else {
        alert("Choose task");
    }
}

function done() {
    var input = document.getElementById("input");
    if (input.value) {
        var idNumber = id.substring(5);
        arrDone[idNumber]= arrTask[idNumber];
        arrTask[idNumber]= null;
        taskList();
    } else {
        alert("Choose task");
    }
}

function archive() {
    var input = document.getElementById("input");
    if (input.value) {
        var task = document.getElementById(id);
        var done = id.substring(0, 4);
        var isDone = done === "done";
        if (input.value) {
            if (isDone) {
                var idNumber = id.substring(9);
                arrDone[idNumber]= null;
                arrArchiv.push(task.innerText);
                task.remove();
                buttonModToAdd();
                clearInput();
            } else {
                alert("First do a task or choose done task");
                buttonModToAdd();
                clearInput();
            }
        }
    } else {
        alert("Choose task");
    }
}


function archiveList () {
    clearList();
    for (var t = 0; t < arrArchiv.length; t++){
        var elementById = document.getElementById("list");
        var createDiv = document.createElement("div");
        createDiv.innerText = arrArchiv[t];
        createDiv.classList.add("archivVisible");
        elementById.appendChild(createDiv);
    }
}

function taskList() {
    clearList();
    clearInput();
    buttonModToAdd();
    var list = document.getElementById("list");

    for (var i = 0; i < arrDone.length; i++) {
        if (arrDone[i] != null) {
            var createDiv = document.createElement("div");
            createDiv.innerText = arrDone[i];
            createDiv.classList.add("done");
            createDiv.onclick = onclick;
            createDiv.id = "doneidDiv" + i;
            list.appendChild(createDiv);
        }
    }
    for (var j = 0; j < arrTask.length; j++) {
        if (arrTask[j] != null) {
            var createDiv = document.createElement("div");
            createDiv.innerText = arrTask[j];
            createDiv.classList.add("part2");
            createDiv.onclick = onclick;
            createDiv.id = "idDiv" + j;
            list.appendChild(createDiv);
        }
    }
}

function up() {
    if(id) {
        if(id.substring(0, 5) === "idDiv") {
            var idNumberUp = Number(id.substring(5));
            if (idNumberUp > 0){
                var indexUp = idNumberUp - 1;
                while (!arrTask[indexUp]){
                    indexUp = indexUp - 1;
                }
                var buffer = arrTask[indexUp];
                arrTask[indexUp] = arrTask[idNumberUp];
                arrTask[idNumberUp] = buffer;
                taskList();
                id = null;
            }
        }
    } else alert("Choose task");
}


function down() {
    if(id) {
        if(id.substring(0, 5) === "idDiv") {
            var  idNumberDown = Number(id.substring(5));
            if (idNumberDown < arrTask.length - 1){
                var indexDown = idNumberDown + 1;
                while (!arrTask[indexDown]){
                    indexDown = indexDown + 1;
                }
                var buffer = arrTask[indexDown];
                arrTask[indexDown] = arrTask[idNumberDown];
                arrTask[idNumberDown] = buffer;
                taskList();
                id = null;
            }
        }
    } else alert("Choose task");
}


