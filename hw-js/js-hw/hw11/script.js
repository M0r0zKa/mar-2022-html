// // -створити форму з інпутами для name та age.
// //     При відправці форми записати об'єкт в localstorage
//
// const form = document.forms.f1;
// const btt = document.getElementById('button');
//
// btt.addEventListener('click', function () {
//     localStorage.setItem(`${form.inputOne.value}`, `${form.inputTwo.value}`);
//     form.inputOne.value = '';
//     form.inputTwo.value = '';
// })


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


const form = document.forms.f1;
const btt = document.getElementById('button');

btt.addEventListener('click', function () {
    const CarArray = {
        model: `${form.model.value}`,
        type: `${form.type.value}`,
        volume: `${form.volume.value}`,
    }
    console.log(CarArray);

    localStorage.setItem('key',JSON.stringify(CarArray))

})