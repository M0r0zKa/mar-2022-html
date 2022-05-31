// // 1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// // Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// // Для кожного елементу свій блок div.post
// // Всі характеристики повинні мати свої блоки всередені div.post
// // https://jsonplaceholder.typicode.com/posts
//
// const divPosts = document.getElementById('posts');
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         for (const post of posts) {
//             let divElement = document.createElement('div');
//             let ulElement = document.createElement('ul')
//             divElement.classList.add('post')
//
//             for (const keyPost in post) {
//                 let liElement = document.createElement('li')
//                 liElement.innerHTML = `<li>${keyPost} - ${post[keyPost]}</li>`
//                 ulElement.appendChild(liElement)
//             }
//             divPosts.appendChild(divElement)
//             divElement.appendChild(ulElement)
//
//         }
//
//     })


// //     2.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// //     Для кожного елементу свій блок div.comment
// // Всі характеристики повинні мати свої блоки всередені div.comment
// // https://jsonplaceholder.typicode.com/comments
//
// const comentsDiv = document.getElementById('comets');
//
// fetch(`https://jsonplaceholder.typicode.com/comments`)
//     .then(value => value.json())
//     .then(comments => {
//         for (const comment of comments) {
//             let commentDiv = document.createElement('div')
//             comentsDiv.appendChild(commentDiv)
//             for (const commentKey in comment) {
//                 let elementDiv = document.createElement('div')
//                 elementDiv.innerHTML = `<b>${commentKey}</b> - ${comment[commentKey]}`
//                 commentDiv.appendChild(elementDiv);
//             }
//             commentDiv.style.border = '1px solid black'
//             commentDiv.style.margin = '2px'
//         }
//     })


// const divWraper = document.createElement('div');
// document.body.appendChild(divWraper)
// divWraper.setAttribute('class', 'wrap');
//
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(post => {
//         for (const postElement of post) {
//             let divPost = document.createElement('div')
//             divPost.setAttribute('class', 'inner');
//             const {userId, id, title, body} = postElement;
//             divPost.innerHTML = `
//         <h2>uesrID</h2>
//         <p>${userId}</p>
//         <h2>id</h2>
//         <p>${id}</p>
//         <h2>title</h2>
//         <p>${title}</p>
//         <p>Body: ${body}</p>`
//             const button = document.createElement('button')
//             button.innerText = 'Open'
//             const divComments = document.createElement('div')
//             divPost.appendChild(divComments);
//             button.onclick = () =>{
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
//                     .then(value => value.json())
//                     .then(comments =>{
//                         for (const comment of comments) {
//                             const ul = document.createElement('ul')
//                             for(const commentiD in comment) {
//                                 const li = document.createElement('li')
//                                 li.innerHTML = `
//                             <p>${commentiD} - ${comment[commentiD]}</p>
//                             `
//                                 ul.appendChild(li)
//                             }
//                             divComments.appendChild(ul)
//                             button.disabled = 'true'
//                         }
//                     })
//
//             }
//             const buttonExit = document.createElement('button')
//             buttonExit.innerText = 'Exit'
//             buttonExit.onclick = () =>{
//                 divComments.innerHTML = ""
//                 button.disabled = 0
//             }
//             divWraper.append(divPost);
//             divPost.append(button,buttonExit)
//         }
//     })