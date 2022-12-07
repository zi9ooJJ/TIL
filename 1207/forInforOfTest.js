// for..of
const arr = ["아름", "다운", "나라"];

for (let i of arr) {
    console.log(i)
} 

// 출력 : 아름 다운 나라

// for in

const obj = ["우리", "나라", "만세"];

for (let i in obj) {
    console.log(i);
}

// 출력 : 0 1 2

for (let i in obj) {
    console.log(obj[i]);
}

// 출력 : 우리 나라 만세