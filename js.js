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
	return String(result);
};

function backspace() {
	if(num2) {
		if(num2 === Infinity || num2 === NaN) {
			num2 = "";
		} else {
			num2 = num2.slice(0,-1);
		};
	} else if (operator) {
		operator = operator.slice(0,-1);
	} else if (num1) {
		if(num1 === Infinity || num1 === NaN) {
			num1 = "";
		} else {
			num1 = num1.slice(0,-1);
		};
	};
};

function handleButtonPress(input) {
	console.log(input);

	switch(input) {
		case "+":
		case "-":
		case "*":
		case "/":
			if(!num1) {
				num1 = 0;
			};
			operator = input;
			break;
		
		case "=":
		case "Enter":
			if(num1 !== undefined && num2 !== undefined && operator !== undefined) {
				num1 = operate(num1, num2, operator);
				num2 = undefined;
				operator = undefined;
			} 
			else {
				console.log("incomplete");
			};
			
			break;

		case "<-":
		case "Backspace":
			backspace();
			break;
		
		case "0": case "1": case "2": case "3": case "4": case "5":
		case "6": case "7": case "8": case "9":
			if(!operator) {
				num1 = num1 ? num1 + input : input;
			}
			else {
				num2 = num2 ? num2 + input : input;
			};
			break;
	};

	results.textContent = num2 ? `${num1} ${operator} ${num2}` : operator ? `${num1} ${operator}` : num1 ? `${num1}` : "";
};


let calculator = document.getElementById("calculator");
let results = document.getElementById("calculator-results");
let buttons = document.getElementById("calculator-buttons");

buttons.addEventListener("click", (e) => {
	if(e.target.tagName != "BUTTON") {
		return;
	};

	handleButtonPress(e.target.textContent);
});

document.addEventListener("keydown", (e) => {
	console.log(e);
	handleButtonPress(e.key);
});
