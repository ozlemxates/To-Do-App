function newTask() {
    let taskInput = document.getElementById("box");
    let taskList = document.getElementById("list");
    let task = taskInput.value;


    let newListItem = document.createElement("li");
    newListItem.innerHTML = task;

    taskList.appendChild(newListItem);

}