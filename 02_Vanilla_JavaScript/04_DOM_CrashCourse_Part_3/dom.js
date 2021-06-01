// EVENTS

// let buttom = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
//     // console.log('Button clicked');
//     // document.getElementById('header-title').textContent = 'Change';
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//     // console.log(e);

//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // let output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id + '</h3>'

//     // console.log(e.type);

//     // console.log(e.clientX); //Position form the browser
//     // console.log(e.clientY); //Position form the browser    

//     // console.log(e.offsetX); //Position form the element
//     // console.log(e.offsetY); //Position form the element

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
// }

let buttom = document.getElementById('button');
let box = document.getElementById('box');

// buttom.addEventListener('click', runEvent);
// buttom.addEventListener('dblclick', runEvent);
// buttom.addEventListener('mousedown', runEvent);
// buttom.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);


function runEvent(e) {
    e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`);

    // console.log(`VALEU: ${e.target.value}`);
    // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';

    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>Mouse Y: ' + e.offsetY + '</h3>';
    // box.style.backgroundColor = 'rgb(' + e.offsetX + ',' + e.offsetY + ', 40)';
    // document.body.style.backgroundColor = 'rgb(' + e.offsetX + ',' + e.offsetY + ', 40)';
}
