const button = document.querySelector("button");
const list = document.querySelector("ul");
button.addEventListener("click", () => {
    const text = document.getElementById("text").value;
    const newItem = document.createElement("li");
    newItem.textContent = `${text}`; 
    list.appendChild(newItem); 
})