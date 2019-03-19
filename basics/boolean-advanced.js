let isAccountLocked = false
let userRole = 'admin'
if (isAccountLocked) {
    console.log('Account is locked');
} else if (userRole === 'admin') {
    console.log('Welcome admin');
} else {
    console.log('Welcome');
}


//Lecture challenge: Print if is freezing outside, is hot outside or it's pretty nice

let temp = 45

if (temp <= 32) {
    console.log('It is freezing outside');

} else if (temp >= 100) {
    console.log('It is hot outside');

} else {
    console.log('Go for it. It is pretty nice');

}