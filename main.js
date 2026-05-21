// Instructions
// Scenario: You are building a calculator for an online math game. The
// calculator must include functionality to perform the following:
// ● Absolute Value Calculation: Given any number, return its absolute
// value.
// ● Power Calculation: Calculate and return the value of a base raised to
// a specific power.
// ● Square Root Finder: Calculate the square root of a number.
// ● Maximum and Minimum Finder: From a given set of numbers,
// determine the largest and smallest values.
// ● Random Number Generator: Generate a random integer within a
// specified range.
// ● Custom Rounding: Round a number to a specified number of decimal
// places.
// Step-by-Step Tasks:
// 1. Write a function for each operation listed above using the Math
// module.
// 2. Test each function with sample inputs to ensure it works as intended.
// 3. Combine the individual functions into a single "calculator" program
// where the user can select an operation and input the required values.
// 4. Test the calculator by performing the following:
// ● Find the absolute value of -45.67.
// ● Raise 5 to the power of 3.
// ● Calculate the square root of 144.
// ● Determine the largest and smallest values from [3, 78, -12,
// 0.5, 27].
// ● Generate a random number between 1 and 50.

// absolute value
function absoluteValue(num) {
	result = Math.abs(num);
	console.log(`The absolute value of ${num} is ${result}`);
	return result;
}

// power
function power(base, exponent) {
	result = Math.pow(base, exponent);
	console.log(`${base} to the power of ${exponent} is ${result}`);
	return result;
}

// square root
function squareRoot(num) {
	result = Math.sqrt(num);
	console.log(`The square root of ${num} is ${result}`);
	return result;
}

function maxNum(numbers) {
	result = Math.max(...numbers);
	console.log(`The max is ${result}`);
	return result;
}

function minNum(numbers) {
	result = Math.min(...numbers);
	console.log(`The min is ${result}`);
	return result;
}

function randomNum(max) {
	result = Math.floor(Math.random() * max);
	console.log(`Your random number is ${result}`);
	return result;
}

function roundNum(num) {
	result = Math.round(num * 100) / 100;
	console.log(`${num} rounded is ${result}`);
	return result;
}

/* -------------------------------------------------------------------------- */
// testing

function calculator(operation, ...args) {
	switch (operation) {
		case "absoluteValue":
			return absoluteValue(...args);
		case "power":
			return power(...args);
		case "squareRoot":
			return squareRoot(...args);
		case "maxNum":
			return maxNum(...args);
		case "minNum":
			return minNum(...args);
		case "randomNum":
			return randomNum(...args);
		case "roundNum":
			return roundNum(...args);
		default:
			return console.log("Not a valid operation!");
	}
}

calculator("absoluteValue", -45.67);
calculator("power", 5, 3);
calculator("squareRoot", 144);
calculator("maxNum", [3, 78, -12, 0.5, 27]);
calculator("minNum", [3, 78, -12, 0.5, 27]);
calculator("randomNum", 50);
calculator("roundNum", 23.67891);
