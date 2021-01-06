const markweight=78
const markheight=1.69
const johnweight=92
const johnheight=1.95
const BMIm=markweight/markheight**2
const BMIj=johnweight/johnheight**2
if (BMIm>BMIj){
    console.log(`Mark of ${markweight}Kg and ${markheight}m has more Body Mass Index(BMI) ${BMIm}.`)
}
else{
    console.log(`John of ${johnweight}Kg and ${johnheight}m has more Body Mass Index(BMI) ${BMIj}.`)
}
