// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :

// -- отримує текст з параграфа з id "content"
//
//console.log(document.getElementById('content').innerText);

// -- отримує текст з блоку з id "rules"
//
//console.log(document.getElementById('rules').innerHTML);

// -- замініть текст параграфа з id 'content' на будь-який інший
// let txt = 'My name Vlad'
// let idContent = document.getElementById('content');
// idContent.textContent = `<h1>${txt}</h1>`;
// idContent.innerText = `<h1>${txt}</h1>`;
// idContent.innerHTML = `<h1>${txt}</h1>`;

// -- замініть текст параграфа з id 'rules' на будь-який інший
//
// let txtRules = document.getElementById('rules');
// txtRules.textContent = 'MOROZ'

// -- змініть кожному елементу колір фону на червоний
//
// document.body.style.background = 'red'
//
// let child = document.body.children
//
// for (const childElement of child) {
//     childElement.style.background = 'red';
//
// }


// // -- змініть кожному елементу колір тексту на синій
//
// document.body.style.color = 'blue'

// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// console.log(document.getElementById('rules').classList);


// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
//
// let classFcRul = document.getElementsByClassName('fc_rules');
// for (const classFcRulElement of classFcRul) {
//     classFcRulElement.style.color = 'red';
//
// }


// Взяти файл template_2.html та працювати в ньому

// 1) Напишіть код, який :

// a) додає клас з назвою групи, елементу з ід main_header

// // b) робить шириниу елементу ul 400px
//
// let ulItems = document.getElementsByTagName('ul');
// for (const ulItem of ulItems) {
//     ulItem.style.width = '400px';
//
// }

// // c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// let classLinkList = document.getElementsByClassName('linkList');
//
// for (const classLinkListElement of classLinkList) {
//     classLinkListElement.style.width = '50%';
//
// }

// // d) отримує текст який зберігається в елементі з класом listElement2
//
// let  txtclassList2 = document.getElementsByClassName('listElement2');
//
// for (const txtclassList2Element of txtclassList2) {
//     console.log(txtclassList2Element.textContent);
// }

// // e) отримує всі елементи li та змінює ім колір фону на сірий
//
// let elementLi = document.getElementsByTagName('li');
// for (const elementLiElement of elementLi) {
//     elementLiElement.style.background = 'grey';
//
// }

// // f) отримує всі елементи 'a' та додає їм клас anchor
//
// let itemA = document.getElementsByTagName('a');
//
// for (const itemAElement of itemA) {
//     itemAElement.classList.add('anchor');
// }

// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//
// let aItems = document.getElementsByTagName('a');
//
// for (const aItem of aItems) {
//     if (aItem.textContent === 'link3') {
//         aItem.style.fontSize = '40px';
//     }
//
// }

// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// let aItems = document.getElementsByTagName('a');
//
// for (const aItem of aItems){
//     aItem.classList.add(`element_${aItem.textContent}`);
// }

// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let subHeaderElements = document.getElementsByClassName('sub-header');
// let color = prompt('Color');
// for (const item of subHeaderElements){
//     item.style.background = color;
// }

// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//
// let subHeaderElements = document.getElementsByClassName('sub-header');
//
// for (const subHeaderElement of subHeaderElements) {
//     if (subHeaderElement.textContent === 'content 2 segment'){
//         subHeaderElement.style.color = prompt('Color');
//     }
// }

// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// let content1 = document.getElementsByClassName('content_1');
// for (const content1Element of content1) {
//     content1Element.textContent = prompt('Text');
// }

// l) отримати елементи p та змінити їм padding на 20px


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример mar-2022)


let classALL = document.body.children;


let classArrr = (arr) => {
    let children = arr.children;
    // console.log(children);
    let arrayClass = [];
    let i = 0;

    for (const child of children) {
        i++
        classArrr(child);
        arrayClass.push({
                object : `${child.tagName}`,
                clas: `${child.classList}`,
                id : `${i}`
            });
    }
    return arrayClass
}
let ar = classArrr(document.body)
for (const classArrrElement of ar) {
    console.log(classArrrElement);
}


