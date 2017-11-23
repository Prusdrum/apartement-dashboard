import {createSelector} from 'reselect';
import moment from 'moment';
import getTramsForSpecificHour from '../../services/tram/get-tram-for-specific-hour';

export const getTramStopName = (state) => state.dashboard.tramStop;
export const getTramLine = (state) => state.dashboard.tramLine;
const getTramDepartures = (state) => state.dashboard.tramDepartures;

export const areTramsLoaded = (state) => state.dashboard.tramsLoaded;

export const getNearestTramDepartures = createSelector(
    getTramDepartures,
    (tramDepartures) => {
        const now = moment();

        const formatTime = (time) => moment(time).format('HH:mm');
        
        const getDepartures = (time) => ({
            hour: time.hour(),
            departures: getTramsForSpecificHour(time, tramDepartures).map(formatTime)
        });

        return {
            currentHour: getDepartures(now), 
            nextHour: getDepartures(now.add(1, 'hour'))
        }
    }
)