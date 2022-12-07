//if문
var num = 10;

if (num > 11) {
  console.log("숫자가 큽니다!");
} else if (num < 9) {
  console.log("숫자가 작습니다!");
} else {
  console.log("정답입니다!");
}


//switch문
let fruit = "Apples"
switch (fruit) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log('Sorry, we are out of ' + fruit + '.');
  }

  //switch를 이용하여 요일을 영어로 출력
  var day = "월요일"
  var dayName;

  switch (day) {
    case '월요일':
      console.log('월요일은 Monday 입니다.');
      break;
    case '화요일':
      console.log('화요일은 Tuesday 입니다.');
      break;
    case '수요일':
      console.log('수요일은 Wednesday 입니다.');
      break;
    case '목요일':
      console.log('목요일은 Thursday 입니다.');
      break;
    case '금요일':
      console.log('금요일은 Friday 입니다.');
      break;
    case '토요일':
      console.log('토요일은 Saturday 입니다.');
      break;
    case '일요일':
      console.log('일요일은 Sunday 입니다.');
      break;
    default:
      console.log('Oh Happy Day!')
  }