/* 지시사항
1. 0이상의 정수인 타수와 안타를 입력받으세요.
2. 구한 타율을 할푼리로 출력하세요. 할푼리 아래의 소수점은 모두 버림하며 값이 0인 경우 생략합니다. */

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
