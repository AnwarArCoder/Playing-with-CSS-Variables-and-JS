//Get All Inputs and save on var inputs
let inputs = document.querySelectorAll('.box-play input');

//add Function named handelUpdate()
function handelUpdate() {
//	Return inside to data-sizing
	let suffix = this.dataset.sizing || '';
	
	
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handelUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handelUpdate));