//Undefined variable
let name

if (name === undefined) {
    console.log('Please provided a name');
} else {
    console.log(name);
}

//Undefined for function arguments
let square = function (num) {
    console.log(num);
}

//Undefined as function return default value
let result = square();
console.log(result);

//Null as asigned value
//Undefined is ment to be a language default while null is an explicit declaration
let age = 24

age = null

console.log(age);
