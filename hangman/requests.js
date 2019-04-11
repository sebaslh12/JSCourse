// Callback pattern - Async callback
const getPuzzle = (callback) => {

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
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
    request.send()
}