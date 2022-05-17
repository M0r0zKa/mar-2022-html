// // Все робити за допомоги js.
//
// // - створити блок,
// //     - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
//
// let divBlock;
// divBlock = document.createElement('div');
// divBlock.classList.add('wrap', 'collapse', 'alpha', 'beta');
// divBlock.style.background = 'silver';
// divBlock.style.color = 'red';
// divBlock.style.fontSize = '20px';
// document.body.append(divBlock);
//
//
// const clon = divBlock.cloneNode(true);
// document.body.appendChild(clon);

// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
//
// const array = ['Main', 'Products', 'About us', 'Contacts'];
//
//
// for (const item of array) {
//     const ulItems = document.getElementsByClassName('menu')
//     const liArray = document.createElement('li');
//     liArray.textContent = `${item}`
//     document.body.append(liArray)
//
// }


// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
//
// for (const itemArr of coursesAndDurationArray) {
//
//     let divCre = document.createElement('div');
//
//
//     divCre.innerHTML =
//         `
//
//         <h2>${itemArr.title}</h2>
//         <p>${itemArr.monthDuration}</p>
//         <hr/>
//         `
//     document.body.append(divCre)
// }


// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
//
// for (const item of coursesAndDurationArray) {
//     const divElement = document.createElement('div');
//     divElement.classList = 'item';
//     document.body.append(divElement);
//     divElement.innerHTML = `
//     <h1 class='heading'>${item.title}</h1>
//     <p class='description'>${item.monthDuration}</p>
//     `
// }

///////////////////////////////////////////////////////////
// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// // Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
//
//
// for (const item of simpsons) {
//    for (const item2 in item) {
//        const sips = document.createElement('div');
//        if (item2 === 'photo') {
//            const imgItem = document.createElement('img');
//            imgItem.src = `${item[item2]}`;
//            document.body.append(imgItem);
//        }
//        if (item2 !== 'photo') {
//            const divItemObj = document.createElement('div');
//            divItemObj.innerText = `${item[item2]}`;
//            document.body.append(divItemObj);
//            divItemObj.classList.add('member')
//        }
//    }
// }


// // - взяти попередній масив з сімпсонами.
// //     Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу створити окремий блок, та помістити його у div.member
// const divSimpson = document.createElement('div');
// divSimpson.classList.add('member');
// for (const simpson of simpsons) {
//        for (const item2 in simpson) {
//        const sips = document.createElement('div');
//        if (item2 === 'photo') {
//            const imgItem = document.createElement('img');
//            imgItem.src = `${simpson[item2]}`;
//            divSimpson.append(imgItem)
//        }
//        if (item2 !== 'photo') {
//            const divItemObj = document.createElement('div');
//            divItemObj.innerText = `${simpson[item2]}`;
//            document.body.append(divItemObj);
//            divSimpson.append(divItemObj);
//        }
//            document.body.append(divSimpson);
//    }
// }
// console.log(document.body);


// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html',
    'css',
    'js',
    'mysql',
    'mongodb',
    'react',
    'angular',
    'aws',
    'docker',
    'git',
    'node.js',
    'python',
    'java']
},
    {title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },{title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },{title: '1',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },{title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },{title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },{title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },{title: '2',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },{title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },{title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },{title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },{title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },

    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок,
// блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png


document.body.style.margin = 0;
const divGod = document.createElement('div')
divGod.style.width = '1920px';
divGod.style.height = '1080px';
document.body.append(divGod);
divGod.style.display = 'flex';
divGod.style.flexWrap = 'wrap'
for (const divGodElement of coursesArray) {
    const divElement = document.createElement('div');
    divElement.style.width = '33%';
    divElement.style.height = '50%';
    divElement.style.margin = '3px';
    divElement.style.border = 'solid';
    divElement.style.display = 'flex';
    divElement.style.flexWrap = 'wrap'
    divElement.classList.add('classs')
    divGod.append(divElement);
    const titl = document.createElement('div');
    titl.style.height = '15%';
    titl.style.width = '95%';
    titl.style.border = 'solid red'
    titl.style.display = 'flex'
    titl.style.margin = '3px';
    titl.style.alignItems = 'center'
    titl.style.justifyContent = 'center'
    const divDuration = document.createElement('div');
    divDuration.style.height = '15%';
    divDuration.style.width = '95%';
    divDuration.style.border = 'solid red';
    divDuration.style.display = 'flex'
    divDuration.style.flexWrap = 'wrap'
    divDuration.style.justifyContent = 'space-between'
    divDuration.style.margin = '3px';
    divDuration.style.alignItems = 'center'
    const divMonthDuration = document.createElement('div');
    divMonthDuration.style.width = '23%';
    divMonthDuration.style.height = '90%';
    divMonthDuration.style.display = 'flex'
    divMonthDuration.style.alignItems = 'center'
    divMonthDuration.style.justifyContent = 'center'
    divMonthDuration.style.border = 'solid blue'
    divMonthDuration.style.marginLeft = '5px';
    const divHourDuration = document.createElement('div');
    divHourDuration.style.width = '73%';
    divHourDuration.style.height = '90%';
    divHourDuration.style.display = 'flex'
    divHourDuration.style.alignItems = 'center'
    divHourDuration.style.justifyContent = 'center'
    divHourDuration.style.border = 'solid blue'
    divHourDuration.style.marginRight = '5px';
    divDuration.append(divMonthDuration, divHourDuration);
    const divModules = document.createElement('div')
    divModules.style.height = '65%';
    divModules.style.width = '95%';
    divModules.style.border = 'solid red'
    divModules.style.display = 'flex'
    divModules.style.flexWrap = 'wrap'
    divModules.style.justifyContent = 'space-between'
    divModules.style.margin = '3px';
    divElement.append(titl, divDuration, divModules)
    const ulModules = document.createElement('ul');
    ulModules.style.border = 'solid blue'
    ulModules.style.margin = '3px';

    divModules.append(ulModules)
    titl.innerHTML = `<h1>${divGodElement.title}</h1>`
    divMonthDuration.innerHTML = `<h2>${divGodElement.monthDuration}</h2>`
    divHourDuration.innerHTML = `<h2>${divGodElement.hourDuration}</h2>`
    const modulesItar = divGodElement.modules;
    for (let i = 0; i < modulesItar.length; i++) {
        const ulModule = modulesItar[i];
        const liModules = document.createElement('li');
        liModules.innerHTML = `<a href="https://www.google.com/search?q=${ulModule}" target="_blank" >${ulModule}</a>`
        ulModules.append(liModules)
    }

}


