const moment = require('moment');

module.exports = (now, departures) => {
    const hour = moment(now).hour();

    const departuresForHour = departures.find(departure => departure.hour === hour);

    if (!departuresForHour) {
        return [];
    }

    const datesOfDepartures = departuresForHour.weekday.map(minute => {
        return moment(now)
            .hour(hour)
            .minute(minute)
            .toDate();
    });

    return datesOfDepartures;
}