const btnAjouter = document.getElementById("taskAdd");
const btnBack = document.getElementById("taskRemove");

btnAjouter.addEventListener("click", () => {
    document.getElementById("task").classList.remove("hidden");
    // document.querySelectorAll("#principal").classList.add("backdrop-blur-sm");
})

btnBack.addEventListener("click", () => {
    document.getElementById("task").classList.add("hidden");
})