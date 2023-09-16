
function gacor() {
    let slot1 = Math.floor(Math.random() * 900);
    let slot2 = Math.floor(Math.random() * 900);
    let slot3 = Math.floor(Math.random() * 900);

    const eslot1 = document.getElementById("slot1");
    const eslot2 = document.getElementById("slot2");
    const eslot3 = document.getElementById("slot3");

    let duration = 1000;

    animateCounter(eslot1, 0, slot1, duration);
    animateCounter(eslot2, 0, slot2, duration);
    animateCounter(eslot3, 0, slot3, duration);

    const stiker = document.querySelector(".gacor .wrapper .reaksiku").querySelector("img");

    stiker.src=randomStiker();
}

function animateCounter(element, start, end, duration) {
    let startTime = null;
    const updateCounter = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const value = Math.floor(start + percentage * (end - start));
        element.textContent = value;

        if (percentage < 1) {
            requestAnimationFrame(updateCounter);
        }
    };
    requestAnimationFrame(updateCounter);
}