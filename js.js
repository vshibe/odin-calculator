let num1 = undefined;
let num2 = undefined;
let operator = undefined;

function operate(num1, num2, operator) {
	let result = undefined;
	num1 = +num1;
	num2 = +num2;
	
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
	return result;
};

function backspace() {
	if(num2) {
		num2 = num2.slice(0,-1);
	} else if (operator) {
		operator = operator.slice(0,-1);
	} else if (num1) {
		num1 = num1.slice(0,-1);
	};
};

let calculator = document.getElementById("calculator");
let results = document.getElementById("calculator-results");
let buttons = document.getElementById("calculator-buttons");

buttons.addEventListener("click", (e) => {
	if(e.target.tagName != "BUTTON") {
		return;
	};

	console.log(e.target.textContent);
	
	switch(e.target.textContent) {
		case "+":
		case "-":
		case "*":
		case "/":
			operator = e.target.textContent;
			break;
		
		case "=":
			if(num1 && num2 && operator) {
				num1 = operate(num1, num2, operator);
				num2 = undefined;
				operator = undefined;
			} 
			else {
				console.log("incomplete");
			};
			
			break;

		case "<-":
			backspace();
			break;
		
		default:
			if(!operator) {
				num1 = num1 ? num1 + e.target.textContent : e.target.textContent;
			}
			else {
				num2 = num2 ? num2 + e.target.textContent : e.target.textContent;
			};
			break;
	};

	results.textContent = num2 ? `${num1} ${operator} ${num2}` : `${num1}`;
});
