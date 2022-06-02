// for (let i = 0; i < 10; i++){
//     document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nihil.</div>`);
// }
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>item ${i}</div>`);
// }

// i=0;
// while (i < 20){
//     document.write(`<h1> Lorem ipsum dolor. </h1>`);
//     i++;
// }

// i=0;
// while (i<20){
//     document.write(`<h1>Lorem ipsum dolor sit amet ${i} </h1> `)
//     i++
// }

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// // <ul>
// //     <li>ITEM OF ARRAY</li>
// //     <!--
// //         і тд інші об'єкти масиву
// //          ...
// //          ...
// //          ...
// //     -->
// // </ul>
//
// document.write(`<ul>`);
//
// for (let i = 0; i < listOfItems.length; i++){
//     document.write(`<li>${listOfItems[i]}</li>`)
// }
//
// document.write(`</ul>`);

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (const product of products) {
//     document.write(`<div class="product-card">
//         <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
//         <img src="${product.image}" alt="" class="product-image">
// </div>
// `)
// }

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

// document.write(`<ul>`);
//
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (user.status) {
//         document.write(`<li>${users[i].name} ${users[i].age} ${users[i].status}</li>`);
//     }
// }
// document.write(`</ul>`)
//
// document.write(`<ul>`)
// i = 0
// for (const user of users) {
//     if (!user.status) {
//         document.write(`<li>${users[i].name} ${users[i].age} ${users[i].status}</li>`);
//     }
//     i++
// }
// document.write(`</ul>`)

// document.write(`<ul>`);
// i = 0;
// for (let j = 0; j < users.length; j++) {
//     const user = users[j];
//     if (user.age>=30) {
//         document.write(`<li>${users[j].name} ${users[j].age} ${users[j].status}</li>`);
//     }
//
// }
// document.write(`</ul>`);

