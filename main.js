const btnAjouter = document.getElementById("taskAdd");
const btnBack = document.getElementById("taskRemove");
const btnDelete = document.querySelectorAll("#taskDelete");
const btnSave = document.getElementById("savebtn");


const newTitle = document.getElementById("title");
const newDescription = document.getElementById("description");
const newStatus = document.getElementById("status");
const newTypes = document.getElementById("type");
const newDate = document.getElementById("date");

let tasks = [];

// open l'affichage d'ajouter et l'affichage back
btnAjouter.addEventListener("click", () => {
    document.getElementById("newTask").classList.remove("hidden");
})

btnBack.addEventListener("click", () => {
    document.getElementById("newTask").classList.add("hidden");
})


// tmie to add a place where the infos goes 
btnSave.addEventListener("click", () => {
    let info = {
        Title : newTitle.value,
        Description : newDescription.value,
        Status : newStatus.value,
        Type : newTypes.value,
        Date : newDate.value,
    };
    tasks.push(info)
    console.log(info);
    console.log(tasks);
})