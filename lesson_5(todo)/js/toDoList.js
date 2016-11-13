var countDiv = 1;
var buttonMode = "Add";
var id;

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


function addInput() {
    var input = document.getElementById("input");
    if (input.value) {
        if (buttonMode === "Add") {
            var task =  document.getElementById("list");
            var createDiv = document.createElement("div");
            createDiv.innerText = input.value;
            createDiv.id = "idDiv" + countDiv;
            countDiv++;
            createDiv.classList.add("part2");
            createDiv.onclick = onclick;
            task.appendChild(createDiv);
            clearInput();
        }
        else if (buttonMode === "Edit") {
            var edit =  document.getElementById(id);
            edit.innerText = input.value;
            clearInput();
            buttonModToAdd();
        }
    } else {
        alert("Write task to input");
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

function remove() {
    var input = document.getElementById("input");
    if (input.value) {
        var rem = document.getElementById(id);
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
        var done = document.getElementById(id);
        done.classList.remove("part2");
        done.classList.add("done");
        done.id = "done" + id;
        buttonModToAdd();
        clearInput();
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
                task.classList.add("archiv");
                task.id = "";
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

