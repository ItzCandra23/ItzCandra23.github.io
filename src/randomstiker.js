let stikers = [];

try {
    fetch("../stikers.json").then(res => res.json())
    .then((stiker) => {
        stiker.forEach((v) => {
            stikers.push(v);
        });
    });
} catch(err) {}

function randomStiker() {
    const random = Math.floor(Math.random() * stikers.length);

    return stikers[random];
}

function getStikers() {
    return stikers;
}