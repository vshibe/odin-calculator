let num1 = undefined;
let num2 = undefined;
let operator = undefined;

function operate(num1, num2, operator) {
	let result = undefined;

	switch(operator) {
		case "+":
			result = num1+num2;
			break;
		case "-":
			result = num1-num2;
			break;
		case "*":
			result = num1*num2;
			break;
		case "/":
			result = num1/num2;
			break;
	};

	console.log(result);
};

let calculator = document.getElementById("calculator");
let results = document.getElementById("calculator-results");

calculator.addEventListener("click", (e) => {
	console.log(e.target.textContent);

	switch(e.target.textContent) {

	};
});
