//Lexical Scope (static scope), a variable defined in one part of the code might not be globally defined

//Global Scope - Defined  of all code blocks
//Local Scope - Defined inside a code block

//In a scope you can access variables defined in that scope, or in any parent/ancestors scopes

//Global scope (varOne)
    //Local scope (varTwo)
        //Local scope (varFour)
    //Local scope (varThree)
let varOne = 'varOne' 

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
    if(true){
        let varFour = 'varFour'
        console.log(varTwo) //Ancestor scope variable
    }
}

if(true){
    let varThree = 'varThree'
}
