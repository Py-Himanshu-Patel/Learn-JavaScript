// window is the top level object and 
console.log(window);
// window.alert("Hi"); // same as alert
// alert("Hello");		// alert is a obj of windows		 

/////////////////// single element selector

// using getElementById 
const ele1 = document.getElementById("my-form");
console.log(ele1);
// using querySelector (even if there are multiple element of same type )
const ele2 = document.querySelector(".container");
console.log(ele2);

/////////////////// multiple elements selector

// selects multiple elements and returns a nodelist
// we can use array methods on it
console.log(document.querySelectorAll('.item'));


// to remove some element
const list = document.querySelector(".items");
// removes the list
// list.remove();

// remove last item of list
// list.lastElementChild.remove();

list.firstElementChild.textContent = "Hello";
list.children[1].innerHTML = "HP";
list.lastElementChild.innerHTML = "<h1>JS</h1>";

// select button element and make it click
const btn = document.querySelector('.btn');
btn.style.background = "crimson";

// commenting this out so that another event on form can work
/*
// adding event to button click 
btn.addEventListener('click', (e) => {
	e.preventDefault();	// it prevent default submittion of form
	console.log('click');
	// get the target node of event as 
	// console.log(e.target);
});
*/

// put registered user in a list below button
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('.users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
	e.preventDefault();

	if(nameInput.value === "" || emailInput.value === ""){
		msg.classList.add('error');
		msg.innerHTML = "Please enter all fields";
		// setTimeout get fires after 2000ms and exe the function given as parameter
		setTimeout(() => msg.remove(), 2000);
	} else {

		// create a new li element
		const li = document.createElement('li');
		li.appendChild(
			document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
		);

		// append new li node to list
		userList.append(li);

		nameInput.value = "";
		emailInput.value = "";
	}
}

