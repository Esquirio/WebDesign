let chain = document.getElementById('chain');

// Brake chain Animation
function brakeChain() {
    chain.innerHTML = '&#xf0c1;';

    setTimeout(() => {
        chain.innerHTML = '&#xf127;';
    }, 1000);
}

brakeChain();

// Animate Every 2 seconds
setInterval(brakeChain, 2000);


let battery = document.getElementById('battery');

// Battery Charge Animation
function chargeBattery() {
    battery.innerHTML = '&#xf244;';

    setTimeout(() => {
        battery.innerHTML = '&#xf243;';
    }, 1000);
    setTimeout(() => {
        battery.innerHTML = '&#xf242;';
    }, 2000);
    setTimeout(() => {
        battery.innerHTML = '&#xf241;';
    }, 3000);
    setTimeout(() => {
        battery.innerHTML = '&#xf240;';
    }, 4000);
}

// Run Animation
chargeBattery();

// Run Animation Every 5 seconds
setInterval(chargeBattery, 5000);

let hourglass = document.getElementById('hourglass');

// Hourglass Tip Animation
function hourglassTip() {
    hourglass.innerHTML = '&#xf251;';

    setTimeout(() => {
        hourglass.innerHTML = '&#xf252;';
    }, 1000);

    setTimeout(() => {
        hourglass.innerHTML = '&#xf253;';
    }, 2000);
}

// Run Animation
hourglassTip();

// Run Animation Every 3 Seconds
setInterval(hourglassTip, 3000);