
let addButton = document.getElementById("add");
let list = document.querySelector("ol");
list.style.listStyle="decimal"
let toDoList = document.querySelector(".to-do-list");
let input = document.querySelector("input");
let saveButton = document.getElementById("save");

addButton.addEventListener("click", () => {
    input.style.display = "block";
    saveButton.style.display = "inline-block";
});

saveButton.addEventListener("click", () => {
    let value = input.value.trim();
    if (value !== "") {
        toDoList.style.display = "block";

        let listItem = document.createElement("li");
        listItem.classList.add("item");

        let textDiv = document.createElement("div");
        textDiv.classList.add("text");
        textDiv.textContent = value;
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.textContent = "✕";
        deleteButton.addEventListener("click", () => {
            list.removeChild(listItem);
            if (!list.hasChildNodes()) {
                toDoList.style.display = "none";
            }
        });
        listItem.appendChild(textDiv);
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
        input.value = "";
        input.style.display = "none";
    let sortButton=document.querySelector(".sort")
    sortButton.addEventListener("click",()=>{
        let items = Array.from(list.getElementsByTagName("li"));
            items.sort((a, b) => a.textContent.localeCompare(b.textContent));
            list.innerHTML = "";
            items.forEach(item => list.appendChild(item));

    })
            
    }
});
