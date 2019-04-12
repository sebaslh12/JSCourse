// Callback

const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This is the data')
    }, 2000)
}

getDataCallback((err, data) => {
    if (err) {

    } else {
        console.log(data)
    }
})

// Promise

const getDataPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is the promise data')
        reject('Error')
    }, 2000)
})

const myPromise = getDataPromise()

myPromise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})