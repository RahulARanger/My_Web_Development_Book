// This are some predefined functions to convert the types of the  data
console.log(Number('69')) 
console.log(String(69420))
console.log(boolean(1))
console.log(true)
console.log(false)

// ! whenever Number() fails it returns Nan (illegal Number type) (can be detected by isNaN())
const convertthis='false'
if (isNaN(Number(convertthis))){
    console.log(`Cannot Convert ${convertthis} to Number type`)
}
else{
    console.log(`Successfully Converted ${convertthis} to ${Number(convertthis)}`)
}