// Q. Array에서 철수라는 자료 찾기 
// 동작 예시 :
// 이름찾기('철수'); 라고 쓰면 콘솔창에 '있어요'라는 글자가 떠야합니다.
// 이름찾기('명수'); 라고 쓰면 콘솔창에 아무 글자도 뜨지 않아야합니다.

// (조건) find, indexOf 같은 자바스크립트 기본함수들 사용금지

var 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기(name){
  출석부.forEach((i) => {
    if(name ==  i) {
      console.log('있어요')
    }
  })
}

이름찾기('철수');
이름찾기('명수');