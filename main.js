const btnAjouter = document.getElementById("taskAdd");
const btnBack = document.getElementById("taskRemove");
const btnDelete = document.querySelectorAll("#taskDelete");
const ajtForm = document.getElementById("ajtForm");

const newTitle = document.getElementById("title");
const newDescription = document.getElementById("description");
const newStatus = document.getElementById("status");
const newTypes = document.getElementById("type");
const newDate = document.getElementById("date");

const todoSection = document.getElementById("todoSection");
const doingSection = document.getElementById("doingSection");
const doneSection = document.getElementById("doneSection");

let tasks = [];

// open l'affichage d'ajouter et l'affichage back
btnAjouter.addEventListener("click", () => {
  document.getElementById("newTask").classList.remove("hidden");
});

btnBack.addEventListener("click", () => {
  document.getElementById("newTask").classList.add("hidden");
});

function resetForm() {
  newTitle.value = "";
  newDescription.value = "";
  newStatus.value = "todo";
  newTypes.value = "p-1";
  newDate.value = "";
}

// times to add a place where the infos goes
ajtForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !newTitle.value ||
    !newDescription.value ||
    !newStatus.value ||
    !newTypes.value ||
    !newDate.value
  ) {
    alert("please fill all the fields");
    return;
  }
  let info = {
    id: Date.now(),
    Title: newTitle.value,
    Description: newDescription.value,
    Status: newStatus.value,
    Type: newTypes.value,
    Date: newDate.value,
  };

  console.log(info);

  tasks.push(info);
  displayTask(info);
  resetForm();

  document.getElementById("newTask").classList.add("hidden");
});

function displayTask(task) {

    let targetSection;
    let background;

    if (task.Type === "p-1") {
        background = "bg-green-500"
    } else if (task.Type === "p-2") {
        background = "bg-orange-500"
    } else if (task.Type === "p-3") {
        background = "bg-red-500"
    }

    if (task.Status === "todo") {
        targetSection = document.getElementById("todoSection");
    } else if (task.Status === "inprogress") {
        targetSection = document.getElementById("doingSection");
    } else if (task.Status === "done") {
        targetSection = document.getElementById("doneSection");
    }

    const taskCard = document.createElement("div");
    taskCard.className = ` my-3 text-lg mx-auto w-11/12 ${task.Type} rounded-md ${background}`;
    taskCard.innerHTML = `
        <li class="ml-2 text-start text-2xl">${task.Title}</li>
        <p>${task.Description}</p>  
        <p>${task.Date}</p>
        <div class="flex justify-evenly">
            <button><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="taskDelete"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;

    targetSection.appendChild(taskCard);

    taskCard.querySelector(".taskDelete").addEventListener("click", () => {
        targetSection.removeChild(taskCard);
        tasks = tasks.filter(t => t !== task);
    });
}
