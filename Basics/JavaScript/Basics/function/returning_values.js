function add(a,b){
    return a+b
}
function default_return(){
    false // works like the pass in python (can also be any constants)
}
console.log(add(60,9))
console.log(default_return()) // default return value for any function is undefined
if (default_return()===undefined) console.log('This is the default return value for the function is js (undefined)')

