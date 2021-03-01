// constructor function

function PersonFirst(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
	this.birthYear = function() {
		return this.dob.getFullYear();
	}
	this.fullname = function() {
		return `${this.firstName} ${this.lastName}`
	}
}

// // instiantiate objects
const person2 = new PersonFirst('Mary', 'Smith', '3-6-2021');

console.log(person2.firstName);
console.log(person2.dob);
console.log(person2.birthYear());
console.log(person2.fullname());

// check in web console that function are assigned to 
// attributes directly and not in constructor
console.log(person2);		

// here we added functions to parameters directly but a better 
// practice is to provide them in constructor in prototype of object

function PersonSecond(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
}

PersonSecond.prototype.birthYear = function() { return this.getFullYear(); }
PersonSecond.prototype.fullname = function() { return `${this.firstName} ${this.lastName}` }

const person1 = new PersonSecond('John', 'Doe', '4-3-2021');
console.log(person1)


// now instead of making function objects make class
// most prefered way to make objects and classes

class PersonThird{
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);	
	}

	getBithYear(){
		return this.dob.getFullYear();
	}

	getFullName(){
		return `${this.firstName} ${this.lastName}`
	}
}

const person3 = new PersonThird("H", "P", '4-8-1999');
console.log(person3);
console.log(person3.getFullName());
