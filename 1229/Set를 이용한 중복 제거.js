/* Set는 중복 데이터 저장을 허용하지 않는 자료구조.
배열의 모든 요소에 Set을 추가하면 중복이 제거된다. 
new Set(arr)는 1개의 요소씩만 배열의 데이터가 추가된 새로운 Set 객체가 생성된다.
Set을 Array로 변경할 때는 spread 연산자를 사용하여 [...set]처럼 간단하게 변환할 수 있다. */

const arr = ['amy', 'joey', 'lucy', 'amy', 'lucy', 'camila'];

// // case 1 - spread poerator 사용
const set = new Set(arr);
const newArr1 = [...set];
console.log(newArr1); // [ 'amy', 'joey', 'lucy', 'camila' ]

// case 2 - Array.from 사용
const newArr2 = Array.from(new Set(arr));
console.log(newArr2); // [ 'amy', 'joey', 'lucy', 'camila' ]

// case 3 - Destructuring Assingment 사용
console.log([...new Set(arr)]); //[ 'amy', 'joey', 'lucy', 'camila' ]