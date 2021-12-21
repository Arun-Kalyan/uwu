//student.js

class student{
	
add(x, y){
	
	return x+y;
}	

subtract(x,y){
	return x-y;
}

square(x){
	return x*x;
}	
}
module.exports = student;	


// main file
var calculator = require('./arithmetic');

var x = 16, y = 8;

console.log("Addition of %d and %d is "
 + calculator.add(x, y), x,y);

console.log("Subtraction of %d and %d is "
 + calculator.sub(x, y), x,y);

console.log("Square of %d is "
 + calculator.squ(x), x);
console.log("Square of %d is "
 + calculator.squ(y), y);
