function first() {
    console.log('first');
}
function second() {
    console.log('second');
}
function third() {
    console.log('third');
}
setTimeout(first,0); // Invoke `second` after 0ms
setTimeout(second, 1000); // Invoke `second` after 1000ms
third();