// Async functions: always return a promise, and resolve to the value that we explicitly return

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must provided')
    }, 2000)
})


const processData = async () => {
    const data = await getDataPromise(2)
    return data
}

processData().then((data) => {
    console.log('Data:', data)
}).catch((error) => {
    console.log('Error', error)
})