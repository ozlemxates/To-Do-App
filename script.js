function newTask() {
    let taskInput = document.getElementById("box");
    let taskList = document.getElementById("list");
    let task = taskInput.value;

    let newListItem = document.createElement("li");
    newListItem.innerHTML = task;

    newListItem.addEventListener("click",function() {
        this.classList.toggle("checked");
    });

    if (task.trim() === "") {
        let barElement = document.getElementById("bar");
        barElement.classList.add("border-red");
        return;
    } else {
        let barElement = document.getElementById("bar");
        barElement.classList.remove("border-red");
    }
    
    
    taskList.appendChild(newListItem);
    taskInput.value = ""; 
}
