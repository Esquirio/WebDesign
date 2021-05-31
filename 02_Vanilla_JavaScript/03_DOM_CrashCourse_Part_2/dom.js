// TRAVERSING THE DOM //
let itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElements - idem previous
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes); // items with the line brakes
// console.log(itemList.children); // items with no line brakes

// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // First child - count line breaks and spaces
// console.log(itemList.firstChild);

// // Real first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// // Last child - count line breaks and spaces
// console.log(itemList.lastChild);

// // Real last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 1';

// // nextSibling
// console.log(itemList.nextSibling);

// // nextSibling
// console.log(itemList.nextElementSibling);

// // previous Sbiling
// console.log(itemList.previousSibling);

// // previous Sbiling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = 'green';

// createElement

// create a div
let newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';
// Add id
newDiv.id = 'hello1';
// Add attribute
newDiv.setAttribute('title', 'Hello Div');
// Create text node
let newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

console.log(newDiv);

// Put newDiv on the document
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);
