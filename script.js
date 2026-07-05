function addTask (){
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if(taskText === "") {
        alert("please plant a task!");
        return;
    
}
let taskList = document.getElementById("taskList");

let newTask = document.createElement("li");
newTask.className= "task-item";

let checkbox = document.createElement("input");
checkbox.type = "checkbox";

let text = document.createElement("span");
text.innerText = taskText;

checkbox.addEventListener("change",function() {
    if (checkbox.checked){
        text.style.textDecoration = "line-through";
        text.style.color="gray";
    } else {
        text.style.textDecoration="none";
        text.style.color ="black";
    }
});

newTask.appendChild(checkbox);
newTask.appendChild(text);

taskList.appendChild(newTask);

input.value = "";

}
