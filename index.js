const prom = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let isOk = true;
        if (isOk) {
            resolve('OK');
        } else {
            reject('Wrong 0')
        }
    }, 2000)
})

const prom2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let isOk = true;
        if (isOk) {
            resolve('OK');
        } else {
            reject('Wrong 1')
        }
    }, 2000)
})


/*Promise.all([prom, prom2]).then(res => console.log(res)).catch(err => console.log(err))*/

/*
const singleProm = () => new Promise(function (resolve, reject) {
    setTimeout(() => {
        let isOk = false;
        if (isOk) {
            resolve('Ok')
        } else {
            reject('Wrong')
        }
    }, 3000)
})
*/
/* singleProm().then(res => console.log(res)).catch(err => console.log(err)) */

const testProm = async () => {
    try {
        const resp = await Promise.all([prom, prom2])
        console.log(resp)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('here')
    }
}

testProm()