// don't use alert it's inefficient use console.log 
// alert("Hello JS"); 

// console.log("This is log");			// clg is short for console.log in vscode
// console.error("This is error");
// console.warn("This is warning");

// all major data types

// single line comments
/* multiline 
comments */ 

const rating = 4.5;		// number	(no float)
const age = 21; 		// number
const name = "HP"; 		// string
const valid = true;		// bool
const x = null;			// null is not object type but it shows as object when checked with typeof
const y = undefined;	// undefined
let z;					// undefined

console.log(typeof rating);
console.log(typeof age);
console.log(typeof name);
console.log(typeof valid);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);


// concatination
console.log("My name is "+ name + " and my age is "+ age);
// template string
console.log(`My name is ${name} and my age is ${age}.`)

// string properties
const s = "Hello World";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));	// indexing same as python 0 to 4 char
console.log(s.split(""));		// split by letters
console.log(s.split(" "));		// split by spaces

// Arrays

const numbers = new Array(1,2,3,4,5);						// homogenous
const fruits = ['apples', 'mangoes', 'pears', 10, true]		// heterogenous

// valid
fruits[2] = "bananas";
// invalid
// fruits = []

fruits.push("Watermelon");			// enter in end of array
fruits.unshift("Strawberries");		// enter in front
fruits.pop();

// check if some obj is array
console.log("Is this array: " + Array.isArray(fruits));

console.log(numbers);
console.log(fruits);

// get index of some item in array
console.log(fruits.indexOf("bananas"));

// creating an object
const person = {
	firstname: "H",
	lastname: "P",
	age: 21,
	hobbies: ['music', 'movies', 'sports'],
	address: {
		street: "100 China Town",
		city: "Sanghai",
		country: "China"
	}
}

// add properties
person.email = "HP@email.com";

console.log(person);
console.log(person.firstname);


// getting value from object through destructuring
const {firstname, lastname, address: {city} } = person;

console.log(firstname);
console.log(city);


// list of objects

const todos = [
	{
		task: "Do exercise",
		done: false
	},
	{
		task: "Do Meeting",
		done: true
	},
	{
		task: "Debug Issue",
		done: false
	},
]

// above list is very similar to JSON object but in actual JSON even keys are of string type
// to convert it to JSON use stringify function
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// for loop
for(let i=0; i<10; i++){
	console.log(`for loop: ${i}`);
}


// while loop
let i=0;
while (i<10){
	console.log(`while loop: ${i}`);
	i++;
}

// another loop to loop through iterables
for(let todo of todos){
	console.log(todo.task);
}

// forEach method
// parameter of function is a variable we want to use to access each item of array
todos.forEach(function(todo) {
	console.log(todo.done);
});

// map function return an array of selected attributes or expression
// this returns an array of text describing each task 
const todoList = todos.map(function(todo){
	return todo.task;
});

console.log(todoList);

// getting the task which are done
const todoDone = todos.filter(function(todo){
	return todo.done === true;	// filter return only the obj which return true here
}).map(function(todo){
	return todo.task;
});

console.log(todoDone);


// == and ===

let a = '10';

// === matched type also
if (a === 10){
	console.log("x is int 10");
}
// == matched only value
else if (a == 10){
	console.log("x is 10 in value");
}
else {
	console.log("x is not 10");
}

// OR is ||
// AND is &&

// ternary operator
const color = a > 20 ? 'red': 'blue';
console.log(color);

// switch
switch(color) {
	case 'red':
		console.log('color is red');
		break;
	case 'blue':
		console.log('color is blue');
		break;
	default:
		console.log("not red not blue");
		break;
}

// functions
function addTwo(var1=1, var2=1){
	return var1+var2;
}

console.log(addTwo(5,10));
console.log(addTwo());
console.log(addTwo("H","P"));

// fat function or fat arrow function
const Add = (var1=0, var2=0) => {
	return var1 + var2;
}
// even better way
// const Add = (var1=0, var2=0) => var1 + var2;

console.log(Add(1,2));
console.log(Add());
console.log(Add("H","P"));

// use of fat function with single parameters do not need () even
todos.forEach(todo => console.log(todo.task));
