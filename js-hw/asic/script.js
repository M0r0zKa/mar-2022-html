function wokeUP(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time < 9) {
                resolve('breakfast')
                    console.log(`${resolve} and go to work!`)
            } else {
                reject (`shit! gotta go to work!`)
                console.log(reject);
            }
        }, 400)
    })
}
function goWork(wokeUP,timeRoad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const timeBeforeWork = 10 - (wokeUP + timeRoad)
            if (timeBeforeWork > 0) {
                resolve('coffee')
                console.log(`${resolve} and go to work!`)
            } else {
                reject (`shit! no coffee!`)
            }
        }, 324)
    })
}
// function goWork(wokeUP,timeRoad) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const timeBeforeWork = 10 - (wokeUP + timeRoad)
//             if (timeBeforeWork > 0) {
//                 resolve('coffee')
//                 console.log(`${resolve} and go to work!`)
//             } else {
//                 reject (`shit! no coffee!`)
//             }
//         }, 564)
//     })
// }



async function getProcessedData(url) {

