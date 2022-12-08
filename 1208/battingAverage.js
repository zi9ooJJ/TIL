const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let hitBox = [];
rl.on("line", (BA) => {
    hitBox.push(parseInt(BA));
    if (hitBox.length === 2) {
        rl.close();
    }    
})
rl.on("close", () => {
    let atBat = hitBox[0];
    let hits = hitBox[1];
    let batAvg = hits / atBat;

    if (Math.floor(batAvg * 10) !== 0) {
        console.log(Math.floor(batAvg * 10), '할');
    }
    if (Math.floor((batAvg * 100) % 10) !== 0) {
        console.log(Math.floor((batAvg * 100) % 10), '푼');
    }
    if (Math.floor((batAvg * 1000) % 10) !== 0) {
        console.log(Math.floor((batAvg * 1000) % 10), '리');
    }
})
