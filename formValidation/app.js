'use strict';

var $firstPasswordInput = document.querySelector('#first')
var $secondPasswordInput = document.querySelector('#second')
var submit = document.querySelector('#submit')

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

function hasIllegalChar(value){
    return value.match(/^[A-Za-z0-9\!\@\#\$\%\^\&\*]+$/g) ? true : false

}

function validateValue(selector){
    if(!minLength(selector.value)) return selector.setCustomValidity('Password needs to at least 16 characters long')
    if(!maxLength(selector.value)) return selector.setCustomValidity('Password cannot exceed 100 characters')
    if(!hasASymbol(selector.value)) return selector.setCustomValidity('Password needs to contain a Symbol')
    if(!hasANumber(selector.value)) return selector.setCustomValidity('Password needs to contain a Number')
    if(!hasALowercaseLetter(selector.value)) return selector.setCustomValidity('Password needs to contain a Lowercase Letter')
    if(!hasAUpperCaseLetter(selector.value)) return selector.setCustomValidity('Password needs to contain a Uppercase Letter')
    if(!hasIllegalChar(selector.value)) return selector.setCustomValidity('Password cannot contain a illegal character')

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
