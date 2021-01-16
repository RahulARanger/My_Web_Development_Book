const day='Monday'

switch(day){
    case 'Monday':{
        console.log('First Day of the week')
        
    } //brackets are optional
    case 'Tuesday':
        console.log('Second Day of the week'); 
        

    case 'Wednesday':{
        console.log('Third Day of the week')
        
    }
    case  'Thursday':{
        console.log('Fourth Day of the Week')
        break // it stops here with the gives case of day='monday' 
    }
    case 'Friday':
        console.log('Fifth Day of the week')
        
    
    case 'Saturday':
        console.log('Sixth Day of the week')
        

    case 'Sunday':
        console.log('Seventh Day of the week')
        
    
    default:
        console.log(`InCorrect Day ${day}`)
}