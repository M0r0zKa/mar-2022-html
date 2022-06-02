/*
- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log , alert, document.write*/


// /*let h = 'hello'
// let o = 'owu'
// let c = 'com'
// let u = 'ua'
// let n1 = 1
// let n2 = 10
// let n3 = -999
// let n4 = 123
// let n5 = 3.14
// let n6 = 2.7
// let n7 = 16
// let bool1 = true
// let bool2 = false
//
// console.log(h)
// console.log(o)
// console.log(c)
// console.log(u)
// console.log(n1)
// console.log(n2)
// console.log(n3)
// console.log(n4)
// console.log(n5)
// console.log(n6)
// console.log(n7)
// console.log(bool1)
// console.log(bool2)
//
// alert(h + ' ' + o + "." + c + '.' + u)
//
//
// console.log(document.write(h + ' ' + o + "." + c + '.' + u))*/

/*- Створити об'єкт book з наступними полями :
назва, (тип string)
кількість сторінок (числовий тип),
жанр (string)*/

// {
//     let book = {
//         title: 'The Master and Margarita',
//         pages: 432,
//         genre: 'novel',
//     }
//     console.log(book)
//     console.log(book.genre)
//     console.log(book.pages)
//     console.log(book.title);
// }

//     - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)

// let book = {
//     title: 'title',
//     pages: 384,
//     genre: 'novel',
//     authors: [
//         'name Firstname',
//         'Vova Pupka',
//         'Mustachioed Сockroach',
//     ]
// }
// console.log(book);
// console.log(book.title);
// console.log(book.pages);
// console.log(book.genre);
// console.log(book.authors);
// console.log(book.authors[0]);
// console.log(book.authors[1]);
// console.log(book.authors[2]);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

    let firstName = 'Moroz'
    let middleName = 'Vladyslav'
    let lastName = 'Olegovich'

// let person = firstName + ' ' + middleName+ ' ' + lastName

    let person = `${firstName} ${middleName} ${lastName}`
    console.log(person);



// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

 firstName = prompt('firstName')
 lastName = prompt('lastName')
let Age = prompt('Age')

console.log(`${firstName} ${lastName} ${Age}`)


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
