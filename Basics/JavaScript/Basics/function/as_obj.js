function test_this(a,b){
    console.log(a,b)
    return a*b
}
const another_one= function (a,b){ // note that we can skip the name of the function in this method
    return a*b
}
const a=test_this
console.log(a(3,23))
console.log(a)


console.log(another_one(23,3))