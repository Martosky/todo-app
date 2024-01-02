const input = document.getElementById("input-text");
const button = document.getElementById("add-btn");
const output = document.getElementById("output");



const myFunction = () => {

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

}