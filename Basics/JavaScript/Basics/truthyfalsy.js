// falsy values
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(undefined))
console.log(Boolean(''))

// truthy values
console.log(Boolean('Some Random Text'))
console.log(Boolean(1))
console.log(Boolean({}))
console.log(Boolean(324))

const balance=0
if (balance){
    console.log('Improve This.')
}
else{
    console.log('Save money! Avoid having 0 balance.')
}