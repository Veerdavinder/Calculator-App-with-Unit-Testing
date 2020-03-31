const add = (x,y) =>  +x + +y

const sub = (x,y) => {return Math.abs(x-y)}

const multiply = (x,y) => {
    return x * y
}

const divide = (x,y) =>{
    return x/y
}

const validateNumbers = (x,y) =>{
    if(isNaN(x) || isNaN(y)){
        return false
    }
    return true
}
module.exports = {add,sub,multiply,divide,validateNumbers}