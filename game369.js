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

// function 삼육구게임(num) {
//     if ( num % 9 == 0 ) {
//         console.log('박수X2');
//     } else if ( num % 3 == 0) {
//         console.log('박수')
//     } else {
//         console.log('통과');
//     }
// }

// 삼육구게임(6);
// 삼육구게임(9);
// 삼육구게임(11);


// function 삼육구게임(num) {
//     const unitDigit = num.toString()
//     if (unitDigit[unitDigit.length-1] == 3 || unitDigit[unitDigit.length-1] == 6 || unitDigit[unitDigit.length-1] == 3) {
//         console.log('박수')
//     } else {
//         console.log('통과')
//     }
// }

// 삼육구게임(3);
// 삼육구게임(12);
// 삼육구게임(26);


// function 합격했냐(개론, 민법) {
//     if(개론 + 민법 >= 120 && 개론 >= 40 && 민법 >= 40) {
//         console.log('합격')
//     } else {
//         console.log('불합격')
//     }
// }

// 합격했냐(70, 70);
// 합격했냐(30, 100);
// 합격했냐(50, 50);

function 합격했냐(개론, 민법) {
    if(개론 > 100 || 민법 > 100 || 개론 < 0 || 민법 < 0) {
        console.log('장난치지마세요^^')
    } else if(개론 + 민법 >= 120 && 개론 >= 40 && 민법 >= 40) {
        console.log('합격')
    } else {
        console.log('불합격')
    }
}

합격했냐(70, 120);
합격했냐(-20, 90);
합격했냐(70, 70);
합격했냐(30, 100);
합격했냐(50, 50);
