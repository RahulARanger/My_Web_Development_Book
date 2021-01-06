const name_='Rahul'
const age=69 // having the constant speeds the program (due to the type is assigned statically)
const job='student'
const message='Hi! I am '+name_+', '+age+' years old.' // js automatically converts the variable/constants to the string during any string operations.
console.log(message);
console.log('-'.repeat(69))
const newmessage=`Hi! I am ${name_}, ${age} years old.` // ${variable/Constant}
console.log(newmessage)
console.log('-'.repeat(69))
console.log(`Hi! My Name is ${name_}`+'\n'+`While Writing this i was a ${job}`+'\n'+`And Nice Number is ${age}.`)
console.log('-'.repeat(69))
console.log(`Hi My Name is ${name_}.
While writing this i was a ${job}.
And Nice Number is ${age}.`)