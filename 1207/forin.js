// for in 배열을 처음부터 끝까지 돌릴 때 쓴다.
const arrays = ["사과", "배", "체리", "자두", "복숭아"];

for(var i = 0; i < arrays.length; i++) {
    console.log(arrays[i]);
}

// 위 코드와 같은 의미 <for(var i = 0; i < arrays.length; i++) == for(var i in arrays)>
for (var i in arrays) {
    console.log(arrays[i]);
}

user = {
    name : "jisoo",
    address : "home",
    age : 29
}

for (k in user) {
    console.log(k);
    console.log(user[k]);
}

// for in, for of 비교
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
    console.log(i); // 출력 : 0 1 2 foo -> index
}
for (let i of arr) {
    console.log(i); // 출력 : 3 5 7 -> 배열에 들어있는 요소만 나온다.
}