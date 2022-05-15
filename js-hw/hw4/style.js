// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function squareP(){
//     let result = ( a + b ) * 2
// return result
// }
// let a , b;
// a= 10
// b = 15
//
// let p = squareP(a,b)
// console.log(p);

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function squareS(r){
//
//     return  Math.PI * Math.pow(r, 2);
// }
//
// console.log(squareS(prompt('radius')));


// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function squareSc(h, r){
//
//     return 2 * Math.PI * r * (r + h);
//
// }
//
// console.log(squareSc(10, 4));


// // - створити функцію яка приймає масив та виводить кожен його елемент
//
//
// users = [10, 20, 30, 'i am']
//
// function iter(array) {
//
//     for (const item of array) {
//
//         console.log(item);
//
//     }
//
// }
//
// iter(users);


// function iterator(array){
//     for (const item of array) {
//  console.log(item)
//     }
//
// }
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// iterator(listOfItems)


// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function txt(name, text) {
//    document.write(`<p>${name} ${text}</p>`)
// }
//
// txt('Vlad', 'Moroz');


// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function items(){
//     document.write(`<ul>`);
//     document.write(`<li> ${txt}  </li>`);
//     document.write(`<li> ${txt} </li>`);
//     document.write(`<li> ${txt} </li>`);
//     document.write(`</ul>`);
// }
//
// let txt = "items"
//
// items();

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function items1() {
//     document.write(`<ul>`);
//     for (let i = 0; i < amountLI; i++) {
//
//         document.write(`<li> ${txt}</li>`);
//
//     }
//     document.write(`<ul>`);
// }
//
// let amountLI = 5;
// let txt = "I love Dnipro"
//
// items1();


// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let array = [1, 2, 'hi!', true];
//
// function data(arr) {
//     document.write(`<ul>`)
//     for (const item3 of arr) {
//
//         document.write(`<li>${item3}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
//
// data(array);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// // Для кожного об'єкту окремий блок.
//
// let arr = [
//         {
//             id:1,
//             name: "Vova",
//             age: 21
//
//         },
//     {
//         id:2,
//         name: "Sveta",
//         age: 23
//
//     },
//     {
//         id:3,
//         name: "Igor",
//         age: 30
//
//     }
//
// ]
//
// function obj(array){
//     for (const item of array) {
//         document.write(`<div>${item.id} ${item.name} ${item.age} </div>`);
//     }
//
// }
//
// obj(arr);

// // - створити функцію яка повертає найменьше число з масиву
//
// let numbers = [1, 2, 3, -20, 4, -4, -10]
// debugger;
// function minNum(array){
// let min = array[0];
//     for (const item of array) {
//         if(item<min){
//             min=item
//         }
//
//     }
//     return min;
// }
//
// console.log(minNum(numbers));

// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let numbs = [1, 2, 10];
//
// function foo(array){
//     let num = 0;
//     for (const item of array) {
//         num += item;
//
//     }
//     return num;
//
// }
//
// document.write(foo(numbs));
