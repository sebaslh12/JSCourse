//Global scope (name)
    //Local scope ()
        //Local scope 
    //Local scope 

//Variable shadowing its when a variable in a local scope uses it's value instead of a variable in a parent scope.
//let name = 'Sebastian'

if (true) {
    //let name = 'Mike'
    //console.log(name)
    if (true) {
        //Leaked global when we assigned a value to a variable that was never explicitly defined. So a new global variable is created
        name = 'Jen'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}