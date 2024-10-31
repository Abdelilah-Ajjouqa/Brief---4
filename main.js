const btnAjouter = document.getElementsByClassName("btnAdd");

btnAjouter.addEventListener("click", ()=>{
    document.getElementById("task-add").classList.remove("hidden");
});