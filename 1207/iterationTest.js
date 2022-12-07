//for문
for (let i = 0; i < 5; i++){
    console.log(i);
}

//이중for문 - 두 개의 주사위를 던졌을 때, 두 눈의 합이 6이 되는 모든 경우의 수 출력.
for (var i = 1; i <=6 ; i++){
    for(var j = 1; j <= 6; j++){
        if(i + j === 6) {
            // console.log('[' + i + ',' + j + ']');
            console.log(`[${i}, ${j}]`);
        }
    }
}

// while문
let count = 0;

while(count < 9) {
    console.log(count);
    count++; //증감식을 안써주면 무한루프에 빠짐!!!
}

// do while 문
let count2 = 0;

do { 
    console.log(count2);
    count2++;
} while (count2 < 3);