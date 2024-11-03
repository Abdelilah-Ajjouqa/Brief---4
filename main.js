const btnAjouter = document.getElementById("taskAdd");
const btnBack = document.getElementById("back");
const btnDelete = document.querySelectorAll("#taskDelete");
const ajtForm = document.getElementById("ajtForm");

const newTitle = document.getElementById("title");
const newDescription = document.getElementById("description");
const newStatus = document.getElementById("status");
const newTypes = document.getElementById("type");
const newDate = document.getElementById("date");
// old values
const oldTitle = document.getElementById("titleEdit");
const oldDescription = document.getElementById("descriptionEdit");
const oldStatus = document.getElementById("statusEdit");
const oldTypes = document.getElementById("typeEdit");
const oldDate = document.getElementById("dateEdit");

const todoSection = document.getElementById("todoSection");
const doingSection = document.getElementById("doingSection");
const doneSection = document.getElementById("doneSection");

const btnEdit = document.getElementById("taskEdit");

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
  displayCounter();
});

// display counter
function displayCounter() {
    let todoCount = 0;
    let doingCount = 0;
    let doneCount = 0;

    // Loop through tasks and count based on status
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].Status === "todo") {
            todoCount++;
        } else if (tasks[i].Status === "inprogress") {
            doingCount++;
        } else if (tasks[i].Status === "done") {
            doneCount++;
        }
    }

    // Update the DOM with the counts
    document.getElementById("todoCount").innerText = `${todoCount}`;
    document.getElementById("doingCount").innerText = `${doingCount}`;
    document.getElementById("doneCount").innerText = `${doneCount}`;
}

//affichage des infos
function displayTask(task) {
  let targetSection;
  let background;

  if (task.Type === "p-1") {
    background = "bg-green-500";
  } else if (task.Type === "p-2") {
    background = "bg-orange-500";
  } else if (task.Type === "p-3") {
    background = "bg-red-500";
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
        <div class="flex justify-between items-center mb-4">
            <li class="text-3xl font-semibold text-white">${task.Title}</li>
            <span class="text-sm font-light text-gray-200">${task.Date}</span>
        </div>
        <p class="text-gray-100 mb-4 text-lg leading-relaxed">${task.Description}</p>  
        <div class="flex justify-between mt-4">
            <button type="button" onclick="taskEdit(${task.id})" class="flex items-center space-x-2 bg-white bg-opacity-20 text-white hover:bg-opacity-30 px-4 py-2 rounded-lg transition duration-200">
                <i class="fa-solid fa-pen-to-square"></i><span>Edit</span>
            </button>
            <button class="taskDelete flex items-center space-x-2 bg-white bg-opacity-20 text-white hover:bg-opacity-30 px-4 py-2 rounded-lg transition duration-200">
                <i class="fa-solid fa-trash"></i><span>Delete</span>
            </button>
        </div>
    `;

  targetSection.appendChild(taskCard);

  // add button delete
  taskCard.querySelector(".taskDelete").addEventListener("click", () => {
        targetSection.removeChild(taskCard);
        tasks = tasks.filter((t)=> t.id !== task.id)
        displayCounter();
  });

}

// add button edit
function taskEdit(id) {
  let editedTask = tasks.find((task) => task.id === id);

  document.getElementById("taskEdit").classList.remove("hidden");
  oldTitle.value = editedTask.Title;
  oldDescription.value = editedTask.Description;
  oldStatus.value = editedTask.Status;
  oldTypes.value = editedTask.Type;
  oldDate.value = editedTask.Date;

  const editForm = document.getElementById("editForm");
  editForm.onsubmit = (e) => {
    e.preventDefault();

    editedTask.Title = oldTitle.value;
    editedTask.Description = oldDescription.value;
    editedTask.Status = oldStatus.value;
    editedTask.Type = oldTypes.value;
    editedTask.Date = oldDate.value;

    document.getElementById("taskEdit").classList.add("hidden");

    refreshDisplay();
  };
}

function refreshDisplay() {
  todoSection.innerHTML = "";
  doingSection.innerHTML = "";
  doneSection.innerHTML = "";

  tasks.forEach((task) => displayTask(task));
  displayCounter();
}

displayCounter();
