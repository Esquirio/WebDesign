const resultEl = document.getElementById('result');
const lenghtEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


// Generator functions - https://net-comber.com/charset.html
// console.log(String.fromCharCode(97));
// console.log(Math.random()); // random number between 0 and 1
// console.log(Math.floor(Math.random() * 26)); // random number between 0 and 26
// console.log(Math.floor(Math.random() * 26) + 97); // random number between 97 and 123 - ASCII Table - alphabet caracteres lowercase
// console.log(Math.floor(Math.random() * 26) + 65); // random number between 97 and 123 - ASCII Table - alphabet caracteres uppercase

// Generate event listen
generateEl.addEventListener('click', () => {
    const length = lenghtEl.value;
    // console.log(length);
    const hasLower = lowercaseEl.checked;
    // console.log(hasLower);
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolEl.checked;

    resultEl.innerHTML = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Generate Password function
function generatePassword(lower, upper, number, symbol, lenght) {
    // 1. Init pw var
    // 2. Filter out uncheckes types
    // 3. Loop over length call generator function for each type
    // 4. Add final pw to the pw var and return

    let generatePassword = '';
    const typesCount = lower + upper + number + symbol;
    // console.log(typesCount);
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    // console.log(typesArr);

    // Doesn't have a selected type
    if (typesCount === 0) {
        return '';
    }

    // Create a loop
    for (let i = 0; i < lenght; i += typesCount) {
        typesArr.forEach(type => {
            console.log(type);
            const funcName = Object.keys(type)[0];
            // console.log(funcName);
            generatePassword += randomFunc[funcName]();
            // console.log(generatePassword);
        });
        // console.log(i);
        // console.log(typesCount);
    }

    const finalPassword = generatePassword.slice(0, lenght);
    // console.log(finalPassword);

    return finalPassword;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)]
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});
