const day='Monday'

switch(day){
    case 'Monday':{
        console.log('First Day of the week')
        break 
    } //brackets are optional
    case 'Tuesday':
        console.log('Second Day of the week')
        break

    case 'Wednesday':{
        console.log('Third Day of the week')
        break
    }
    case  'Thursday':{
        console.log('Fourth Day of the Week')
        break
    }
    case 'Friday':
        console.log('Fifth Day of the week')
        break
    
    case 'Saturday':
        console.log('Sixth Day of the week')
        break

    case 'Sunday':
        console.log('Seventh Day of the week')
        break
    
    default:
        console.log(`InCorrect Day ${day}`)
}