// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//     }
// }
//
//
// const userArr = [];
// for (let i = 0; i < 10; i++) {
//     userArr.push(new User(i+1, `Name${i+1}`, 'SurName', 'email@gmail.com', '+380996680546'))
// }
// console.log(userArr);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let usersId = userArr.filter(value => value.id % 2 === 0);
// console.log(usersId);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let usersSort = userArr.sort((a,b) => a.id - b.id);
// console.log(usersSort);

// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//         this.order = order
//     }
//
// }
//
// // створити пустий масив, наповнити його 10 об'єктами Client
//
//
// let array = [];
// array.push(new Client(1, 'Vasya', 'Koval', 'vasya.koval@gmail.com', '+380995650235', ['vodka', 'pivo']));
// array.push(new Client(2, 'Vasya', 'Koval', 'vasya.koval@gmail.com', '+380995650235', ['vodka', 'pivo']));
// array.push(new Client(3, 'Vasya', 'Koval', 'vasya.koval@gmail.com', '+380995650235', ['vodka', 'pivo']));
// array.push(new Client(4, 'Vasya', 'Koval', 'vasya.koval@gmail.com', '+380995650235', ['vodka', 'pivo']));
// array.push(new Client(5, 'Vasya', 'Koval', 'vasya.koval@gmail.com', '+380995650235', ['vodka', 'pivo']));
// array.push(new Client(6, 'Vasya', 'Koval', 'vasya.koval@gmail.com', '+380995650235', ['vodka', 'pivo', 'meat']));
// array.push(new Client(7, 'Vasya', 'Koval', 'vasya.koval@gmail.com', '+380995650235', ['vodka', 'pivo']));
// array.push(new Client(8, 'Vasya', 'Koval', 'vasya.koval@gmail.com', '+380995650235', ['vodka', 'pivo']));
// array.push(new Client(9, 'Vasya', 'Koval', 'vasya.koval@gmail.com', '+380995650235', ['vodka', 'pivo']));
// array.push(new Client(10, 'Vasya', 'Koval', 'vasya.koval@gmail.com', '+380995650235', ['vodka', 'pivo']));
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sortClientOrder = array.sort((a,b) => b.order.length - a.order.length);
// console.log(sortClientOrder);


// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, poducer, year, maxspeed, volume) {
//
//     this.model = model;
//     this.poducer = poducer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive = function (){
//         // console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     this.info = function (){
//         for (const item in this) {
//             // console.log(`${item} - ${this[item]}`)
//             // console.log(this);
//         }
//     }
//     this.increaseMaxSpeed =function (newSpeed){
//         this.maxspeed +=newSpeed;
//     }
//     this.changeYear = function (changeYear) {
//         this.year = changeYear;
//     }
//     this.addDriver = function (driver) {
//         this.addDriver = driver;
//     }
// }
//
// let newCar = new Car('GLS', 'Mercedes', '2010', 200, '3l');
// // console.log(newCar);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(30);
// newCar.changeYear(2015);
// newCar.addDriver = 'Vlad';
// console.log(newCar);


// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// class Car {
//     constructor(model, poducer, year, maxspeed, volume) {
//
//         this.model = model
//         this.poducer = poducer
//         this.year = year
//         this.maxspeed = maxspeed
//         this.volume = volume
//         this.drive = function (){
//             console.log(`їдемо зі швидкістю ${maxspeed} на годину`);
//         }
//         this.info = function (){
//             for (const item in this) {
//                    // console.log(`${item} - ${this[item]}`)
//                 // console.log(this);
//             }
//         }
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxspeed += newSpeed;
//         }
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         }
//         this.addDriver = function (driver) {
//             this.addDriver = driver;
//         }
//     }
// }
//
// let newCar = new Car('M5', 'BMW', 2018, 280, 2.5)
// console.log(newCar);
// newCar.drive()
// newCar.info()
// newCar.increaseMaxSpeed(100);
// newCar.changeYear(2022);
// newCar.addDriver = 'Vlad';
// console.log(newCar);

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Girl {
    constructor(name, age, sizeFoot) {
        this.name = name
        this.age = age
        this.sizeFoot = sizeFoot
    }
}

let arrGirl = [
    new Girl('Sveta', 18, 38),
    new Girl('Lera', 19, 36),
    new Girl('Anna', 20, 35),
    new Girl('Sveta', 18, 40),
    new Girl('Lera', 19, 34),
    new Girl('Anna', 20, 36.5),
    new Girl('Sveta', 18, 39.5),
    new Girl('Lera', 19, 40.5),
    new Girl('Anna', 20, 39),
    new Girl('Anna', 20, 35.5)
];
// console.log(arrGirl);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, sizeFoot) {
        this.name = name
        this.age = age
        this.sizeFoot = sizeFoot
    }
}

let newPrince = new Prince('Vlad', 25, 38);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let find = (arr, prince) => {
    for (const girl of arr) {
        if (girl.sizeFoot === prince.sizeFoot) {
            return girl.name
        }
    }
}

console.log(find(arrGirl, newPrince));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findErow = arrGirl.find((value) => {
   return  value.sizeFoot === newPrince.sizeFoot
});
let test =(arr) => {
    let key = [];
    let data = []
    for (const item in arr) {
        key.push(item)
        data.unshift(`${arr[item]}`)

    }
    console.log(data);
    return key;
}
console.log(test(findErow));
