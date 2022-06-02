const get = localStorage.getItem('user')
const userObj = JSON.parse(get);
const divBoss = document.createElement('div')
divBoss.classList.add('divBoss')
document.body.appendChild(divBoss);
const divUserInfo = document.createElement('div')
divUserInfo.classList.add('divUserInfo')
divBoss.appendChild(divUserInfo);
function iterator(arr) {
    for (const Key in arr) {
        if (typeof arr[Key] === 'object') {
            iterator(arr[Key])
        } else {
            const pElement = document.createElement('p')
            divUserInfo.appendChild(pElement)
            pElement.innerHTML = `<b>${Key}</b> - ${arr[Key]}`;
        }
    }
}
iterator(userObj)
fetch(`https://jsonplaceholder.typicode.com/users/${userObj.id}/posts`)
    .then(value => value.json())
    .then(post => {
        const button = document.createElement('button')
        button.innerText = 'post of current user'
        const divPosts = document.createElement('div')
        divUserInfo.append(divPosts)
        divBoss.append(button)
        button.onclick = () => {
            for (const arr of post) {
                const aUrlElement = document.createElement('div')
                aUrlElement.classList.add('aUrlElement')
                divBoss.appendChild(aUrlElement)
                aUrlElement.innerHTML = `<p>${arr.title}</p>`
                aUrlElement.onclick = () =>{
                    localStorage.setItem('postInfo', JSON.stringify(arr))
                    window.open('post-details.html');
                }
                button.disabled = true
            }
        }
    })