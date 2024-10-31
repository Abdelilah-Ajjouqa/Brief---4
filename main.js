const btnAjouter = document.getElementById("taskAdd");
const btnBack = document.getElementById("taskRemove");

btnAjouter.addEventListener("click", () => {
    document.getElementById("task").classList.remove("hidden");
})

btnBack.addEventListener("click", () => {
    document.getElementById("task").classList.add("hidden");
})