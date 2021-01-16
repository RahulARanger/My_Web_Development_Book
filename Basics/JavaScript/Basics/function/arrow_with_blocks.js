const check= (age)=> {
    if (age>65) return `${age} is greater than 65 (already attained)`
    else return 65-age
}
console.log(check(69))
console.log(check(63))
