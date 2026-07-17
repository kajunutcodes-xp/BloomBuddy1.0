let coins = 0; 
let totalCompletedtasks = 0; 
let growthBoost = 0; 

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
                totalCompletedtasks++; 
                showCoinAnimation(); 
                rewarded = true; 
            } 
        } else { 
            text.style.textDecoration = "none"; 
            text.style.color = "black"; 
            
            if (rewarded === true) {
                coins = Math.max(0, coins - 1); // Prevents negative coins
                totalCompletedtasks = Math.max(0, totalCompletedtasks - 1);
                rewarded = false; // Allows them to earn it again
            }
        } 
        updateStats(); 
        updatePlant(); 
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
    let currentScore = totalCompletedtasks + growthBoost;

    if (currentScore < 10) { 
        plant.innerText = "🌱"; 
        plantName.innerText = "Seedling"; 
    } else if (currentScore < 20) { 
        plant.innerText = "🌿"; 
        plantName.innerText = "Sprout"; 
    } else if (currentScore < 30) { 
        plant.innerText = "🪴"; 
        plantName.innerText = "Young plant"; 
    } else if (currentScore < 40) { 
        plant.innerText = "🌼"; 
        plantName.innerText = "Flowering plant"; 
    } else { 
        plant.innerText = "🌳"; 
        plantName.innerText = "Healthy Tree"; 
    } 
} 

function openShop(){ 
    document.getElementById("shopWindow").style.display = "block"; 
} 

function closeShop(){ 
    document.getElementById("shopWindow").style.display = "none"; 
} 

function buyWater(){ 
    if (coins >= 5){ 
        coins -= 5; 
        growthBoost += 5; 
        updatePlant(); 
        updateStats(); 
        alert("You have successfully hydrated your plant!"); 
    } else { 
        alert("You cannot afford that yet, go work!"); 
    } 
} 

function buyFertilizer(){ 
    if (coins >= 10){ 
        coins -= 10; 
        growthBoost += 10; 
        updatePlant(); 
        updateStats(); 
        alert("Your plant has successfully been given nutrients!"); 
    } else { 
        alert("You cannot afford that yet, go work!"); 
    } 
} 

function showCoinAnimation(){ 
    let coin = document.createElement("div"); 
    coin.innerText = "🪙 +1"; 
    coin.className = "coin-effect"; 
    document.body.appendChild(coin); 
    setTimeout(function() { 
        coin.remove(); 
    }, 1800); 
} 


updatePlant();
