// Callback pattern - Async callback
/* const getPuzzle = (wordCount, callback) => {

    // HTTP (Hypertext Transfer Protocol)
    // Request - What we want
    // Response - What was actually done
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status == 200) {
            const data = JSON.parse(e.target.responseText)
            // Callback usage
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
} */

/* const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status == 200) {
            const data = JSON.parse(e.target.responseText)
            // Callback usage
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}) */

/* const getPuzzleSync = () => {
    const request = new XMLHttpRequest()
    // Second parameter is an async flag, by default is true, deprecated
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3', false)
    request.send()
    if (request.readyState === 4 && request.status == 200) {
        const data = JSON.parse(request.responseText)
        return data.puzzle
    } else if (request.readyState === 4) {
        throw new Error('Things did not go well')
    }
} */

const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch de puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}



const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=cfa868b0263367', {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch de puzzle')
        }
    }).then((data) => {
        return `You are currently in ${data.city}, ${data.region} ${data.country}`
    })
}