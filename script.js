let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");
const addTask = () =>{
    if(inputBox.value === "")
    {
        alert("Please add something..")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}
listContainer.addEventListener("click",(e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);