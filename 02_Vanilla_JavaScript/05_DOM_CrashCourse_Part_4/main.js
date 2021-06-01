let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    let = newItem = document.getElementById('item').value;

    // Create new li element
    let li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element
    let deleteBtn = document.createElement('button');

    // Add classes to dlete button
    deleteBtn.className = 'btn btn-danger btn- float-end delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('x'));

    // Append button to li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

// Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Function filterItems
function filterItems(e) {
    // convert txt to lowercase
    let text = e.target.value.toLowerCase();
    // Get list items
    let items = itemList.getElementsByTagName('li');
    // Convert tio array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}