function print_this(msg1,msg2='default'){
    console.log(`Message given are ${(msg2=='default')? msg1: `${msg1} and ${msg2}`}`)
}
print_this('Message 1')
print_this('Message 1','Message 2')