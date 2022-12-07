let string = "Hello World";
let index;

for(var i = 0; i < string.length; i++) {
    if(string[i] == 'l') {
        index = i;
        break; // break가 없으면 l의 마지막 인덱스인 9가 나옴.
    }
}

console.log(index); // 출력 : 2

//위 코드를 string메서드로 쓸 수 있다.
console.log(string.indexOf('l')); // 출력 : 2
console.log(string.lastIndexOf('l')); // 출력 : 9