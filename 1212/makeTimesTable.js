// <for>
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
}


// <for in>
let num1 = [2, 3, 4, 5, 6, 7, 8, 9];
let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i in num1) {
    for (let j in num2) {
        console.log(`${num1[i]} x ${num2[j]} = ${num1[i]*num2[j]}`);
    }
}

// <for of>
let num3 = [2, 3, 4, 5, 6, 7, 8, 9];
let num4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i of num3) {
    for (let j of num4) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

// <while>
let num5 = 2;
while (num5 <= 9) {
    let num6 = 1;
    while (num6 <=9) {
        console.log(num5,'x',num6,'=',num5*num6);
        num6++;
    }
    num5++;
}