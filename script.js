const taskArray = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : [];

function displayStorage() {
    let taskList = document.getElementById("list");
    taskList.innerHTML = "";

    taskArray.forEach(element => {
        let newListItem = document.createElement("li");
        newListItem.innerHTML = element;
        newListItem.addEventListener("click",function() {
            this.classList.toggle("checked");
        });
        let listButton = document.getElementById("listButton")
        let newButton = document.createElement("button");
        newButton.innerHTML = "delete"

        newButton.addEventListener("click", function() {
            let index = Array.from(listButton.children).indexOf(this);
            let listItem = taskList.children[index];
            listItem.remove();
            this.remove();
            taskArray.splice(index, 1);
            localStorage.setItem("task", JSON.stringify(taskArray));
        });

        taskList.appendChild(newListItem);
        listButton.appendChild(newButton); 
    });
}

function newTask() {
    let taskInput = document.getElementById("box");
    let task = taskInput.value;

    if (task.trim() === "") {
        let barElement = document.getElementById("bar");
        barElement.classList.add("border-red");
        barElement.classList.toggle("shake");
        return;
    } else {
        let barElement = document.getElementById("bar");
        barElement.classList.remove("border-red");
    } 
    
    taskArray.push(task)
    localStorage.setItem("task", JSON.stringify(taskArray))
    displayStorage();
    location.reload()
    taskInput.value = ""; 
}
displayStorage();