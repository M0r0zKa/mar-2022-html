const get = localStorage.getItem('postInfo')
const postObj = JSON.parse(get);
const divBoss = document.createElement('div')
divBoss.classList.add('divBoss')
document.body.appendChild(divBoss);
const divPostInfo = document.createElement('div')
divPostInfo.classList.add('divPostInfo')
divBoss.appendChild(divPostInfo);
const divPostComments = document.createElement('div')
divPostComments.classList.add('divPostComments')
divBoss.appendChild(divPostComments);
const body = document.createElement('div')
body.classList.add('body')
const info = document.createElement('div')
info.classList.add('info')
divPostInfo.append(info, body);
for (const Key in postObj) {
    if (Key !== 'body') {
        const p = document.createElement('p')
        p.innerHTML = ` <b>${Key}</b> ${postObj[Key]}`
        info.appendChild(p)
    } else {
        const p = document.createElement('p')
        p.innerHTML = `<div class="title"><b>${Key}</b></div>${postObj[Key]}</div>`
        body.appendChild(p)
    }
}
fetch(`https://jsonplaceholder.typicode.com/posts/${postObj.id}/comments`)
    .then(value => value.json())
    .then(comment => {
        for (const commentElement of comment) {
            console.log(commentElement);
            const divPostComment = document.createElement('div')
            divPostComment.classList.add('divPostComment')
            divPostComments.appendChild(divPostComment);
            const {postId, id, name, email, body} = commentElement;
            divPostComment.innerHTML = `
            <div class="post-div">  <div><b>postId</b> ${postId}</div>
            <div><b>id</b>: ${id}</div>
           <div><b>name</b> - ${name}</div>
            <div><b>email</b> - ${email}</p></div></div>
           <div class="p-div"><p><b>body</b></p><p>${body}</p></div>`
        }
    })