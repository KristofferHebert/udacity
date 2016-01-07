/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var $firstPasswordInput = document.querySelector('#first')
var $secondPasswordInput = document.querySelector('#second')
var submit = document.querySelector('#submit')

/*
You'll probably find this function useful...
 */

function minLength(value){
    return (value.length >= 16) ? true : false
}

function maxLength(value){
    return (value.length <= 100) ? true : false
}

function hasAUpperCaseLetter(value){
    return (value.match(/[A-Z]/g)) ? true : false
}

function hasALowercaseLetter(value){
    return (value.match(/[a-z]/g)) ? true : false
}

function hasASymbol(value){
    return (value.match(/[\!\@\#\$\%\^\&\*]/g)) ? true : false
}

function hasANumber(value){
    return (value.match(/[0-9]/g)) ? true : false
}

function passwordsMatch(selector1, selector2){
    return selector1.value === selector2.value
}


function validateValue(selector){
    if(!hasAUpperCaseLetter(selector.value)) return selector.setCustomValidity('Password needs to contain a Uppercase Letter')
    if(!hasALowercaseLetter(selector.value)) return selector.setCustomValidity('Password needs to contain a Lowercase Letter')
    if(!hasASymbol(selector.value)) return selector.setCustomValidity('Password needs to contain a Symbol')
    if(!hasANumber(selector.value)) return selector.setCustomValidity('Password needs to contain a Number')
    if(!hasASymbol(selector.value)) return selector.setCustomValidity('Password needs to contain a Symbol')
    if(!minLength(selector.value)) return selector.setCustomValidity('Password needs to at least 16 characters long')
    if(!maxLength(selector.value)) return selector.setCustomValidity('Password cannot exceed 100 characters')

    return selector.setCustomValidity('')

}

function handleSubmit(){

    validateValue($firstPasswordInput)
    validateValue($secondPasswordInput)

    if(!passwordsMatch($firstPasswordInput, $secondPasswordInput)){
        return $secondPasswordInput.setCustomValidity('Passwords do not match')
    }

}

submit.onclick = handleSubmit
