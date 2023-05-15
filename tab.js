// 버튼0(Products) 누르면
//     모든 버튼에 붙은 orange 클래스명 제거 
//     버튼0에 orange 클래스명 추가 
//     모든 div에 붙은 show 클래스명 제거 
//     div0에 show 클래스명 추가 

// $('.tab-button').eq(0).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// })

// $('.tab-button').eq(1).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// })

// $('.tab-button').eq(2).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// })


// for반복문으로 변경
// for(let i = 0; i < $('.tab-button').length; i++) {
//     $('.tab-button').eq(i).on('click', function() {
//         탭열기(i)
//     })
// }

function 탭열기(숫자) {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}

// 탭기능 다르게 만들기 
// 이벤트리스너 1개만 쓰기
$('.list').click(function(e) {
    // 탭열기(지금누른버튼에 숨겨져있는 data-id)
    탭열기(e.target.dataset.id)
})