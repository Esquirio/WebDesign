let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');

// numberInput.addEventListener('input', getFactAjax);
numberInput.addEventListener('input', getFactFetch);

// Fetch with XHR
function getFactAjax() {
    let number = numberInput.value;
    // console.log(number);
    if (number != '') {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://numbersapi.com/' + number);

        xhr.onload = function () {
            if (this.status == 200) {
                fact.style.display = 'block';
                factText.innerHTML = this.responseText;
                console.log(this.responseText);
            } else {
                console.error('Not Found!');
            }
        }

        xhr.send();
    } else {
        fact.style.display = 'none';
        factText.innerHTML = '';
    }
}

// Fetch with Fetch API
function getFactFetch() {
    let number = numberInput.value;

    if (number != '') {
        fetch('http://numbersapi.com/' + number)
            .then(response => response.text())
            .then(data => {
                fact.style.display = 'block';
                factText.innerHTML = data;
                console.log(data);
            }).catch(err => console.log(err));
    } else {
        fact.style.display = 'none';
        factText.innerHTML = '';
    }
}