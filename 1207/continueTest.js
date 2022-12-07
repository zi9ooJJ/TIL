let string = "Hello World";
let count = 0;

for(var i = 0; i < string.length; i++) {
    if(string[i] !== 'l') continue;
    count++;
}

console.log(count); // 출력 : 3

// for(var i = 0; i < string.length; i++) {
//     if(string[i] == 'l') continue;
//     count++;
// }

// console.log(count); // 출력 : 8