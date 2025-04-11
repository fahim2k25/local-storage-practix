const saveList = () => {

    const name = document.getElementById("name-input").value;
    const age = document.getElementById("age-input").value;
    displayList(name, age);
    setValueLocal(name, age);
    document.getElementById("name-input").value = ""
    document.getElementById("age-input").value = "";
};

const displayList = (productName, productQuantity) => {
    const container = document.getElementById("list-container");
    const li = document.createElement("li");
    li.innerText = `${productName} : ${productQuantity}`;
    container.appendChild(li);

};
const setValueLocal = (nam, quantity) => {
    const newObj = { pencil: quantity };
    localStorage.setItem("cart", JSON.stringify(newObj));

};