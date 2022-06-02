const divWrapper = document.createElement('div')
divWrapper.classList.add('divWrapper');
document.body.appendChild(divWrapper);
const divUserAll = document.createElement('div')
divUserAll.classList.add('divUserAll');
divWrapper.appendChild(divUserAll);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const userElement of users) {
            const divUser = document.createElement('div');
            divUser.classList.add('divUser');
            divUserAll.appendChild(divUser)
            const divUserInfo = document.createElement('div');
            divUserInfo.classList.add('divUserInfo');
            divUser.appendChild(divUserInfo)
            divUserInfo.innerHTML = `    
            <p class="info"><b>name</b> - ${userElement.name}</p>
            <p class="info"><b>UserID</b> - ${userElement.id}</p>`
            const divButton = document.createElement('div');
            divButton.classList.add('divButton')
            const Button = document.createElement('button');
            Button.setAttribute('id', `${userElement.id}`)
            Button.setAttribute('href', `.../user-details.html`)
            Button.innerText = 'User details'
            divUser.appendChild(divButton)
            divButton.appendChild(Button)
            divButton.onclick = (e) => {
                localStorage.setItem('user', JSON.stringify(userElement))
                window.open('user-details.html');
            }
        }
    })