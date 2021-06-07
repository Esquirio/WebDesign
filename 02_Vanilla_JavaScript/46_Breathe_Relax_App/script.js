const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTiime = totalTime / 5;

breathAnimation();

function breathAnimation() {
    text.innerHTML = 'Breath In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerHTML = 'Breath Out!';
            container.className = 'container shrink'
        }, holdTiime)
    }, breathTime);
}

setInterval(breathAnimation, totalTime);