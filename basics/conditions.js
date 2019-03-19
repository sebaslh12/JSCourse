let temp = 80
let isFrezzing = temp === 31

if (temp <= 32) {
    console.log('It is freezing outside')
}

if (temp >= 100) {
    console.log('It is way too hot outside');
}

//Lecture Challenge: If 7 or under print message about child discount, if 65 or older print message about senior discount
let age = 68
if (age <= 7) {
    console.log('Child discount at 15%');
}

if (age >= 65) {
    console.log('Senior discount at 40%');
}
