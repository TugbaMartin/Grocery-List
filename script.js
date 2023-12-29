const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

pencil.addEventListener("click", function() {
    allItems.innerHTML = "";
});

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        addItem();
    }
});


function addItem() {
    if (userInput.value.trim() !== "") {
        let h2 = document.createElement("h2");
        h2.textContent = userInput.value;
        h2.addEventListener("click", function() {
            h2.style.textDecoration = "line-through";
        });

        allItems.appendChild(h2);
        userInput.value = "";
    }
}
