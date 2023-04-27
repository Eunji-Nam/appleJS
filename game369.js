// function 삼육구게임(num) {
//     if ( num % 3 == 0) {
//         console.log('박수')
//     } else {
//         console.log('통과');
//     }
// }

// 삼육구게임(6);
// 삼육구게임(12);
// 삼육구게임(11);

function 삼육구게임(num) {
    if ( num % 9 == 0 ) {
        console.log('박수X2');
    } else if ( num % 3 == 0) {
        console.log('박수')
    } else {
        console.log('통과');
    }
}

삼육구게임(6);
삼육구게임(9);
삼육구게임(11);

