// alert('Hello World!');
// console.log('Hello World!');
// console.error('This is a error');
// console.warn('This is a warning!');

// let, const
let age = 30;
console.log(age);

age = 31;

console.log(age);

console.log('-----------');

// String, Numbers, Boolean, null, undefined
const nome = 'John';
const age1 = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof nome); // Type of const
console.log(typeof age1);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

console.log('-----------');

// Concatenation
console.log('My name is ' + nome + ' and I am ' + age1);

// Template String
const hello = `My name is ${nome} and I am ${age1}`;

console.log(hello);

console.log('-----------');

// Proprieties and methods
const s = 'Hello World!';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));

const s1 = 'technology, computer, it, code';
console.log(s1.split(', '));

console.log('-----------');

// Arrays - variables that hold multiple values
const numbers = new Array(1, 2, 3, 4, 5);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries');

console.log(fruits);

console.log(fruits[1]);

fruits.pop();

console.log(fruits);

console.log(Array.isArray('hello')); // Verify if is an array
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges')); // Return the index of something

console.log('-----------');

// Objects
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

// alert(person); // It doesn't work
console.log(person);
console.log(person.firstName);
console.log(person.lastName, person.age);
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName, address: { city } } = person;
console.log(firstName, city);

person.email = 'john@email.com';

console.log(person);

console.log('-----------');

// Array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

console.log('-----------');

// JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


console.log('-----------');

// For loop
for (let i = 0; i < 10; i++) {
    console.log(`For loop Number: ${i}`);
}

console.log('-----------');

// While loop
let i = 0;
while (i < 10) {
    console.log(`While loop Number: ${i}`);
    i++;
}

console.log('-----------');

// Loop whit arrays
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

console.log('-----------');

// For overloop
for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
}

console.log('-----------');

// High order array methods
// forEach, map, filter
todos.forEach(function (test) {
    console.log(test.text);
});

console.log('-----------');

const mapText = todos.map(function (test) {
    return test.text;
});

console.log(mapText);

console.log('-----------');

const filterCompleted = todos.filter(function (test) {
    return test.isCompleted === true;
});

console.log(filterCompleted);

// filter + map
console.log('-----------');

const filtermap_Completed = todos.filter(function (test) {
    return test.isCompleted === true;
}).map(function (test) {
    return test.text;
});

console.log(filtermap_Completed);

// Conditionals
console.log('-----------');
// Double equal
const a = 10;
if (a == 10) {
    console.log('a is 10');
}

const b = '10';
if (b == 10) {
    console.log('b is 10');
}

// Triple equal - verify the type
const c = 10;
if (c === 10) {
    console.log('c is 10');
}

const d = '10';
if (d === 10) {
    console.log('d is 10');
} else {
    console.log('d is NOT 10');
}

const e = 20;
if (e === 10) {
    console.log('e is 10');
} else if (e > 10) {
    console.log('e is greater than 10');
} else {
    console.log('e is less than 10');
}

// Multiple condicions
const f = 4;
const g = 11;

if (f > 5 || g > 10) {
    console.log('f is more than 5 or g is more than 10');
}

// Operators
console.log('-----------');
const h = 11;
const color = h > 10 ? 'red' : 'blue';

console.log(color);

// Switches
console.log('-----------');
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

// Functions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(4, 5));

const addNums2 = (num1 = 1, num2 = 1) => {
    return num1 + num2;
}

console.log(addNums2(4, 6));

// If it have one statement, we don't need to put brackets
const addNums3 = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums3(7, 6));

// If it have one parameter, we don't need to put parenteses
const addNums4 = num1 => num1 + 10;

console.log(addNums4(7));

todos.forEach((todos) => console.log(todos));

console.log('-----------');

// Constructor function - lexical this
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // this.getBirthYear = function () {
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function () {
    //     return `${this.firstName} ${this.lastName}`;
    // }
}

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate object
const person1 = new Person('John', 'Doe', '1980-04-03');
const person2 = new Person('Marry', 'Smith', '1970-06-13');

console.log(person1);
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person1.getFullName());

// ES6 Class
class Person_class {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person3 = new Person_class('John', 'Doe', '1980-04-03');
const person4 = new Person_class('Marry', 'Smith', '1970-06-13');

console.log(person3);
console.log(person4.dob.getFullYear());

console.log(person3.getBirthYear());
console.log(person3.getFullName());

// DOM - Document Object Model
// console.log(window);

// alert(1);

// Single Elements Selectors
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('h1'));

// Multiple Elements Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

// Changing things in teh DOM
const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Doe';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // console.log('click');
//     // console.log(e);
//     // console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     ul.lastElementChild.innerHTML = '<h1>Hello World</h1>';
// });

// Form script
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        // console.log('sucess');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //Clear
        nameInput.value = '';
        emailInput.value = '';
    }
}