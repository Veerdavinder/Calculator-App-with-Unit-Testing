const operations = require('./operations')
const assert = require('assert')

// it('should return true',()=>{
//     assert.equal(true,true)
// })

it('correctly calculates the sum of 1 and 3',()=>{
    assert.equal(operations.add(1,3),4)
})

it('correctly calculates the subtract of 2 and 3',()=>{
    assert.equal(operations.sub(2,3),1)
})

it('correctly calculates the multiply of 15 and 2',()=>{
    assert.equal(operations.multiply(15,2),30)
})

it('correctly calculates the divide of 30 and 2',()=>{
    assert.equal(operations.divide(30,2),15)
})

it('successfully runs when two numbers are used',()=>{
    assert.equal(operations.validateNumbers(5,5),true)
})

it('indicates failure when two strings is used instead of numbers',()=>{
    assert.equal(operations.validateNumbers('sammy','samy'),false)
})

it('indicates failure when a string is used instead of a numbers',()=>{
    assert.equal(operations.validateNumbers('sammy',5),false)
})
