let countPlus = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

let count = 0

function increment(){
	count+=1
	countPlus.textContent = count
}

function save(){
	let countSaved = count + " - "
	saveEl.textContent += countSaved
	
	countPlus.textContent = 0
	count = 0
}

