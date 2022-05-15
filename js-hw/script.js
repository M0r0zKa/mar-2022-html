// function calc(a, b, fn) {
// let res = fn(a, b);
// return res;
//
// }
//
// let num = calc(10, 20, function (c, d) {
//     return c + d;
//
//
// })
//
// console.log(num);


// function zp(a, accd, serd, accC, serC) {
//     let accttl, serttl;
//     accttl = a * (accd / 100);
//     document.write(`План оборот АСС ${accttl}`)
//     serttl = a * (serd / 100);
//     document.write(`План оборот СЕР ${serttl}`)
//     let zpacc = accttl * (accC / 100);
//     document.write(`ЗП АСС ${zpacc}`)
//     let zpser = accttl * (serC / 100);
//     document.write(`ЗП SER ${zpser}`)
//     let TTLzp = 7800 + zpacc + zpser;
//     document.write(`ЗП  ${TTLzp}`)
// }

function zp(a, accd, serd, accC, serC) {

    array = [];
    let accttl, serttl;
    accttl = a * (accd / 100);
    array.push(accttl);
    serttl = a * (serd / 100);
    array.push(serttl);
    let zpacc = (accttl * (accC / 100))*0.8;
    array.push(zpacc);
    let zpser = (serttl * (serC / 100))*0.8;
    array.push(zpser);
    let TTLzp = 7800 + zpacc + zpser;
    array.push(TTLzp);



    document.write(`<ol>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ol>`)
}

zp(prompt('TTL'), prompt('ACCdol'), prompt('SERdol'), prompt('ACC%'), prompt('Ser%'))