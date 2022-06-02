


// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let hw = 'hello world';
// let li = 'lorem ipsum';
// let jic = 'javascript is cool';
//
// console.log(hw.length);
// console.log(li.length);
// console.log(jic.length);


// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// console.log(hw.toUpperCase());
// console.log(li.toUpperCase());
// console.log(jic.toUpperCase());

// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// console.log(hw.toLowerCase());
// console.log(li.toLowerCase());
// console.log(jic.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


// let str = ' dirty string   '
// let cleanStr = str.replace(' ', '')
//     .replace()


// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
//
// let str = 'Ревуть воли як ясла повні';
//
// let stringToarray = (str)=> str.split(' ');
// console.log(stringToarray(str));
//
// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let nubers = [10,8,-7,55,987,-1011,0,1050,0];
//
// let strNumbers = nubers.map(function (value) {
//     value = `${value}`;
//     return value
//
// } );
// console.log(strNumbers);


// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// debugger
// let sortNums = (arr, direction) =>{
//     if(direction === 'ascending'){
//         arr.sort((a,b) => a - b);
//     }
//     if(direction === 'descending'){
//         arr.sort((a, b) => b- a)
//     }else 0;
//     return arr;
// }
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
// console.log(sortNums(nums, 'descending')); // [21,11,3]
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//

// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
//
// let setarray = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
// console.log(setarray);
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesFiveYear = coursesAndDurationArray.filter((courses=> courses.monthDuration > 5));
//
// console.log(coursesFiveYear);


// // описати колоду карт
//
// let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
// let value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'];
// let color = ['red', 'black'];
// let cards = [];
//
// class Card {
//     constructor(suit,value,color) {
//         this.suit = suit
//         this.value = value
//         this.color = color
//     }
// }
//
// for (let i = 0 ; i < color.length; i++) {
//     if (color[i] === 'red') {
//         // console.log(color[i]);
//         for (let j = 0; j < cardSuit.length; j++) {
//             switch (cardSuit[j]) {
//                 case ('diamond'):
//                     for (let k = 0; k < value.length; k++) {
//                         if (value[k] !== 'joker') {
//                             cards.push(new Card(`${cardSuit[j]}`, `${value[k]}`, `${color[i]}`));
//                         }
//                     }
//                     break
//                 case ('heart'):
//                     for (let k = 0; k < value.length; k++) {
//                         if (value[k] !== 'joker') {
//                             cards.push(new Card(`${cardSuit[j]}`, `${value[k]}`, `${color[i]}`));
//                         }
//                     }
//                     break;
//                 default:
//             }
//
//         }
//     }
//     else {
//         console.log(color[i]);
//         for (let j = 0; j < cardSuit.length; j++) {
//                 switch (cardSuit[j]){
//                     case ('diamond'):
//                         for (let k = 0; k < value.length; k++) {
//                             if (value[k] !== 'joker') {
//                                 cards.push(new Card(`${cardSuit[j]}`, `${value[k]}`, `${color[i]}`));
//                             }
//                         }
//                         break
//                     case ('clubs'):
//                         for (let k = 0; k < value.length; k++) {
//                             if (value[k] !== 'joker') {
//                                 cards.push(new Card(`${cardSuit[j]}`, `${value[k]}`, `${color[i]}`));
//                             }
//                         }
//                         break;
//                     default:
//                 }
//
//             }
//     }
// cards.push(new Card(" ", `${value[value.length-1]}`,`${color[i]}`))
//
// }
//
// console.log(cards);


// newArray = (arr, csuit, color1, valueCard) => {
//     for (let i = 0,j = 0; i < csuit.length; i++, j++) {
//
//         if (csuit[j] === 'spade' || csuit[j] === 'clubs') {
//             for (let j = 0; j < valueCard.length-1; j++) {
//                 arr.push({suit: cardSuit[i], value: valueCard[j], color: color1[1]})
//
//             }
//         } else {
//             for (let j = 0; j < valueCard.length-1; j++) {
//                 arr.push({suit: cardSuit[i], value: valueCard[j], color: color1[0]})
//
//             }
//         }
//     }
//     arr.push({suit: " ", value: valueCard[valueCard.length - 1], color: color1[1]})
//     arr.push({suit: " ", value: valueCard[valueCard.length - 1], color: color1[0]})
//     return cards = arr;
//
// }
// newArray(cards, cardSuit, color, value);
// console.log(cards);
//



// // - знайти піковий туз
//
// console.log(cards.find(value => value.suit === 'clubs' && value.value === 'ace'));
// // - всі шістк
// console.log(cards.filter(value => value.value === '6'));
// // - всі червоні карти
// console.log(cards.filter(value => value.color === 'red'))
// // - всі буби
// console.log(cards.filter(value => value.suit === 'diamond'));;
// // - всі трефи від 9 та більше
//
// console.log(cards.filter(value => value.suit === 'spade' && value.value >= "8" || value.value ==='10' && value.suit === 'clubs'));;
//
// //
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'
// // }





