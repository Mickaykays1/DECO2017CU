var tasks = new Array();

let onSubmit = document.getElementById("onSubmit");

let today = document.getElementById("today");

// Inputs new items into the array based on the input
// Submit function
function addElement() {
	taskValue = document.getElementById("checkbox-input").value;
	tasks.push(taskValue);
	document.getElementById("checkbox-input").value = "";
	let li = document.createElement("li");

	li.innerHTML += taskValue;
	today.appendChild(li);
}

