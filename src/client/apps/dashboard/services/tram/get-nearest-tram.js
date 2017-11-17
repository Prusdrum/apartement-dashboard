const moment = require('moment');

const getNearestTram = (departures, time) => {
    const now = moment(time);

    //information about current time
    const hour = now.hour();
    const day = now.weekday();
    const minutes = now.minutes();
    // console.log(`hour: ${hour}, minutes: ${minutes}`)    
    //--------------------------------

    let futureDepartures = departures
        .filter(d => d.hour >= hour);

    let isHourFound = false;
    let hourFound = hour;
    let futureDeparturesInHour;
    let departuresInHour;
    let hourIndex = 0;
    let smallestPossibleMinutes = minutes;

    while (!isHourFound) {
        departuresInHour = futureDepartures[hourIndex];
        futureDeparturesInHour = getDeparturesAfterSpecificMinute(smallestPossibleMinutes, departuresInHour.weekday);
        
        if (futureDeparturesInHour.length === 0) {
            hourIndex += 1;
            smallestPossibleMinutes = 0;
        } else {
            isHourFound = true;
            break;
        }
    }

    return moment()
        .date(now.date())
        .hour(departuresInHour.hour)
        .minute(futureDeparturesInHour[0]);
}


const getDeparturesAfterSpecificMinute = (minute, departures) => {
    return departures.filter(d => d >= minute);
}


module.exports = getNearestTram;