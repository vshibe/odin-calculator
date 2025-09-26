function operate() {
	let firstNum = 1;
	let secondNum = 2;
	let operator = "+";
	let result = undefined;

	switch(operator) {
		case "+":
			result = firstNum+secondNum;
			break;
		case "-":
			result = firstNum-secondNum;
			break;
		case "*":
			result = firstNum*secondNum;
			break;
		case "/":
			result = firstNum/secondNum;
			break;
	};

	console.log(result);
};
