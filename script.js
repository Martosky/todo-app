const input = document.getElementById("input-text");
const button = document.getElementById("add-btn");
const output = document.getElementById("output");

button.addEventListener("click", myFunction )

function myFunction() {

    if (input.value === ""){
        alert("Please fill in the input field with a task!");
    }else {
        let li = document.createElement("li");
        li.innerText = input.value;
        output.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    input.value = "";
    saveData()

};
output.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
    
}, false)

function saveData(){
    localStorage.setItem("Data", output);
}