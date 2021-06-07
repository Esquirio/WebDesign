const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        // Teh symbol + means that it wil be trasform in a number. Before it was string.
        // console.log(typeof target);
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speed;

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerHTML = count + inc;
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerHTML = target;
        }
    };

    updateCount();
});