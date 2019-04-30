// Area of a rectangle

// function isEven(x) {
// 	if(x %2 === 0)
// 		return "true";
// 	else {
// 		return "false";
// 	}
// }

function factorial(num) {
	var result = 1;
	for(var i = 2; i <= num; i++) {
		result *= 1;
	}
	return result;
}



function kebabToSnake(x) {
	var newString = x.replace(/-/g, "_");
	return newString;
}

function doMath() {
	var x = 40;
	console.log(x);
}

function sing() {
	console.log("twinkle twinkle...");
	console.log("how I wonder...");

	setInterval(sing, 1000);
}