// Callback
// With callback nesting is the only way
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number')
            callback(undefined, num * 2)
        else
            callback('Number must provided')
    }, 2000)
}

getDataCallback(2, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
    }
})

// Promise: Promise pattern uses resolve and reject finish functions, only one of them will execute no matter how many times we execute them. It has a defined semantics that do not depends on changing parameters order and values

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must provided')
    }, 2000)
})

// Nesting promises
getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(data)
    }, (err) => {
        console.log(err)
    })
}, (error) => {
    console.log(error)
})

// Chaining promises, the promise inside the handler can be returned so we chain the sucess and the error handlers
getDataPromise('10').then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})