// 콜백함수
function callbackName(cb) {
    setTimeout(() => {
        cb('jamie');
    }, 1000);
}
function callbackAge(cb) {
    setTimeout(() => {
        cb(10);
    }, 1000);
}
function callbackHome(cb) {
    setTimeout(() => {
        cb('seoul');
    }, 1000);
}
// 콜백 지옥에 빠짐...1초+1초+1초의 시간이 걸리기 때문에 3초 뒤에 출력 됨.
callbackName((name) => {
    callbackAge((age) => {
        callbackHome((home) => {
            console.log(name, age, home); // jamie 10 seoul
        })
    })
})

// Promise
function promiseName() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('jamie');
        }, 1000);
    })
}
function promiseAge() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    })
}
function promiseHome() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('seoul');
        }, 1000);
    })
}
// Promise.all을 이용하여 하나의 함수에서 제어 가능.
// 세 함수 모두 프로미스 객체를 반환하기 때문에 Promise.all에서 사용 가능. -> 병렬적으로 배열의 원소에 있는 프로미스를 동시에 실행 시켜 반환함.
Promise
    .all([promiseName(), promiseAge(), promiseHome()])
    .then((res) => {
        const [name, age, home] = res;
        console.log(name, age, home) // jamie 10 seoul
    })

// async/await
(async () => {
    const name = await promiseName();
    const age = await promiseAge();
    const home = await promiseHome();
    
    // await이 프로미스가 모두 완료될 때까지 대기하므로 총 3초의 시간이 걸린다. 
    console.log(name, age, home); // jamie 10 seoul
})();