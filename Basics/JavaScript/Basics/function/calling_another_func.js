function call_this_inside_other(){
    console.log('This function is called inside another function')
}
function first(){
    console.log('Calling a function')
    call_this_inside_other()
    console.log('End')
}
first()