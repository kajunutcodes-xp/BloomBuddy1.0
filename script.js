let coins = 0;
let totalCompletedtasks = 0;

function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please plant a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let newTask = document.createElement("li");
    newTask.className = "task-item";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let text = document.createElement("span");
    let rewarded = false;
    text.innerText = taskText;

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {

            text.style.textDecoration = "line-through";
            text.style.color = "gray";
            
            if (rewarded === false) {
                coins++;
                totalCompletedtasks++
                rewarded = true;
            }
            updateStats();
            updatePlant();

        }

        else {

            text.style.textDecoration = "none";
            text.style.color = "black";

        }

        updateStats();

    });

    newTask.appendChild(checkbox);
    newTask.appendChild(text);

    taskList.appendChild(newTask);

    input.value = "";

    updateStats();
    
}

function updateStats(){
    document.getElementById("completedCount").innerText = totalCompletedtasks;
     document.getElementById("coins").innerText = coins;

}

function updatePlant(){
    let plant = document.getElementById("plant");
    let plantName = document.getElementById("plantName");

    if(totalCompletedtasks < 10) {
        plant.innerText = "🌱";
        plantName.innerText = "Seedling"
    }

    else if (totalCompletedtasks < 20) {
        plant.innerText = "🌿";
        plantName.innerText = "Sprout";
    }

    else if (totalCompletedtasks < 30) {
        plant.innerText = "🪴";
        plantName.innerText = " Young plant";
    }

    else if (totalCompletedtasks < 40) {
        plant.innerText ="🌼";
        plantName.innerText ="Flowering plant"

    }
     else if (totalCompletedtasks < 50) {
        plant.innerText = "🌳" ;
        plantName.innerText = "Healthy Tree"
     }
    
}
 updatePlant();