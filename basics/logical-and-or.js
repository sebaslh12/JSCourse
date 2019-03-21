let temp = 55

//Logical And operator

if (temp >= 65 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) { //Logical Or operator
    console.log('Do not go outside!');
} else {
    console.log('Do what you want');
}

//Lecture Challenge: Restaurant reservation.

let isGuestOneVegan = false
let isGuestTwoVegan = false

//Both vegan only vegan food. At least one is vegan then some of both menus. None of them is vegan offer anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan food')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up vegan options')
} else {
    console.log('Offer up anything on the menu')
}