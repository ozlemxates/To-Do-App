function newTask() {
    let taskInput = document.getElementById("box");
    let taskList = document.getElementById("list");
    let listButton = document.getElementById("listButton")
    let task = taskInput.value;

    let newListItem = document.createElement("li");
    newListItem.innerHTML = task;

    let newButton = document.createElement("button");
    newButton.innerHTML = "delete"

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

    newButton.addEventListener("click", function() {
        let index = Array.from(listButton.children).indexOf(this);
        let listItem = taskList.children[index];
        listItem.remove();
        this.remove();
    });
    
    taskList.appendChild(newListItem);
    listButton.appendChild(newButton)
    taskInput.value = ""; 
}
