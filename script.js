const saveList = () => {
    const container = document.getElementById("list-container");
    const name = document.getElementById("name-input").value;
    const age = document.getElementById("age-input").value;
    const li = document.createElement("li");
    li.innerText = `${name} : ${age}`;
    container.appendChild(li);
    document.getElementById("name-input").value = ""
    document.getElementById("age-input").value = "";
};