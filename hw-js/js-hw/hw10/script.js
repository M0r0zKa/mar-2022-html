// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
//     let divElement = document.createElement('div');
//     divElement.setAttribute('id', 'text')
//     divElement.innerText = 'Hi World!';
//
//
// let buttonElement = document.createElement('button')
// buttonElement.innerText = 'Del';
//
// document.body.append(divElement, buttonElement)
//
// buttonElement.onclick = (e) =>{
//     divElement.remove()
//
// }


// //     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// let inputElement = document.createElement('input');
// inputElement.type = 'number';
// let buttonElement = document.createElement('button');
// buttonElement.innerText = 'ok';
// let divElement = document.createElement('div');
// document.body.append(inputElement, buttonElement, divElement)
// divElement.innerText = 'Вход только +18'
// buttonElement.onclick=(e)=>{
//     if (inputElement.value >= 18){
//         divElement.innerText = 'Заход, тебе есть 18!'
//     }else if(inputElement.value < 18){
//         divElement.innerText = 'Нужно ещё подрости, тебе нет 18!'
// }
// }


// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// const button = document.getElementById('bttClic');
// const formsF1 = document.forms.f1
// const formsF2 = document.forms.f2
// const users = [];
// button.addEventListener('click', function () {
//     for (const formsF1Element of formsF1) {
//         console.log(formsF1Element.value);
//     }
//     for (const formsF2Element of formsF2) {
//         console.log(formsF2Element.value);
//         formsF2Element.value = ''
//     }
// })

// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
//
// const inpuTr = document.createElement('input')
// const inpuTd = document.createElement('input')
// const inpuText = document.createElement('input')
// const btt = document.createElement('button')
// btt.innerText = 'Clic!'
//
// document.body.append(inpuTr, inpuTd, inpuText, btt)
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// btt.addEventListener('click', function () {
//
//     const tr = inpuTr.value;
//     const td = inpuTd.value;
//     const text = inpuText.value;
//
//     function NewTables(tre, tde, texte, users) {
//         const table = document.createElement('table')
//         document.body.appendChild(table)
//         for (let i = 0; i < tre; i++) {
//             const arr = users[i]
//             let tr = document.createElement('tr')
//             table.appendChild(tr)
//             for (const userKey in arr) {
//                 let td = document.createElement('td')
//                 td.innerText = `${arr[userKey]}`
//                 td.style.border = '1px solid red';
//                 tr.appendChild(td);
//             }
//         }
//     }
//     NewTables(tr, td, text, users)
// })