let submit = document.querySelector("#submit");
let container = document.querySelector(".container");
let toDo = document.querySelector(".toDoList");
submit.addEventListener("click", () => {
    let val = document.querySelector(".activity").value;
    if (val === "") {
        alert("Enter your activity first");
    }
    else {
        let element = document.createElement("p");
        element.innerHTML = val;
        toDo.append(element);
        let removeActivityBtn = document.createElement("button");
        removeActivityBtn.innerText = "Remove";
        toDo.append(removeActivityBtn);
        removeActivityBtn.addEventListener("click", (evt) => {
            evt.target.remove();
            element.remove();
        });
    }
});